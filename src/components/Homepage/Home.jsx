import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="text-left p-10">
      <>
        <h2 className="text-2xl font-medium text-gray-800 py-2 pt-10">
          Delivering quality projects{" "}
          <span className="text-amber-500 font-medium">
            <Typewriter
              words={["beyond expectations", "beyond expectations"]}
              loop={10}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="text-gray-400">
            <Cursor cursorStyle="~" />
          </span>
        </h2>
        <h1 className="max-w-xl text-4xl py-2 font-semibold text-gray-800">
          Digitize Your Business With Our Modern Development Solutions
        </h1>
        <p className="text-lg max-w-xl py-5 leading-8 text-gray-600">
          Devinx is a specialized mobile and web app development company with a
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
            </motion.button>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Home;
