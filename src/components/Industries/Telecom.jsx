import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import Code from "../../assets/Services image/coding.png";
import Tel from "../../assets/Industries/communication.png";
import Soft from "../../assets/Industries/coding (1).png";
import Perform from "../../assets/Industries/statistical.png";
import Background from "../../assets/Industries/finn.jpg";

const Telecom = () => {
  return (
    <>
      <div className="h-[35rem] flex flex-col lg:flex-row text-left p-10 bg-amber-50" style={{backgroundImage: `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Telecom
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
          Telecom Software Development Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
          Skylartech is helping global companies to transform their telecom services and get ahead with emerging technology.
          </p>
          <ul>
            <li>
            <Link to="/contact-us">
              <motion.button
                className="border-2 border-black bg-white 0 text-black px-4 py-2 rounded"
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

      {/*provide*/}
      <div className="ml-[14rem]">
        <h1 className="text-3xl font-semibold mt-12 max-w-4xl">
          Providing Reliable{" "}
          <span className="text-amber-500">Telecom Software Development</span>{" "}
          Services at Reasonable Costs, Fit for all Medical Facades
        </h1>
      </div>
      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center lg:ml-[5rem]">
        <div className="mt-10">
          <img src={Soft} className="h-[45px]" />
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Call Accounting Software
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            We develop custom call accounting software to track different types
            of calls you may receive. With our expertise, we can embed this into
            your existing telecommunication infrastructure to track different
            calls without interrupting the flow of your work.
          </p>
        </div>

        <div className="mt-10">
          <img src={Code} className="h-[45px]" />
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Telecommunication Software Development
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            We also excel in developing custom telecommunications software,
            including Operations Support Systems (OSS), Business Support Systems
            (BSS), Network Functions Virtualization (NFV), Software-Defined
            Networking (SDN), and Web & Video Conferencing platforms, so you
            find all solutions in one place
          </p>
        </div>

        <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
          <div className="mt-10">
            <img src={Tel} className="h-[45px]" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              Telecom Network Applications
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              Our expert software developers create network applications and
              communication portals with connectivity management systems,
              performance monitoring systems, and telephony system services to
              effectively streamline your communication processes across the
              board.
            </p>
          </div>
          <div className="mt-10">
            <img src={Perform} className="h-[45px]" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              Telecom Performance Monitoring Software
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              For keeping track of the performance, we also integrate IP address
              management systems, performance data collection, telecom security
              management systems, telecom information modules, network layer
              systems, fault detection solutions, and diagnostic tools to enable
              teams to monitor and maintain network efficacy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telecom;
