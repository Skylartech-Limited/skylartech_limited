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
    KCB,
    COOP,
    Palladium,
    Ampath,
    Seacom,
    StimaSacco,
    Adra,
    BaseTitanium,
    Brisk,
    IOM,
  ];

  const imagesPerSlide = 1;

  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-10">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
          Trusted by Leading{" "}
          <span className="text-purple-300">Organizations</span>
        </h2>

        <p className="text-white/70 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Banking, telecom, NGOs, and enterprises using our training and
          consulting services.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-4xl mx-auto">
        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 
          bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <BsChevronCompactLeft size={26} />
        </button>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 
          bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
        >
          <BsChevronCompactRight size={26} />
        </button>

        {/* TRACK */}
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
                className="min-w-full flex justify-center items-center gap-10"
              >
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    slideIndex * imagesPerSlide + imagesPerSlide,
                  )
                  .map((img, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center justify-center
                        w-44 sm:w-52 md:w-60 lg:w-64
                        h-24 sm:h-28 md:h-32 lg:h-36
                        bg-white
                        rounded-xl
                        shadow-md
                        border border-gray-100
                        p-4
                        transition-transform duration-300 hover:scale-105
                      "
                    >
                      <img
                        src={img}
                        alt="client"
                        className="
                          max-h-full
                          max-w-full
                          object-contain
                        "
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
