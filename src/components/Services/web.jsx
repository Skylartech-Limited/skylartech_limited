import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

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

const Web = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Web & Mobile Application Development
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Digital{" "}
                <span className="text-amber-500">
                  <Typewriter
                    words={[
                      "Experiences",
                      "Solutions",
                      "Applications",
                    ]}
                    loop={0}
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </span>

                <span className="text-amber-500">
                  <Cursor cursorStyle="|" />
                </span>
              </h2>

              <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
                We create modern web and mobile applications that help
                businesses streamline operations, engage customers, and drive
                digital transformation through scalable and user-focused
                solutions.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {[
                  "Custom Web Application Development",
                  "Mobile App Development",
                  "UI/UX Focused Experiences",
                  "Scalable & Secure Solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>

                    <span className="text-gray-700 text-base md:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-10">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                  >
                    Let’s Build Together →
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={MobileApp}
                alt="Web and Mobile Development"
                className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              How We <span className="text-amber-500">Build Solutions</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Our streamlined development process ensures efficient delivery,
              high-quality applications, and exceptional user experiences.
            </p>
          </div>

          {/* PROCESS CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: Requirements,
                title: "Requirements Gathering",
                items: [
                  "Requirements Definition",
                  "Business Analysis",
                  "Planning & Documentation",
                  "Initial Design Strategy",
                ],
              },
              {
                image: Development,
                title: "Development & Testing",
                items: [
                  "Frontend & Backend Development",
                  "Agile SCRUM Collaboration",
                  "Quality Assurance Testing",
                  "Deployment & Optimization",
                ],
              },
              {
                image: Support,
                title: "Support & Maintenance",
                items: [
                  "Continuous Technical Support",
                  "System Monitoring",
                  "Performance Optimization",
                  "Ongoing Maintenance",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-amber-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  className="w-20 h-20 object-contain mb-6"
                  src={card.image}
                  alt={card.title}
                />

                <h2 className="text-3xl font-bold text-amber-500 mb-6">
                  {card.title}
                </h2>

                <ul className="space-y-4">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Development Services
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We deliver modern, scalable, and secure digital solutions tailored
              to your business goals and user needs.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: Fullstack,
                title: "Full Stack Development",
                text: "Modern frontend and backend development using scalable technologies and frameworks.",
              },
              {
                image: Api,
                title: "API Development",
                text: "Secure API integrations and custom backend services for seamless connectivity.",
              },
              {
                image: Migration,
                title: "System Migration",
                text: "Upgrade and migrate legacy systems into modern scalable platforms.",
              },
              {
                image: Prototyping,
                title: "UI/UX & Prototyping",
                text: "Interactive interfaces and user-centered experiences designed for engagement.",
              },
              {
                image: CrossPlatform,
                title: "Cross Platform Apps",
                text: "Develop responsive applications that work seamlessly across multiple devices.",
              },
              {
                image: WebDevelopment,
                title: "Custom Web Solutions",
                text: "Tailored websites and enterprise systems designed to support business growth.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-amber-500 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Delivering Modern{" "}
                <span className="text-amber-500">
                  Digital Experiences
                </span>
              </h1>

              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                We combine strategy, design, and technology to create impactful
                digital products that improve efficiency, customer engagement,
                and business growth.
              </p>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                Our team focuses on scalable architecture, seamless user
                experiences, and agile development methodologies to ensure
                successful project delivery from concept to deployment.
              </p>

              <div className="mt-10">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={MobileApp}
                alt="Mobile Development"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Web;