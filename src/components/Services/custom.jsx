import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom"
//import Discover from "../../assets/Services image/discover.png";
//import Check from "../../assets/Services image/check.png";
import Serv from "../../assets/Services image/custom-software-1-1.png"

const custom = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Custom Software{" "}
            <span className="text-amber-500">
              <Typewriter
                words={["Development"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="~" />
            </span>
          </h2>
          <h1 className="max-w-xl text-5xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Custom Software Solutions for Your Business Needs
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Either you have a greenfield product or an existing product, We are
            your one-stop shop. Engage us for the entire life cycle or any phase
            of your software development.
          </p>
          <ul>
            <li>
            <Link to="/contact-us">
              <motion.button
                className="border-2 border-amber-500 bg-white hover:bg-amber-500 text-black px-4 py-2 rounded"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
              >
                Let's Talk
                <span
                  className="ml-2 text-xl"
                  style={{ lineHeight: "0.7", transform: "scale(1.2)" }}
                >
                  &#8594;
                </span>
              </motion.button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex ml-[8rem] mr-[5rem] mb-16 mt-12">
        <div className="flex justify-center">
          <img src={Serv} className="w-[457px] h-[221px] mt-10" alt="serv"/>
        </div>
        <div className="flex flex-col text-left ml-28">
          <h1 className="font-semibold text-lg text-amber-500">WHAT YOU GET</h1>
          <h1 className="font-semibold text-3xl my-6">Custom Software Development</h1>
          <ul className="list-disc max-w-lg marker:text-amber-600 marker:text-3xl">
            <li>Better business decisions with structured, augmented, and visualized data</li>
            <li>Higher operations efficiency and automation with advanced data management</li>
            <li>Engineering solutions leveraging new possibilities of advanced technologies (AI, Machine Learning, Big Data, IoT, and others)</li>
          </ul>
        </div>
      </div>

      {/*methodologies */}
      <div div className="flex flex-col justify-center items-center bg-amber-50">
        <h1 className="pt-12 text-3xl text-black text-center font-semibold">
          Software Development Methodologies
        </h1>
        <h3 className="text-lg text-gray-900 mx-auto max-w-2xl font-semibold py-6">
          Fast-track your projects delivery using our simple three-step
          application development process.
        </h3>
        <div className="lg:flex lg:flex-row lg:justify-between flex-col gap-10 px-10">
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Requirements Gathering
            </h1>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Work Breakdown Structure</li>
              <li>Project Plan</li>
              <li>Project Budget</li>
              <li>Requirements Docs</li>
              <li>Use Cases</li>
              <li>User Stories</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Design & Development
            </h1>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Low-Fidelity Design</li>
              <li>Hi-Fidelity Design</li>
              <li>User Experience Design</li>
              <li>Source Code</li>
              <li>Compiled Code</li>
              <li>Code Documentation</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Delivery & Support
            </h1>

            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Release Management</li>
              <li>Change Management</li>
              <li>User Docs and Training</li>
              <li>Scheduled Maintenance</li>
              <li>Adaptive Maintenance</li>
              <li>Software Roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default custom;
