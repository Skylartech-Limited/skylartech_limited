import React from "react";
import Project from "../../assets/Frame 4.png";
import Clock from "../../assets/Frame 3.png";
import Team from "../../assets/Frame 2.png";
import Question from "../../assets/Frame 1.png";
import { Link } from "react-router-dom";

const footerhero = () => {
  return (
    <>
      <div className="bg-amber-50 pt-16">
        <div className="mx-auto px-4 sm:px-8 md:px-16">
          <h1 className="font-semibold text-3xl pb-4 text-center">
            Hire for Excellence
          </h1>
          <h2 className="font-medium text-2xl text-center">
            Choose How <span className="text-amber-500">YOU WANT</span> to
            Collaborate
          </h2>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between items-center pb-10 mt-8 px-4 sm:px-8 md:px-16">
          <div className="card shadow-xl rounded-lg pt-20 bg-gray-50 text-center w-64 h-80 mb-8 sm:mb-0 sm:mr-4 md:mr-0">
            <img
              src={Project}
              className="pb-4 mx-auto transition ease-in-out delay-75 hover:-translate-y-0 hover:-translate-x-1  hover:scale-90 duration-300"
              alt="Project 1"
            />
            <h4 className="font-medium text-lg">Project Base</h4>
          </div>
          <div className="card shadow-xl rounded-lg pt-20 bg-gray-50 text-center w-64 h-80 mb-8 sm:mb-0 sm:mx-4 md:mx-0">
            <img
              src={Clock}
              className="pb-4 mx-auto transition ease-in-out delay-75 hover:-translate-y-0 hover:-translate-x-1  hover:scale-90 duration-300"
              alt="Project 2"
            />
            <h4 className="font-medium text-lg">
              Hire Developers on Hourly Basis
            </h4>
          </div>
          <div className="card shadow-xl rounded-lg pt-20 bg-gray-50 text-center w-64 h-80 mb-8 sm:mb-0 sm:ml-4 md:ml-0">
            <img
              src={Team}
              className="pb-4 mx-auto transition ease-in-out delay-75 hover:-translate-y-0 hover:-translate-x-1  hover:scale-90 duration-300"
              alt="Project 3"
            />
            <h4 className="font-medium text-lg">
              Dedicated Team of Developers
            </h4>
          </div>
          <div className="card shadow-xl rounded-lg pt-20 bg-gray-50 text-center w-64 h-80 sm:ml-4 md:ml-0">
            <Link to="/contact-us">
              <img
                src={Question}
                className="pb-4 mx-auto transition ease-in-out delay-75 hover:-translate-y-0 hover:-translate-x-1  hover:scale-90 duration-300"
                alt="Project 4"
              />
            </Link>
            <h4 className="font-medium text-lg">I'm Not Sure</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default footerhero;
