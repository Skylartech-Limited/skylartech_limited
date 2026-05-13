import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import COOP from "../../assets/Client Slider/CooperativeBank.png";
import KCB from "../../assets/Client Slider/KCB.png";
import Palladium from "../../assets/Client Slider/Palladium.png";
import Ampath from "../../assets/Client Slider/Ampath.png";
import Seacom from "../../assets/Client Slider/Seacom.png";
import StimaSacco from "../../assets/Client Slider/StimaSacco.png";
import IOM from "../../assets/Client Slider/IOM.png";
import BaseTitanium from "../../assets/Client Slider/BaseTitanium.png";
import Brisk from "../../assets/Client Slider/Brisk.png";
import Adra from "../../assets/Client Slider/Adra.png";

const ClientSlider = () => {
  const images = [
    KCB, COOP, Palladium, Ampath, Seacom,
    StimaSacco, Adra, BaseTitanium, Brisk, IOM,
  ];

  const [imagesPerSlide, setImagesPerSlide] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const prevSlide = useCallback(() => {
    setCurrentIndex((p) => (p === 0 ? totalSlides - 1 : p - 1));
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((p) => (p + 1) % totalSlides);
  }, [totalSlides]);

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

  // auto-slide (optimized, no interval dependency issues)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(id);
  }, [totalSlides]);

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

      {/* SLIDER */}
      <div className="relative max-w-6xl mx-auto px-6">

        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 rounded-full shadow-lg"
        >
          <BsChevronCompactLeft size={26} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 rounded-full shadow-lg"
        >
          <BsChevronCompactRight size={26} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
                    <div
                      key={i}
                      className="
                        flex-1 bg-white shadow-md rounded-2xl p-4 sm:p-6
                        flex items-center justify-center
                        h-24 sm:h-28 lg:h-32 border border-gray-100
                        transition-transform duration-300 hover:scale-105
                      "
                    >
                      <img
                        src={img}
                        alt="client"
                        className="h-full w-full object-contain"
                      />
                    </div>
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