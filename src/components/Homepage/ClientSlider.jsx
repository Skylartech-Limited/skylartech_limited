import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import COOP from "../../assets/Technology slider/CooperativeBank.png";
import KCB from "../../assets/Technology slider/KCB.png";
import Palladium from "../../assets/Technology slider/Palladium.png";
import Ampath from "../../assets/Technology slider/Ampath.png";
import Seacom from "../../assets/Technology slider/Seacom.png";
import StimaSacco from "../../assets/Technology slider/StimaSacco.png";
import IOM from "../../assets/Technology slider/IOM.png";
import BaseTitanium from "../../assets/Technology slider/BaseTitanium.png";
import Brisk from "../../assets/Technology slider/Brisk.png";
import Adra from "../../assets/Technology slider/Adra.png";

const ClientSlider = () => {
  const images = [
    KCB, COOP, Palladium, Ampath, Seacom,
    StimaSacco, Adra, BaseTitanium, Brisk, IOM,
  ];

  const [imagesPerSlide, setImagesPerSlide] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const prevSlide = () => {
    setCurrentIndex((p) => (p === 0 ? totalSlides - 1 : p - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((p) => (p + 1) % totalSlides);
  };

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 640) setImagesPerSlide(2);
      else if (w <= 1024) setImagesPerSlide(3);
      else setImagesPerSlide(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-10">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
          Trusted by Leading <span className="text-amber-300">Organizations</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Banking, telecom, NGOs, and enterprises using our training and consulting services.
        </p>
      </div>
{/* SLIDER WRAPPER */}
<div className="relative max-w-6xl mx-auto px-6">

  {/* LEFT ARROW (OUTSIDE CONTENT AREA) */}
  <button
    onClick={prevSlide}
    className="
      absolute -left-4 sm:-left-6 lg:-left-10
      top-1/2 -translate-y-1/2
      z-30
      bg-white/90 hover:bg-white
      shadow-lg
      p-3 rounded-full
      transition
    "
  >
    <BsChevronCompactLeft size={26} />
  </button>

  {/* RIGHT ARROW */}
  <button
    onClick={nextSlide}
    className="
      absolute -right-4 sm:-right-6 lg:-right-10
      top-1/2 -translate-y-1/2
      z-30
      bg-white/90 hover:bg-white
      shadow-lg
      p-3 rounded-full
      transition
    "
  >
    <BsChevronCompactRight size={26} />
  </button>

  {/* SLIDES */}
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <div
          key={slideIndex}
          className="min-w-full flex justify-center items-center gap-4 sm:gap-6"
        >
          {images
            .slice(
              slideIndex * imagesPerSlide,
              slideIndex * imagesPerSlide + imagesPerSlide
            )
            .map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                  flex-1
                  bg-white
                  shadow-md
                  rounded-2xl
                  p-4 sm:p-6
                  flex items-center justify-center
                  h-24 sm:h-28 lg:h-32
                  border border-gray-100
                "
              >
                <img
                  src={img}
                  alt="client"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}
        </div>
      ))}
    </div>
  </div>

</div>
    </div>
  );
};

export default ClientSlider;