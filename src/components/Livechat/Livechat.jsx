import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // SSR safety
    if (typeof window === "undefined") return;

    // Prevent duplicate injection
    if (document.getElementById("tawk-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/65b38aae8d261e1b5f58305c/1hl2lbf78";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      console.log("Tawk.to loaded!");
    };

    script.onerror = () => {
      console.error("Failed to load Tawk.to");
    };

    document.body.appendChild(script);

    // Optional cleanup (useful in SPA route changes)
    return () => {
      const existingScript = document.getElementById("tawk-script");
      if (existingScript) {
        existingScript.remove();
      }

      // Optional: reset API if needed
      delete window.Tawk_API;
    };
  }, []);

  return null;
};

export default LiveChat;