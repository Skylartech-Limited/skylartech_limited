import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleOfPage = window.innerHeight / 2;
      const shouldShow = window.scrollY > middleOfPage;
      setShowScrollButton(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Conditionally render the button based on the showScrollButton state
    showScrollButton && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-5 left-10 z-50"
      >
        <button
          onClick={scrollToTop}
          className="bg-slate-700 text-white p-4 rounded-full shadow-md hover:bg-amber-500 focus:outline-none"
        >
          <i
            className="fa-solid fa-chevron-up fa-lg"
            style={{ color: "#FFFFFF" }}
          ></i>
        </button>
      </motion.div>
    )
  );
};

export default Scroll;
