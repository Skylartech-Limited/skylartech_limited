import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Tech from "../../assets/Technology Images/smallweb.png";
import Amazon from "../../assets/Technology slider/amazon.png";
import Airbnb from "../../assets/Technology slider/airbnb.png";
import Cisco from "../../assets/Technology slider/cisco.png";
import Apple from "../../assets/Technology slider/apple.png";
import Samsung from "../../assets/Technology slider/samsung.png";

const Slider = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const renderSlideImages = () => {
    const activeImage = images[currentSlide];

    return (
      <div
        className="slideshow-image active"
        style={{
          width: "100%",
          height: "40%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          position: "absolute",
          justifyContent: "space-between",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          backgroundImage: `url(${activeImage})`,
        }}
      ></div>
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto p-5">
      {isSmallScreen ? (
        <>
          <h1 className="font-semibold text-3xl text-center pb-8 pt-10">
            <span className="text-amber-500">Web Technologies </span>We Work
            With
          </h1>
          <div className="max-w-[1400px] h-[250px] w-full m-auto py-16 px-4 relative group">
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
            <div className="slideshow-container mt-4">
              {renderSlideImages()}
            </div>
          </div>
        </>
      ) : (
        <div className="px-4 sm:px-8 md:px-16 flex flex-col items-center">
          <h1 className="font-semibold text-3xl text-center pb-8 pt-10">
            <span className="text-amber-500">Web Technologies </span>We Work
            With
          </h1>
          <div className="flex justify-center items-center">
            <img src={Tech} alt="Tech" className="max-w-full pt-10 pb-10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
