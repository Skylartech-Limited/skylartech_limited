import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/65b38aae8d261e1b5f58305c/1hl2lbf78';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0.parentNode.insertBefore(s1, s0);

    s1.onload = () => console.log('Tawk.to loaded!');
    s1.onerror = () => console.error('Failed to load Tawk.to');
  }, []);

  return null; // no extra UI needed
};

export default LiveChat;
