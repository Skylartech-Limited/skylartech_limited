import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Phone from "../../assets/phonesky-removebg-preview.png";
import Reactimg from '../../assets/techimg/structure.png'
import Databs from '../../assets/techimg/database.png'
import Nodejs from '../../assets/techimg/node-js.png'
import Python from '../../assets/techimg/python.png'

const Technologies = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
            Features and{" "}
            <span className="text-amber-500 font-medium">
              <Typewriter
                words={["Technologies", "Technologies"]}
                loop={50}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="~" />
            </span>
          </h2>
          <h1 className="max-w-md text-3xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Digitize Your Business With Our Modern Development Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-md py-5 text-gray-600">
            We at Skylartech ensure to work with the latest technologies
            available in the market to develop the best products for our
            customers. Our expertise and resources are used to accomplish the
            latest software solutions that comply with high-tech mobile/website
            development frameworks and languages.
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
      <div className="container p-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          Building Native & Cross Platform{" "}
          <span className="text-amber-500">Mobile Apps</span>
        </h1>
        <div className="py-10 justify-center flex gap-20">
        <img src={Phone} className="max-w-full mx-auto h-72 w-90 rounded-lg pb-10" style={{"float":"left"}}/>
        <p className="text-left px-10 max-w-2xl pt-20" style={{"margin-left":"40px", "fontSize":"17px"}}>
          We have equipped ourselves with up-to-date mobile app platforms for
          development which include native and cross-platform apps. Our purpose
          is to ensure our customers can find all mobile app solutions in one
          place.
        </p>
        </div>
      </div>
    </>
  );
};
export default Technologies;
