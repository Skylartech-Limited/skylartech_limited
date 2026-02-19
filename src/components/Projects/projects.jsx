// Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";

const Projects = () => {
  const images = [Cert1, Cert2, Cert3, Cert4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full md:w-11/12 lg:w-10/12 xl:w-4/5">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Our Projects & Certifications
        </h1>
        <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Certificate ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-auto object-cover"
            />
          </AnimatePresence>
                 <img
              src={GroupPhoto}
              alt="What We Do"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto mb-6 mt-8 rounded-lg shadow"
            />
        </div>
      </div>
    </div>
  );
};

export default Projects;
