import React, { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Function to initialize LiveChat
    const initializeLiveChat = () => {
      window.__lc = window.__lc || {};
      window.__lc.license = 17082372;

      // Your LiveChat script...
      (function (n, t, c) {
        function i(n) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }
        var e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function () {
            i(["on", c.call(arguments)]);
          },
          once: function () {
            i(["once", c.call(arguments)]);
          },
          off: function () {
            i(["off", c.call(arguments)]);
          },
          get: function () {
            if (!e._h)
              throw new Error(
                "[LiveChatWidget] You can't use getters before load."
              );
            return i(["get", c.call(arguments)]);
          },
          call: function () {
            i(["call", c.call(arguments)]);
          },
          init: function () {
            var n = t.createElement("script");
            n.async = !0;
            n.type = "text/javascript";
            n.src = "https://cdn.livechatinc.com/tracking.js";
            t.head.appendChild(n);
          },
        };
        !n.__lc.asyncInit && e.init();
        n.LiveChatWidget = n.LiveChatWidget || e;
      })(window, document, [].slice);
    };

    // Event handler for user click
    const handleUserClick = () => {
      initializeLiveChat();
    };

    // Add event listener to the document
    document.addEventListener("click", handleUserClick);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleUserClick);
    };
  }, []);

  return (
    <div>
      <noscript>
        <a
          href="https://www.livechat.com/chat-with/17082372/"
          rel="nofollow noopener noreferrer"
        >
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener noreferrer"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </div>
  );
};

export default LiveChat;