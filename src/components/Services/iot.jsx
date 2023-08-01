import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";

const iot = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            IOT{" "}
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
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Internet of Things (IOT) Development Company
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Lead the competition with flexible IOT development services.
            Leverage the Internet of Things to automate and streamline
            workflows. Utilize the right IoT technology stack to build data-rich
            software solutions.
          </p>
          <ul>
            <li>
              <motion.button
                className="border-2 border-amber-500 bg-white hover:bg-amber-500 text-black px-4 py-2 rounded"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
              >
                Discuss your Project
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
    </>
  );
};

export default iot;
