import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row text-left p-10">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
          Delivering quality projects{" "}
          <span className="text-amber-500 font-medium">
            <Typewriter
              words={["beyond expectations", "beyond expectations"]}
              loop={50}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="text-gray-700">
            <Cursor cursorStyle="~" />
          </span>
        </h2>
        <h1 className="max-w-xl text-3xl md:text-4xl lg:text-5xl xl:text-4xl py-2 font-semibold text-gray-800">
          Digitize Your Business With Our Modern Development Solutions
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
          Skylartech is a specialized mobile and web app development company with a
          focus on smart technologies and customer satisfaction. Born in 2018,
          our company has been delivering high-end quality solutions to global
          businesses with a success rate of 100%. Hire our expertise at
          affordable prices to have the right tech solutions for your company.
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
      <div className="lg:w-1/2">
        <img
          className="hidden lg:block max-w-full h-auto"
          src="image.jpg"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Home;
