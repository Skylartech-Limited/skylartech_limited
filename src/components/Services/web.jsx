import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom"
import MobileApp from "../../assets/Services image/MobileApp.png";
import Requirements from "../../assets/Services image/Requirementsgathering.png";
import Development from "../../assets/Services image/Development.png";
import Support from "../../assets/Services image/Support.png";
import Fullstack from "../../assets/Services image/layers.png";
import Api from "../../assets/Services image/api.png";
import WebDevelopment from "../../assets/Services image/web-development.png";
import CrossPlatform from "../../assets/Services image/seo.png";
import Prototyping from "../../assets/Services image/triangle.png";
import Migration from "../../assets/Services image/migration.png";
const web = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            Web &{" "}
            <span className="text-amber-500">
              <Typewriter
                words={["Mobile App Development"]}
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
            We do not build web & apps We build experiences
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            We believe in building interactive web, Mobile applications, To
            create experiences beyond our clients’ expectations.
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

      {/*web how we do it */}
      <div div className="flex flex-col justify-center items-center">
        <h1 className="pt-12 text-4xl text-black text-center font-semibold">
          How We <span className="text-amber-500">Do It</span>
        </h1>
        <h3 className="text-lg text-gray-900 mx-auto max-w-2xl font-semibold py-6">
          Fast-track your projects delivery using our simple three-step
          application development process.
        </h3>
        <div className="lg:flex lg:flex-row lg:justify-between flex-col gap-10 px-10">
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <img
              className="w-32 h-16 mb-2"
              src={Requirements}
              alt="Requirements"
            />
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Requirements Gathering
            </h1>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Requirements Definition</li>
              <li>Analyzing the Requirements</li>
              <li>Documenting Process</li>
              <li>Provide Initial Design</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <img
              className="w-32 h-16 mb-2"
              src={Development}
              alt="Development"
            />
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Development & Testing
            </h1>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>Frontend & backend development</li>
              <li>Weekly Client Feedback (SCRUM)</li>
              <li>QA Testing</li>
              <li>Deployment</li>
            </ul>
          </div>
          <div className="text-gray-800 shadow-xs p-10 rounded-xl">
            <img className="w-32 h-16 mb-2" src={Support} alt="Support" />
            <h1 className="text-left font-semibold text-amber-500 text-3xl pb-4">
              Support & Maintenance
            </h1>
            <ul className="px-5 list-disc leading-8 text-left marker:text-amber-500 marker:text-2xl">
              <li>SLA Based Support</li>
              <li>L3 and Production Support Services</li>
              <li>Operational support where needed</li>
              <li>On-going Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/*hiring web designers */}
      <div className="bg-amber-50 mt-12">
        <div>
          <h1 className="text-4xl font-semibold text-center pt-14">
            Hire <span className="text-amber-500">Web Design</span> and
            Development Experts
          </h1>
          <h1 className="pt-5 text-xl ">
            Skylartech provides a host of web designing and development services for
            global clients.
          </h1>
        </div>

        <div className=" sm:text-center lg:flex lg:flex-wrap px-10 justify-center">
          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={Fullstack} alt="sd" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                Full Stack Development
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                We have a team of skilled full-stack developers with expertise
                in MEAN and MERN stack. You can hire frontend and backend
                development teams separately as well. Get full-stack development
                on MEAN, MERN, PHP + Vue.js, .Net + JS, to name a few.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={Api} alt="api" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                API Development
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                Our web development team is highly experienced in APIs, custom
                data connectors, web services, and middleware for secure
                integration with third-party solutions. You can outsource API
                development projects to develop fully functional APIs.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={Migration} alt="migration" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                Upgradation and Migration
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                Our team of web developers and designers has expertise in
                developing solutions using the newest technologies. Either you
                want to upgrade outdated web technology or want to migrate to a
                new CMS, we have skilled web developers and designers to make
                the transition smooth.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={Prototyping} alt="prototype" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                Prototyping & UI/UX Designing
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                Our skillful engineers create interactive prototyping and
                usability testing to ensure a project with a pleasant user
                experience. Hire professional UI/UX designers to create
                meaningful interfaces that enable users to feel comfortable
                while using your platform.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={CrossPlatform} alt="cp" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                Cross Platform
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                Cross-Platform Tools, which include JavaScript frameworks, App
                factories, Web-to-native wrappers, Runtimes, and Source code
                translators, are used to create Native, Hybrid, and Web Apps.
                One of the popular methods for creating cross-platform
                applications is the hybrid mobile application.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 service-section">
            <div className="text-left shadow-xs p-10 rounded-xl">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "39px",
                  height: "39px",
                }}
              >
                <img src={WebDevelopment} alt="Web Dev" />
              </div>
              <h3 className="text-2xl font-semibold max-w-xs text-amber-500 transition hover:text-gray-800">
                Custom Website Development{" "}
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-500">
                We ideate and plan to design and develop custom web solutions to
                connect our clients with their customers efficiently. Let’s
                develop feature-rich, highly functional, robust, secure, and
                scalable custom web solutions along with engaging UI/UX design
                that enhances your brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*development process for mobile apps*/}
      <div className="mb-20 mt-20 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-semibold text-center">
    Our <span className="text-amber-500">Mobile Application</span> Development Process
  </h1>
  <div className="flex items-center mt-6">
    <p className="text-lg max-w-2xl text-left">
      Working with <span className="text-amber-500">Skylartech</span>, We
      ensure successful results each time. Our streamlined and thorough
      processes keep us competitive. Skylartech strives to optimize the mobile
      app development process to make sure your time and investment are
      utilized most efficiently. By simplifying our strategies, we make
      outsourcing mobile application development the best experience for
      you and your customers.
    </p>
    <div className="ml-36"> {/* Add a container div for the image */}
      <img
        src={MobileApp}
        alt="phone"
        className=" mt-10 w-[384px] h-[370px] "
      />
    </div>
  </div>
</div>

    </>
  );
};

export default web;
