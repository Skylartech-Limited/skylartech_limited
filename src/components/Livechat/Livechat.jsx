import React, { useEffect } from "react";

const LiveChat = () => {
    useEffect(() => {
        // Load Tawk.to script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/65b38aae8d261e1b5f58305c/1hl2lbf78';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
    
        document.head.appendChild(script);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.head.removeChild(script);
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
      return (
        <div>
        </div>
      );
};

export default LiveChat;
