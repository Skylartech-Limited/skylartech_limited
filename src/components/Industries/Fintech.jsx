import React from "react";
import { motion } from "framer-motion";
import Rel from "../../assets/Industries/release.png";
import Money from "../../assets/Industries/mobile-payment.png";
import App from "../../assets/Industries/mobile-app.png";
import Intelli from "../../assets/Industries/machine-learning.png";
import Background from "../../assets/Industries/tele.jpg";

const Fintech = () => {
  return (
    <>
      <div className="h-[35rem] flex flex-col lg:flex-row text-left p-10 bg-amber-50" style={{backgroundImage: `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Fintech
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Financial Software Development Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            Skylartech is helping global fintech companies to transform their
            financial services and get ahead with emerging technology.
          </p>
          <ul>
            <li>
              <motion.button
                className="border-2 border-amber-500 bg-white 0 text-black px-4 py-2 rounded"
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

      {/*provide*/}
      <div className="ml-[14rem]">
        <h1 className="text-3xl font-semibold mt-12 max-w-4xl">
          Providing Reliable{" "}
          <span className="text-amber-500">
            Fintech Software Development
          </span>{" "}
          Services at Reasonable Costs, Fit for all Medical Facades
        </h1>
      </div>
      <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center lg:ml-[5rem]">
        <div className="mt-10">
          <img src={Rel}  alt="rel"/>
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Custom Fintech Software
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            Win customers by designing customized fintech mobile and web
            solutions. Our experts have experience in developing top-notch
            custom solutions equipped with good UI and standardize
            functionalities.
          </p>
        </div>

        <div className="mt-10">
          <img src={Money} alt="money" />
        </div>
        <div
          className="text-left shadow-xs p-10 rounded-xl"
          style={{ position: "relative" }}
        >
          <h3 className="text-xl font-semibold max-w-xs text-gray-800">
            Digital Payment Solutions
          </h3>
          <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
            From payment gateway development to digital mobile wallet apps, and
            online banking applications, we provide expert software development
            in multiple platforms and languages. Your finance world can now be
            completely digital.
          </p>
        </div>

        <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
          <div className="mt-10">
            <img src={Intelli} alt="intelligent" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              Intelligent CRM Solution
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              With our use of the latest technologies, you can now have access
              to advance cloud-based CRM solutions, including microservices and
              artificial intelligence for better financial management. We can
              take you to the next intelligent solution your business needs.
            </p>
          </div>
          <div className="mt-10">
            <img src={App} alt="app" />
          </div>
          <div
            className="text-left shadow-xs p-10 rounded-xl"
            style={{ position: "relative" }}
          >
            <h3 className="text-xl font-semibold max-w-xs text-gray-800">
              AI-enabled Fintech Apps
            </h3>
            <p className="text-md max-w-xs py-5 leading-6 text-gray-500">
              We understand the potential of AI and Big Data in fintech app
              development. Because of our hands-on experience, our AI and Big
              Data engineers can help you in smart decision-making to improve
              customer engagement and financial management with AI-Fintech Apps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fintech;
