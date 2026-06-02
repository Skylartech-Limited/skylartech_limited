import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScrollButton) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        fixed z-[999]
        bottom-6 left-4 sm:left-6
      "
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          relative w-12 h-12 rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-lg shadow-black/20
          text-white
          hover:scale-110 transition
        "
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" />
        <i className="fa-solid fa-chevron-up relative z-10 text-sm" />
      </button>
    </motion.div>
  );
};

export default Scroll;