import React from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  Users,
  Kanban,
  RefreshCw,
  CheckCircle2,
  Target,
  BookOpen,
} from "lucide-react";


const Agile = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <Kanban size={16} />
              Agile & Scrum Training
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
              Build High-Performing{" "}
              <span className="text-amber-500">
                <Typewriter
                  words={["Agile Teams", "Scrum Teams", "Delivery Teams"]}
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

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              We help organizations adopt Agile & Scrum frameworks to improve
              delivery speed, collaboration, and project success rates across teams.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-amber-600 transition"
                >
                  Get Started →
                </motion.button>
              </Link>

              <Link to="/services">
                <button className="border border-amber-500 text-amber-600 px-6 py-3 rounded-xl font-medium hover:bg-amber-50 transition">
                  Explore Training
                </button>
              </Link>
            </div>
          </div>

  
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition">
            <Users className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">Team Training</h3>
            <p className="text-gray-600 mt-2">
              Build strong Agile teams with real-world Scrum practice and collaboration skills.
            </p>
          </div>

          <div className="p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition">
            <RefreshCw className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">Agile Delivery</h3>
            <p className="text-gray-600 mt-2">
              Learn iterative delivery methods that improve speed and quality of execution.
            </p>
          </div>

          <div className="p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition">
            <Target className="text-amber-500" size={36} />
            <h3 className="text-xl font-semibold mt-4">Better Outcomes</h3>
            <p className="text-gray-600 mt-2">
              Align teams and deliver projects faster with measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          
          <h2 className="text-4xl font-bold text-gray-900">
            Agile & Scrum Modules
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Structured training designed to help teams adopt Agile successfully.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">

            {/* Scrum */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <BookOpen className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                Scrum Fundamentals
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Scrum roles & events
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Agile principles
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Sprint planning
                </li>
              </ul>
            </div>

            {/* Agile Delivery */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <RefreshCw className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                Agile Delivery
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Iterative development
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Backlog management
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Continuous improvement
                </li>
              </ul>
            </div>

            {/* Kanban */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <Kanban className="text-amber-500" size={32} />
              <h3 className="text-xl font-semibold mt-4">
                Kanban & Hybrid
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Workflow visualization
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> WIP limits
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} /> Hybrid Agile models
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Agile;