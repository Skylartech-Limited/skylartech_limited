import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // If hash exists → scroll to section
      if (hash) {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }
      }

      // Default route change → smooth top scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 120); // small delay improves route paint stability

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default PageScroll;