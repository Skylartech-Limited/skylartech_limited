import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Professionaltraining = () => {
  const services = [
    {
      icon: <BookOpen size={34} />,
      title: "PMP Exam Preparation",
      description:
        "Comprehensive PMP® exam preparation programs designed to help professionals confidently pass the certification exam and advance their careers.",
    },
    {
      icon: <Award size={34} />,
      title: "PMI-Aligned Curriculum",
      description:
        "Our training follows PMI® standards and PMBOK® guidelines to ensure globally recognized project management knowledge and best practices.",
    },
    {
      icon: <Users size={34} />,
      title: "Mock Exams & Mentorship",
      description:
        "Practice with realistic mock exams and receive mentorship from experienced project management professionals throughout your learning journey.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={18} />
                PMP® Professional Training
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master{" "}
                <span className="text-amber-500">
                  <Typewriter
                    words={[
                      "PMP® Certification",
                      "Project Leadership",
                      "PMI® Standards",
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

              <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Advance your career with industry-recognized PMP® certification
                training designed to equip professionals with practical project
                management skills, exam readiness, and leadership excellence.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {[
                  "PMI® Aligned Training Programs",
                  "Real-World Project Management Scenarios",
                  "Expert Mentorship & Guidance",
                  "Comprehensive Mock Examinations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-amber-500" size={22} />
                    <span className="text-gray-700 text-base md:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-lg transition-all duration-300"
                  >
                    Start Your Journey
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-7 py-4 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Explore Programs
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative">
              <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-gray-100">
                <div className="grid gap-6">
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      98% Success Rate
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Helping professionals achieve PMP® certification success.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <h4 className="text-3xl font-bold text-amber-500">
                        500+
                      </h4>
                      <p className="text-gray-600 mt-1">Professionals Trained</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <h4 className="text-3xl font-bold text-amber-500">
                        PMI®
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Aligned Curriculum
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                    <h3 className="text-2xl font-bold">
                      Become a Certified Project Leader
                    </h3>
                    <p className="mt-3 text-amber-100">
                      Build leadership, strategic planning, and project delivery
                      skills that organizations value globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* BACKGROUND BLUR */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              PMP® Certification Training Services
            </h2>

            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              We provide world-class project management training programs
              designed to help professionals gain globally recognized PMP®
              certification and practical leadership skills.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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
            Kickstart Your PMP® Certification Journey Today
          </h2>

          <p className="text-amber-100 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Gain the confidence, knowledge, and practical skills required to
            excel in project management and become a globally recognized PMP®
            certified professional.
          </p>

          <div className="mt-10">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Professionaltraining;