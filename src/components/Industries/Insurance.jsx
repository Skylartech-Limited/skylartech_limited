import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import Talk from "../../assets/Industries/talk.png";
import Digi from "../../assets/Industries/currency.png";
import Grow from "../../assets/Industries/growth.png";
import Api from "../../assets/Industries/api (1).png";
import Background from "../../assets/Industries/insurethsi.jpg";

const Insurance = () => {
  return (
    <>
      <div className="h-[35rem] flex flex-col lg:flex-row text-left p-10 bg-amber-50" style={{backgroundImage: `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Insurance
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Insurance solutions that address people, processes and business{" "}
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech is helping global insurance companies to transform their
            insurance services and get ahead with emerging technology.
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
          <span className="text-amber-500">Insurance Software Development</span>{" "}
          Services at Reasonable Costs, Fit for all Medical Facades
        </h1>
      </div>
      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center lg:ml-[5rem]">
        <div className="mt-10">
          <img src={Talk} className="h-[45px]" />
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Insuretech Automation Consulting{" "}
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            With our vast experience in insurance application development, our
            team of experts can audit your existing workflow and suggest an
            elegant technical solution to boost your productivity. We help you
            innovate with the right choice of architecture and technologies
          </p>
        </div>

        <div className="mt-10">
          <img src={Digi} className="h-[45px]" />
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Bespoke Insurance Software Development{" "}
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            We build powerful environments that help insurance providers expand
            their services and attract more customers. Whether it’s custom web
            development or smart quoting algorithms, our developers make
            technology work for your benefit.
          </p>
        </div>

        <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
          <div className="mt-10">
            <img src={Grow} className="h-[45px]" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              Insuretech Software Customization{" "}
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              Let us polish your existing programs by tailoring them to your
              unique, insurance- related needs. Our team of engineers helps you
              by adding new features and configurations to your app to adjust
              generic solutions according to your specialized business and
              security needs.
            </p>
          </div>
          <div className="mt-10">
            <img src={Api} className="h-[45px]" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              API Development{" "}
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              Establish a consolidated data view by connecting your digital
              programs with a custom API. Our developers rely on REST APIs to
              unite your risk management systems with claim management and other
              software for a 360-degree view, standardized protocols, and faster
              cycles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
