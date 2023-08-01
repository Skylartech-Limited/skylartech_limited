import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Discover from "../../assets/Services image/discover.png";

const discovery = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Discovery{" "}
            <span className="text-amber-500">
              <Typewriter
                words={["Workshop"]}
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
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Discovering Your Goals
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech's discovery workshop is a collaborative session where we
            help you with Idea Validation, Requirements Engineering, and Product
            Visualization.
          </p>
          <ul>
            <li>
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
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-wrap items-start justify-center md:justify-between gap-8 md:gap-20">
          <div className="flex justify-center md:ml-[6rem]">
            <img
              src={Discover}
              alt="discover"
              className="h-[26rem] w-[24rem] rounded-lg pb-10"
            />
          </div>
          <div className="flex flex-col justify-start md:max-w-2xl md:mr-[6rem]">
            <h1 className="pb-4 font-semibold text-4xl text-left max-w-xl">
              Accelerate business growth with solution{" "}
              <span className="text-amber-500">discovery workshop</span>
            </h1>
            <p className="text-left">
              Condense months of work into days, solve complex business problems
              and develop successful products that are highly tailored to users’
              needs. Starting with a product discovery workshop can help
              mitigate risks and save you from the hassle of product changes,
              revisions or major tweaks in later development or testing stages.
            </p>
            <p className="text-left mt-5">
              Use human-centered design tools and methodologies to deliver
              flawless product experience to your users, and reduce the risk of
              failure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default discovery;
