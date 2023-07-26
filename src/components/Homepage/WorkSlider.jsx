import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Amazon from "../../assets/Technology slider/amazon.png";
import Comp1 from "../../assets/Homepage images/compimg.png";
import Comp2 from "../../assets/Homepage images/compi2.png";
import Comp3 from "../../assets/Homepage images/compi3.png";
import Comp4 from "../../assets/Homepage images/compi4.png";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + containers.length) % containers.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % containers.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  });

  // Variables to handle touch events
  let touchStartX = 0;
  let touchEndX = 0;

  // Function to handle touch start event
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  // Function to handle touch move event
  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  // Function to handle touch end event and determine swipe direction
  const handleTouchEnd = () => {
    const touchDistance = touchEndX - touchStartX;
    if (touchDistance > 0) {
      handlePrevSlide(); // Swipe right, show previous slide
    } else if (touchDistance < 0) {
      handleNextSlide(); // Swipe left, show next slide
    }
  };

  const containers = [
    <div className="container">
      <div className="lg:h-[600px] lg:w-[1150px] bg-gradient-to-br from-blue-600 to-cyan-500 mx-4 md:mx-8 lg:mx-auto my-8 lg:flex lg:items-center rounded-md p-4">
        <div className="text-white text-center lg:text-left lg:pl-[3rem] lg:pt-[1rem] lg:w-1/2">
          <div className="pb-6">
            <h1 className="text-xl font-medium">The Temp Hub</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              A web application that helps users find all kinds of daily-use
              services.
            </h1>
          </div>
          <div className="pb-5">
            <p className="max-w-lg text-xl">
              To add value to service providers by creating a platform that
              allows for a safe and secure transaction.
            </p>
          </div>
          <div className="flex items-center">
            <div className="card shadow-xl bg-gradient-to-r from-slate-800 to-slate-500 rounded-lg pt-2 pb-2 pr-3">
              <p className="text-lg pt-4 ml-6 max-w-md">
                I have high hopes to take this project forward and looking to
                develop phase-2 with{" "}
                <span className="font-semibold text-amber-500">Skylartech</span>
              </p>
              <div className="flex pb-4 ml-6">
                <img
                  src={Amazon}
                  className="w-10 h-14 pt-3"
                  alt="Amazon Logo"
                />
                <p className="pt-3 ml-3 leading-5">
                  <span className="font-semibold">Lana James</span> <br />
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center py-8">
          <img
            src={Comp1}
            alt="Company"
            className="max-h-[350px] md:max-h-[250px] lg:max-h-[350px]"
          />
        </div>
      </div>
    </div>,

    <div className="container">
      <div className="lg:h-[600px] lg:w-[1150px] bg-gradient-to-br from-violet-600 to-purple-300 mx-4 md:mx-8 lg:mx-auto my-8 lg:flex lg:items-center rounded-md p-4">
        <div className="text-white text-center lg:text-left lg:pl-[3rem] lg:pt-[1rem] lg:w-1/2">
          <div className="pb-6">
            <h1 className="text-xl font-medium">Pak Campers</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              Our mission is to help you to escape everyday routines and embrace
              your adventurous spirit by exploring Iceland in our campervans.
            </h1>
          </div>

          <div className="flex items-center">
            <div className="card shadow-xl bg-gradient-to-r from-slate-800 to-slate-500 rounded-lg pt-2 pb-2 pr-3">
              <p className="text-lg pt-4 ml-6 max-w-md">
                I have high hopes to take this project forward and looking to
                develop phase-2 with{" "}
                <span className="font-semibold text-amber-500">Skylartech</span>
              </p>
              <div className="flex pb-4 ml-6">
                <img
                  src={Amazon}
                  className="w-10 h-14 pt-3"
                  alt="Amazon Logo"
                />
                <p className="pt-3 ml-3 leading-5">
                  <span className="font-semibold">Lana James</span> <br />
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center py-8">
          <img
            src={Comp2}
            alt="Company"
            className="max-h-[350px] md:max-h-[250px] lg:max-h-[350px]"
          />
        </div>
      </div>
    </div>,

    <div className="container">
      <div className="lg:h-[600px] lg:w-[1150px] bg-gradient-to-br from-teal-600 to-sky-300 mx-4 md:mx-8 lg:mx-auto my-8 lg:flex lg:items-center rounded-md p-4">
        <div className="text-white text-center lg:text-left lg:pl-[3rem] lg:pt-[1rem] lg:w-1/2">
          <div className="pb-6">
            <h1 className="text-xl font-medium">TalkMaze</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              Access to high quality public speaking
            </h1>
          </div>
          <div className="pb-5">
            <p className="max-w-lg text-xl">
              Access to high quality public speaking and debate training is a
              luxury that is inaccessible to most students. We’re here to change
              the status quo.
            </p>
          </div>
          <div className="flex items-center">
            <div className="card shadow-xl bg-gradient-to-r from-slate-800 to-slate-500 rounded-lg pt-2 pb-2 pr-3">
              <p className="text-lg pt-4 ml-6 max-w-md">
                I have high hopes to take this project forward and looking to
                develop phase-2 with{" "}
                <span className="font-semibold text-amber-500">Skylartech</span>
              </p>
              <div className="flex pb-4 ml-6">
                <img
                  src={Amazon}
                  className="w-10 h-14 pt-3"
                  alt="Amazon Logo"
                />
                <p className="pt-3 ml-3 leading-5">
                  <span className="font-semibold">Lana James</span> <br />
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center py-8">
          <img
            src={Comp4}
            alt="Company"
            className="max-h-[350px] md:max-h-[250px] lg:max-h-[350px]"
          />
        </div>
      </div>
    </div>,

    <div className="container">
      <div className="lg:h-[600px] lg:w-[1150px] bg-gradient-to-br from-orange-600 to-yellow-200 mx-4 md:mx-8 lg:mx-auto my-8 lg:flex lg:items-center rounded-md p-4">
        <div className="text-white text-center lg:text-left lg:pl-[3rem] lg:pt-[1rem] lg:w-1/2">
          <div className="pb-6">
            <h1 className="text-xl font-medium">Drivia</h1>
          </div>
          <div className="pb-6">
            <h1 className="font-medium text-4xl max-w-lg leading-normal">
              Looking at cars
            </h1>
          </div>
          <div className="pb-5">
            <p className="max-w-lg text-xl">
              we built Driva - a platform that helps customers like Scott fight
              back on the black-box that is the car finance process - providing
              options and transparency in a way that is sorely needed in the
              industry.
            </p>
          </div>
          <div className="flex items-center">
            <div className="card shadow-xl bg-gradient-to-r from-slate-800 to-slate-500 rounded-lg pt-2 pb-2 pr-3">
              <p className="text-lg pt-4 ml-6 max-w-md">
                I have high hopes to take this project forward and looking to
                develop phase-2 with{" "}
                <span className="font-semibold text-amber-500">Skylartech</span>
              </p>
              <div className="flex pb-4 ml-6">
                <img
                  src={Amazon}
                  className="w-10 h-14 pt-3"
                  alt="Amazon Logo"
                />
                <p className="pt-3 ml-3 leading-5">
                  <span className="font-semibold">Lana James</span> <br />
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center py-8">
          <img
            src={Comp3}
            alt="Company"
            className="max-h-[350px] md:max-h-[250px] lg:max-h-[350px]"
          />
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <div className="sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
        <h1 className="font-semibold text-4xl text-center mt-10 mb-6">
          Our <span className="text-amber-500">Work</span>
        </h1>
      </div>
      <div
        className="relative w-full overflow-hidden mb-11"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {containers.map((container, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              style={{ flexBasis: "100%" }}
            >
              {container}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <button
            className="absolute top-1/2 left-28 transform -translate-y-1/2 px-4 py-2 rounded-lg text-amber-500 arrow-buttons"
            onClick={handlePrevSlide}
          >
            <BsChevronCompactLeft className="w-8 h-8 stroke-2" />
          </button>
          <button
            className="absolute top-1/2 right-28 transform -translate-y-1/2 px-4 py-2 rounded-lg text-amber-500 arrow-buttons"
            onClick={handleNextSlide}
          >
            <BsChevronCompactRight className="w-8 h-8 stroke-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Work;
