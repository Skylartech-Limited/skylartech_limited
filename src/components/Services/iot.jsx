import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom"
import Delivery from "../../assets/Services image/delivery-box.png";
import Scale from "../../assets/Services image/full-screen.png";
import Lock from "../../assets/Services image/padlock.png";
import Use from "../../assets/Services image/usability.png";
import Consult from "../../assets/Services image/iotconsult.webp";
import Research from "../../assets/Services image/analytics.png";
import Integrate from "../../assets/Services image/system-integration.png";
import Test from "../../assets/Services image/checklist.png";
import Dev from "../../assets/Services image/vector.png";
import Analytics from "../../assets/Services image/iotanalytics.png";

const iot = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10  bg-amber-50">
        <div className="lg:w-1/2 ml-32">
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
            <Link to="/contact-us">
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
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*second part */}
      <div className="flex flex-col md:flex-row justify-center pt-4 pb-7 mx-4 md:mx-[6rem] space-y-4 md:space-y-0 md:space-x-6 mt-10 mb-10">
        <div className="max-w-lg">
          <h1 className="text-center md:text-left font-semibold text-3xl">
            Propelling businesses into the connected future
          </h1>
        </div>
        <div className="max-w-lg">
          <p className="text-center md:text-left">
            We deliver robust and secure IoT solutions to enterprises and
            startups. Through our IoT services, we help organizations solve
            their business challenges and tap into new revenue streams via IoT
            technology.
          </p>
        </div>
      </div>

      {/*part three*/}

      <div className="container mx-auto px-4 sm:px-8 md:px-16 bg-amber-50">
        <div className="flex justify-center items-center space-x-6 ">
          <div className="flex flex-col items-center space-y-2 mt-28 mb-28">
            <div>
              <img src={Delivery} alt="Delivery" />
            </div>
            <div>
              <h3 className="text-amber-500 hover:text-black text-xl font-medium">
                Early value delivery
              </h3>
            </div>
            <div>
              <p className="text-gray-500 max-w-xs">
                We leverage secure, power-optimized IoT prototyping to drive
                tangible business value as early as possible.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div>
              <img src={Scale} alt="Scale" />
            </div>
            <div>
              <h3 className="text-amber-500 hover:text-black text-xl font-medium">
                Robust scalability
              </h3>
            </div>
            <div>
              <p className="text-gray-500 max-w-xs">
                We bank on advanced techniques to effectively process massive
                data flows and enable real-time IoT insights.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div>
              <img src={Lock} alt="Lock" />
            </div>
            <div>
              <h3 className="text-amber-500 hover:text-black text-xl font-medium">
                Industry-grade security
              </h3>
            </div>
            <div>
              <p className="text-gray-500 max-w-xs">
                Our specialists capitalize on industry’s best practices and
                tools to protect your business and services.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div>
              <img src={Use} alt="Use" />
            </div>
            <div>
              <h3 className="text-amber-500 hover:text-black text-xl font-medium">
                Excellent usability
              </h3>
            </div>
            <div>
              <p className="text-gray-500 max-w-xs">
                We engage top-notch developers and UX designers to create
                intuitive, user-friendly IoT applications that bring value to
                all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*iot consulting */}
      <div className="py-10 mb-9">
        <h1 className="font-semibold text-center text-3xl">Services</h1>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-2 mt-10">
          <div className="flex justify-center md:justify-start md:mr-10">
            <img
              src={Consult}
              alt="phone"
              className="w-[500px] h-[380px] rounded-lg"
            />
          </div>
          <div className="max-w-xs md:max-w-2xl">
            <h1 className="text-amber-500 text-center md:text-left font-semibold px-4 md:px-10 pt-8 md:pt-2 md:text-2xl">
              IOT Consulting
            </h1>
            <p className="text-center md:text-left px-4 md:px-10 pt-8 md:pt-4 text-sm md:text-base">
              Whether you have just embarked on your IoT journey or are an
              experienced player, our IoT consultants will help you make the
              best of new opportunities and set them in tune with your business
              strategy.
            </p>
            <p className="text-center md:text-left px-4 md:px-10 pt-8 md:pt-4 text-sm md:text-base">
              We collaborate and coordinate to tweak IoT project management,
              facilitate collaboration between stakeholders, help fill the gap
              in IoT-specific technical knowledge of client’s team, and take on
              any other part of implementation desired from our clients.
            </p>
          </div>
        </div>
      </div>

      {/*iot dev */}
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            <span className="text-amber-500">IOT</span> Development
          </h1>
        </div>
        <div className="text-center font-medium text-base p-5 md:p-5 leading-7">
          <p>
            With almost 20 years in technology, and 5-plus years in IoT, we
            excel in full-cycle IoT development.
            <br /> Our delivery life cycle includes
          </p>
        </div>
        <div className="flex justify-center items-end gap-4 md:gap-8 lg:gap-20 xl:gap-40 md:ml-[4rem] p-10">
          <div className="relative flex flex-col items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <img src={Research} alt="Research Icon" />
            </div>
            <h1 className="text-center w-full mb-2 font-medium text-xl mt-10 text-gray-800">
              Research
            </h1>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <img src={Dev} alt="Development Icon" />
            </div>
            <h1 className="text-center w-full mb-2 font-medium text-xl mt-10 text-gray-800">
              Design and development
            </h1>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <img src={Integrate} alt="Integration Icon" />
            </div>
            <h1 className="text-center w-full mb-2 font-medium text-xl mt-10 text-gray-800">
              Integration
            </h1>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="rounded-full bg-gray-100 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <img src={Test} alt="Testing Icon" />
            </div>
            <h1 className="text-center w-full mb-2 font-medium text-xl mt-10 text-gray-800">
              Testing
            </h1>
          </div>
        </div>
      </div>

      {/*iot analytics*/}
      <div className="flex justify-center items-center bg-amber-50">
        <div className="text-left p-8">
          <h1 className="text-2xl font-bold mb-4 text-amber-500">
            IOT ANALYTICS
          </h1>
          <p className="max-w-xl text-base tracking-normal">
            We provide IoT Analytics solutions including business analysis,
            dashboard design, architecture design and development, and quality
            assurance. We offer IoT Analytics through:
          </p>

          <div className="mt-10">
            <h2 className="mb-[5.5px] text-lg text-amber-500">
              <i
                className="fa-solid fa-circle fa-2xs mr-2"
                style={{ color: "#ffbf00" }}
              ></i>
              Implementation of IOT analytics solutions
            </h2>
            <p className="max-w-xl">
              We develop IoT applications based on an iterative approach and
              launch an MVP or a first application version with a lean set of
              high-priority features within a few months.
            </p>
            <h2 className="mt-10 mb-[5.5px] text-lg text-amber-500">
              <i
                className="fa-solid fa-circle fa-2xs mr-2"
                style={{ color: "#ffbf00" }}
              ></i>
              IOT analytics as a service
            </h2>
            <p className="max-w-xl">
              For businesses who want to benefit from IoT insights but do not
              want in-house IoT implementation, we offer IoT analytics as a
              service. Clients get access to a web interface with regular and
              ad-hoc reports, while we handle the solution’s technical
              implementation.
            </p>
          </div>
        </div>
        <div className="p-8">
          <img
            src={Analytics}
            alt="IoT Analytics"
            className="w-[500px] h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default iot;
