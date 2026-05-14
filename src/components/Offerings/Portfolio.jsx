import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

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

const Consulting = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Corporate Project Management Training
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Corporate Project{" "}
                <span className="text-amber-500">
                  <Typewriter
                    words={[
                      "Management Training",
                      "Leadership Development",
                      "Team Excellence",
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
                Empower your teams with modern project management knowledge,
                leadership capabilities, and organizational strategies designed
                to improve efficiency, collaboration, and project delivery
                success.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {[
                  "Team Training Programs",
                  "Organizational Project Management",
                  "Leadership Development",
                  "Strategic Project Delivery",
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
                    Start Training →
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={Consult}
                alt="Corporate Training"
                className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Developing High-Performing Teams Through{" "}
                <span className="text-amber-500">
                  Corporate PM Training
                </span>
              </h2>

              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                Our corporate training programs are designed to strengthen team
                collaboration, improve project execution, and build leadership
                capabilities across organizations.
              </p>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                We help businesses implement modern project management
                frameworks, align organizational objectives, and create a
                culture of accountability and operational excellence.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={Analytics}
                alt="Training"
                className="rounded-3xl shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Organizations Choose Our Training
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We provide practical and results-driven training programs that
              help organizations improve leadership, productivity, and project
              delivery performance.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: Delivery,
                title: "Improved Team Performance",
                text: "Enhance collaboration, communication, and efficiency across project teams.",
              },
              {
                image: Scale,
                title: "Organizational Alignment",
                text: "Align projects with organizational strategy and long-term business objectives.",
              },
              {
                image: Lock,
                title: "Leadership Excellence",
                text: "Develop strong project leaders capable of driving successful outcomes.",
              },
              {
                image: Use,
                title: "Practical Learning",
                text: "Hands-on training programs focused on real-world project management scenarios.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Training Approach
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We follow a structured and collaborative training process to
              ensure measurable results and long-term organizational growth.
            </p>
          </div>

          {/* PROCESS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                image: Research,
                title: "Assessment",
              },
              {
                image: Dev,
                title: "Program Design",
              },
              {
                image: Integrate,
                title: "Training Delivery",
              },
              {
                image: Test,
                title: "Performance Evaluation",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Transform Your Organization Through Professional Training
          </h2>

          <p className="text-amber-100 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Equip your teams with the skills, leadership mindset, and project
            management expertise needed to drive organizational success.
          </p>

          <div className="mt-10">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;