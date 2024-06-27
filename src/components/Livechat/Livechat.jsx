import React, { useEffect } from 'react';

const fetchData = async () => {
  try {
    const response = await fetch('https://example.com/api/data', {
      method: 'GET',
      mode: 'cors', // Set the request's mode to 'no-cors'
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
    });

    if (response.ok) {
      console.log('Request successful');
      // Handle response or trigger actions if needed
    } else {
      console.log('Request failed');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const LiveChat = () => {
  useEffect(() => {
    fetchData(); // Call your fetch function here if needed
  }, []); // Ensure this effect runs only once

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
      {/* Optional: You can add additional content here */}
    </div>
  );
};

export default LiveChat;
