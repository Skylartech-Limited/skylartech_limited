import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import COOP from "../../assets/Technology slider/CooperativeBank.png"
import KCB from "../../assets/Technology slider/KCB.png"
import Palladium from "../../assets/Technology slider/Palladium.png"
import Ampath from "../../assets/Technology slider/Ampath.png"
import Seacom from "../../assets/Technology slider/Seacom.png"
import StimaSacco from "../../assets/Technology slider/StimaSacco.png"
import IOM from "../../assets/Technology slider/IOM.png"
import BaseTitanium from "../../assets/Technology slider/BaseTitanium.png"
import Brisk from "../../assets/Technology slider/Brisk.png"
import Adra from "../../assets/Technology slider/Adra.png"

const ClientSlider = () => {
  const images = [
    KCB,
    COOP,
    Palladium,
    Ampath,
    Seacom,
    StimaSacco,
    Adra,
    BaseTitanium,
    Brisk,
    IOM
  ];

  const [imagesPerSlide, setImagesPerSlide] = useState(0);
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setImagesPerSlide(2);
      } else {
        setImagesPerSlide(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="p-5 flex flex-col items-center overflow-hidden">
      <h1 className="font-semibold text-2xl sm:text-xl lg:text-4xl text-center mt-8 sm:mt-10 mb-4 sm:mb-6 lg:mb-8 ">
        Our <span className="text-amber-500">Clients</span>
      </h1>
      <div className="max-w-[1400px] h-[250px] w-full m-auto py-16 relative group">
        {/* Left Arrow */}
        <div
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
          style={{ left: "0" }}
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
          style={{ right: "0" }}
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div
          className="flex justify-center items-center mt-6 overflow-hidden"
          style={{
            width: "100%",
            height: "30%",
            position: "absolute",
          }}
        >
          {[...Array(imagesPerSlide)].map((_, index) => {
            const imageIndex = currentIndex * imagesPerSlide + index;
            const image = images[imageIndex];
            if (!image) return null;
            return (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`slideshow-image ${
                  index === currentIndex % imagesPerSlide ? "active" : ""
                }`}
                style={{
                  flex: `0 0 calc(100% / ${imagesPerSlide})`,
                  maxWidth: imagesPerSlide === 2 ? "40%" : "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  justifyContent: "space-between",
                  backgroundSize: "contain",
                  backgroundImage: `url(${image})`,
                }}
              ></motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
