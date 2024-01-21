import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import SoftwareDevelopment from "../../assets/Homepage images/computer 1.png";
import DiscoveryWorkshop from "../../assets/Homepage images/search 1.png";
import UserExperience from "../../assets/Homepage images/testing 1.png";
import Iot from "../../assets/Homepage images/Group 4.png";
import Support from "../../assets/Homepage images/support (1) 1.png";
import Web from "../../assets/Homepage images/Group 2.png";

const Services = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-left p-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10 ">
            <Typewriter
              words={["Services"]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <span className="text-gray-800">
              <Cursor cursorStyle="~" />
            </span>
          </h2>
          <h1 className="max-w-xl text-4xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Your Businesses Needs Our Software Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-xl py-5 text-gray-600">
            We provide you with end-to-end software development and consultancy
            services resulting in extraordinary digital experiences.
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

      {/*what we do */}
      <div>
        <h1 className="text-4xl font-bold text-black text-center mt-12">
          What We Do
        </h1>
        <h1 className="pt-5 font-semibold text-2xl text-center">
          Solve Your Toughest Challenges
        </h1>
      </div>

      <div className="pt-5 pb-10 sm:text-center lg:flex lg:flex-wrap px-10 justify-center gap-10">
        <Link to="/services/custom-software-development">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "130px",
                  background: "F5F5F5",
                }}
              >
                <img src={SoftwareDevelopment} alt="sd" />
              </div>
              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                Custom Software Development
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "24rem" }}
              >
                Custom software development is the process of designing,
                creating, deploying and maintaining software for a specific set
                of users, functions or organizations. We do off-the-shelf
                software development to provide optimal solution to our valued
                customers.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/services/discovery-workshop">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "130px",
                  background: "F5F5F5",
                }}
              >
                <img src={DiscoveryWorkshop} alt="dw" />
              </div>

              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                Requirements Gathering Session
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "20rem" }}
              >
                Our Requirements Gathering Session is a unique session for
                clarifying and defining customers needs, documenting,
                prototyping & breaking down the requirements before the
                development. This has allow us to eliminate any hurdles during
                development.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/services/ui-ux-design">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "110px",
                  background: "F5F5F5",
                }}
              >
                <img
                  src={UserExperience}
                  style={{ marginLeft: "9px" }}
                  alt="ue"
                />
              </div>

              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                UX/UI Design
              </h3>
              <p
                className="py-5 leading-6 text-gray-800"
                style={{ maxWidth: "18rem" }}
              >
                We have a team of design engineers that follows the world class
                user experience standards and ensure the softwares meet the
                right UI to match the industry and the optimal user flows to
                ensure ease of use.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/services/iot-development">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "120px",
                  background: "F5F5F5",
                }}
              >
                <img src={Iot} alt="iot" />
              </div>

              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                Internet of Things (IoT)
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                Internet of things - under this service area we have developed
                high end device configurations and embedded code to work with
                custom developed mobile and web applications.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/services/support-and-maintenance">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "130px",
                  background: "F5F5F5",
                }}
              >
                <img src={Support} alt="sup" />
              </div>

              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                Support and Maintenance
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                We never leave you once the development of the software is done.
                We provide support plans and teams who work around the shift to
                provide support and maintenance needs for the built platform,
                includes cloud services as well.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/services/web-and-app-development">
          <div className="card bg-gray-100 shadow-inner rounded-lg h-[440px] w-[23rem] transition hover:bg-amber-50">
            <div className="text-center p-10">
              <div
                style={{
                  width: "62px",
                  height: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "130px",
                  background: "F5F5F5",
                }}
              >
                <img src={Web} alt="web" />
              </div>

              <h3 className="text-2xl font-bold max-w-xs text-gray-800">
                Web & Mobile App Development
              </h3>
              <p className="max-w-sm py-5 leading-6 text-gray-800">
                We are expert web and mobile app development and our book of
                portfolio brags great about our work we have done leveraging
                major technologies and modern process.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Services;
