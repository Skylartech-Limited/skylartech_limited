import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Technologies from "../../assets/Technology Images/technologies.png";
import Amazon from "../../assets/Technology slider/amazon.png";
import Airbnb from "../../assets/Technology slider/airbnb.png";
import Cisco from "../../assets/Technology slider/cisco.png";
import Apple from "../../assets/Technology slider/apple.png";
import Samsung from "../../assets/Technology slider/samsung.png";

const HomeSlider = () => {
  const images = [Amazon, Airbnb, Cisco, Apple, Samsung];
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAutomaticSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= images.length - 2 ? 0 : prevSlide + 2
    );
  };

  useEffect(() => {
    const interval = setInterval(handleAutomaticSlide, 4000);
    return () => clearInterval(interval);
  });

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 2 : prevSlide - 2
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= images.length - 2 ? 0 : prevSlide + 2
    );
  };

  const renderSlideImages = () => {
    const firstImage = images[currentSlide];
    const secondImage = images[currentSlide + 1];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slideshow-image flex justify-center items-center"
          style={{
            width: "100%",
            height: "30%",
            position: "absolute",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="slideshow-image-item mt-2"
            style={{
              flex: "1",
              maxWidth: "40%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${firstImage})`,
            }}
          ></motion.div>
          <motion.div
            className="slideshow-image-item mt-2"
            style={{
              flex: "1",
              maxWidth: "40%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${secondImage})`,
            }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto p-5 flex flex-col items-center">
      {isSmallScreen ? (
        <>
          <h1 className="font-semibold text-2xl sm:text-xl lg:text-4xl text-center mt-8 sm:mt-10 mb-4 sm:mb-6 lg:mb-8">
            <span className="text-amber-500">Technologies</span> We Work With
          </h1>
          <div className="max-w-[1400px] h-[250px] w-full m-auto py-16 relative group">
            {/* Left Arrow */}
            <div
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
              style={{ left: "0" }}
              onClick={handlePrevSlide}
            >
              <BsChevronCompactLeft size={30} />
            </div>
            {/* Right Arrow */}
            <div
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
              style={{ right: "0" }}
              onClick={handleNextSlide}
            >
              <BsChevronCompactRight size={30} />
            </div>
            <div className="slideshow-container mt-6">
              {renderSlideImages()}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-semibold text-2xl sm:text-xl lg:text-4xl text-center mt-8 sm:mt-10 mb-4 sm:mb-6 lg:mb-8">
            <span className="text-amber-500">Technologies</span> We Work With
          </h1>
          <div className="mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-10 lg:mb-12 items-center">
            <img
              src={Technologies}
              alt="tech"
              className="w-full max-w-[1024px] h-[374px] object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeSlider;
