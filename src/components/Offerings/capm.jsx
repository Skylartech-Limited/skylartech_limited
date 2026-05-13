import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  CheckCircle2,
  Target,
} from "lucide-react";

import Mockup from "../../assets/Services image/mockup (1).png";

const capm = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">

          {/* TEXT */}
          <div className="flex-1 flex flex-col items-center lg:items-start">

            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap size={16} />
              CAPM® Certification Training
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
              Entry-Level{" "}
              <span className="text-amber-500">
                <Typewriter
                  words={["Project Management Training"]}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1200}
                />
              </span>
              <span className="text-amber-500">
                <Cursor cursorStyle="|" />
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg mt-6 max-w-xl">
              Build strong foundations in project management with CAPM® training
              aligned to PMBOK® principles and global best practices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-amber-600 transition w-full sm:w-auto"
                >
                  Enroll Now →
                </motion.button>
              </Link>

              <Link to="/services">
                <button className="border border-amber-500 text-amber-600 px-6 py-3 rounded-xl font-medium hover:bg-amber-50 transition w-full sm:w-auto">
                  View Curriculum
                </button>
              </Link>
            </div>

          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={Mockup}
              alt="CAPM Training"
              className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-lg transition flex flex-col items-center">
            <BookOpen className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">Entry-Level Training</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Perfect for beginners entering project management.
            </p>
          </div>

          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-lg transition flex flex-col items-center">
            <ClipboardList className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">PMBOK® Foundation</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Learn core project management frameworks and principles.
            </p>
          </div>

          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-lg transition flex flex-col items-center">
            <Target className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">Exam Readiness</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Structured preparation for CAPM® certification success.
            </p>
          </div>

        </div>
      </section>

      {/* MODULES */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            CAPM® Training Modules
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A structured program designed to prepare you for CAPM® certification.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">

            {/* Module 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <BookOpen className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                Project Fundamentals
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Project lifecycle</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Roles & responsibilities</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Constraints</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <ClipboardList className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                PMBOK® Framework
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Process groups</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Knowledge areas</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Integration management</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <GraduationCap className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                Exam Preparation
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Mock exams</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Practice questions</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16}/> Exam strategies</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default capm;