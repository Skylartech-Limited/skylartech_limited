import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import Discover from "../../assets/Services image/discover.png";
import Idea from "../../assets/Services image/idea (1).png";
import Write from "../../assets/Services image/edit-message (1).png";
import Contact from "../../assets/Services image/user.png";
import Checker from "../../assets/Services image/correct (1).png";
import Wallet from "../../assets/Services image/wallet (1).png";

const PMConsulting = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Project Management Consulting
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Project Management{" "}
                <span className="text-amber-500">
                  <Typewriter
                    words={[
                      "Consulting",
                      "Leadership",
                      "Solutions",
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
                We help organizations successfully plan, execute, and manage
                projects through strategic consulting, stakeholder coordination,
                and modern project management practices aligned with industry
                standards.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {[
                  "Project Planning & Execution",
                  "Risk & Stakeholder Management",
                  "PMO Development & Optimization",
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
                    Let’s Talk →
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={Discover}
                alt="Project Management"
                className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src={Discover}
                alt="Consulting"
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Accelerate Business Success Through{" "}
                <span className="text-amber-500">
                  Project Management Consulting
                </span>
              </h2>

              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                Our consulting services help organizations streamline project
                delivery, improve operational efficiency, and reduce project
                risks. We combine strategic planning, leadership expertise, and
                proven methodologies to ensure projects are delivered on time
                and within scope.
              </p>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                From project planning and execution to stakeholder alignment and
                PMO development, we empower teams with the tools, frameworks,
                and insights needed for sustainable growth and successful
                project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Benefits of Our Consulting Services
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              We help organizations improve project efficiency, strengthen
              leadership, and achieve better business outcomes through expert
              consulting and strategic guidance.
            </p>
          </div>

          {/* BENEFIT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: Idea,
                title: "Strategic Project Planning",
                text: "Develop detailed project roadmaps, timelines, and execution strategies aligned with organizational goals.",
              },
              {
                image: Write,
                title: "Risk Management",
                text: "Identify potential risks early and implement proactive mitigation strategies to reduce project disruptions.",
              },
              {
                image: Contact,
                title: "Stakeholder Coordination",
                text: "Improve communication and collaboration among stakeholders to ensure project alignment and success.",
              },
              {
                image: Checker,
                title: "PMO Development",
                text: "Establish and optimize Project Management Offices to standardize processes and improve governance.",
              },
              {
                image: Wallet,
                title: "Resource Optimization",
                text: "Efficiently allocate resources, manage budgets, and maximize productivity across projects.",
              },
              {
                image: Discover,
                title: "Performance Monitoring",
                text: "Track project progress with measurable KPIs and reporting systems for informed decision-making.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
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

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Build Stronger Projects with Expert Consulting
          </h2>

          <p className="text-amber-100 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Empower your organization with strategic project management
            consulting services that improve planning, execution, and overall
            business performance.
          </p>

          <div className="mt-10">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PMConsulting;