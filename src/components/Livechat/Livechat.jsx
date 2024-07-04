import React, { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Create a new script element for Tawk.to integration
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/65b38aae8d261e1b5f58305c/1hl2lbf78';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup function for script removal
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default LiveChat;