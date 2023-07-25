import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Tech from "../../assets/Technology Images/smallweb.png";
import Amazon from "../../assets/Technology slider/amazon.png";
import Airbnb from "../../assets/Technology slider/airbnb.png";
import Cisco from "../../assets/Technology slider/cisco.png";
import Apple from "../../assets/Technology slider/apple.png";
import Samsung from "../../assets/Technology slider/samsung.png";

const TechSlider = () => {
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
      <div
        className="slideshow-image flex justify-center items-center"
        style={{
          width: "100%",
          height: "30%",
          position: "absolute",
        }}
      >
        <div
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
        ></div>
        <div
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
        ></div>
      </div>
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto p-5 flex flex-col items-center">
      {isSmallScreen ? (
        <>
          <h1 className="font-semibold text-2xl sm:text-xl lg:text-4xl text-center mt-8 sm:mt-10 mb-4 sm:mb-6 lg:mb-8">
            <span className="text-amber-500">Web Technologies</span> We Work With
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
        <div className="px-4 sm:px-8 md:px-16 flex flex-col items-center">
          <h1 className="font-semibold text-3xl text-center pb-8 pt-10">
            <span className="text-amber-500">Web Technologies </span>We Work
            With
          </h1>
          <div className="flex justify-center items-center">
            <img src={Tech} alt="Tech" className="pt-10 pb-10" style={{width: "1034", height: "191"}}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechSlider;
