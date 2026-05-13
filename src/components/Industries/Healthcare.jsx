import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HeartPulse,
  ShieldPlus,
  Activity,
  Users,
  FileText,
  Database,
  Stethoscope,
  AlertTriangle,
} from "lucide-react";

import Health from "../../assets/Industries/Healthcare.jpg";

const Healthcare = () => {
  return (
    <div className="w-full text-white bg-[#05060A] overflow-hidden sm:pt-24">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Health})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A]/85 via-[#0a2a25]/70 to-[#0b1220]/60" />

        {/* SUBTLE GLOW */}
        <div className="absolute inset-0 bg-emerald-500/8" />

        {/* CONTENT WRAPPER */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              max-w-3xl
              text-left
              bg-black/30
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-5 sm:p-7 md:p-10 lg:p-14
              shadow-2xl
            "
          >
            <h2 className="flex items-center gap-2 text-emerald-300 font-semibold text-sm sm:text-base">
              <HeartPulse className="w-5 h-5" />
              Healthcare Project Management
            </h2>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight">
              Improving Patient Care Through Structured Project Delivery
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              Project management in healthcare applies structured clinical and
              administrative processes to improve patient care, safety, and
              operational efficiency within highly regulated environments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-emerald-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                  Discuss a Healthcare Project
                </button>
              </Link>

              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300">
                  Explore Details
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section
        id="overview"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#061a17] to-[#0b1220]"
      >
        {/* TOP HEADING */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Key Focus Areas in Healthcare Project Management
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            Healthcare projects require precision, compliance, and coordination
            across clinical and administrative systems to ensure patient safety.
          </p>
        </div>

        {/* FOCUS CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: ShieldPlus,
              title: "High-Stakes Clinical Environment",
              desc: "Project outcomes directly impact patient safety and care quality.",
            },
            {
              icon: Users,
              title: "Multidisciplinary Stakeholder Alignment",
              desc: "Coordination across clinicians, IT, and administration teams.",
            },
            {
              icon: FileText,
              title: "Regulatory Compliance",
              desc: "Strict adherence to healthcare laws, ethics, and data security.",
            },
            {
              icon: AlertTriangle,
              title: "Risk & Safety Management",
              desc: "Proactive risk identification to protect patient outcomes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/[0.07]
                hover:border-emerald-400/20
              "
            >
              <item.icon className="text-emerald-300 w-6 h-6 mb-4" />

              <h3 className="font-semibold text-lg sm:text-xl leading-snug">
                {item.title}
              </h3>

              <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SECOND HEADING */}
        <div className="max-w-6xl mx-auto text-center mt-20 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Common Healthcare Project Types
          </h2>
        </div>

        {/* PROJECT TYPE CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Database,
              title: "EHR / EPR Systems",
              desc: "Implementation of electronic health record systems.",
            },
            {
              icon: Activity,
              title: "Workflow Optimization",
              desc: "Improving hospital efficiency and patient flow.",
            },
            {
              icon: Stethoscope,
              title: "Clinical Expansion",
              desc: "Launching new medical services and departments.",
            },
            {
              icon: FileText,
              title: "Infrastructure Projects",
              desc: "Hospital construction and facility upgrades.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/[0.07]
                hover:border-emerald-400/20
                h-full
              "
            >
              <item.icon className="text-emerald-300 w-6 h-6 mb-4" />

              <h3 className="font-semibold text-lg sm:text-xl leading-snug">
                {item.title}
              </h3>

              <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#05060A] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Essential Skills & Best Practices
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto text-left">
          {[
            "Patient Safety & Risk Management",
            "Clinical Communication",
            "Data-Driven Healthcare Decisions",
            "Regulatory Compliance",
            "Change Management",
            "Resource Optimization",
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-5 sm:p-6
                bg-white/5
                border border-white/10
                rounded-2xl
                backdrop-blur-xl
                hover:border-emerald-400/20
                transition-all
                duration-300
              "
            >
              <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed">
                ✔ {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#05060A] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Transform Healthcare Delivery with Structured Project Management
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
            Improve patient outcomes, safety, and efficiency through structured
            healthcare project systems.
          </p>

          <Link to="/contact-us">
            <button className="mt-8 bg-emerald-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 w-full sm:w-auto">
              Get Started →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;