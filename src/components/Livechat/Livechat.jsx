import React, { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/65b38aae8d261e1b5f58305c/1hl2lbf78';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.onload = () => {
      console.log('Script loaded successfully!');
    };
    script.onerror = () => {
      console.error('Error loading script!');
    };
    document.head.appendChild(script);
  
    return () => {
      // Remove the script removal line to see if it makes a difference
      // document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default LiveChat;