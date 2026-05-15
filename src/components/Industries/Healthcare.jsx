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

  {/* ================= HEALTHCARE INSIGHTS (MERGED SECTION) ================= */}
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#061a17] to-[#0b1220]">

  {/* ================= HEADER ================= */}
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Healthcare Project Management & Delivery Excellence
    </h2>

    <p className="text-white/60 mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
      Healthcare projects require precision, compliance, and coordination across clinical and administrative systems to ensure patient safety and operational efficiency.
    </p>
  </div>

  {/* ================= KEY FOCUS AREAS ================= */}
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
        className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-emerald-400/20"
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

  {/* ================= PROJECT TYPES ================= */}
  <div className="mt-20 max-w-6xl mx-auto text-center">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Common Healthcare Project Types
    </h3>
  </div>

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
        className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07] hover:border-emerald-400/20"
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

  {/* ================= SKILLS ================= */}
  <div className="mt-20 max-w-6xl mx-auto text-center">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Essential Skills & Best Practices
    </h3>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
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
        className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-emerald-400/20 transition-all duration-300"
      >
        <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed">
          ✔ {item}
        </p>
      </div>
    ))}
  </div>

</section>

      {/* ================= PREMIUM HEALTHCARE CTA ================= */}
<section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#05060A] overflow-hidden text-center">

  {/* Glow background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[600px] h-[600px] bg-emerald-400/10 blur-[120px] rounded-full" />
  </div>

  {/* Glass card */}
  <motion.div
    className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.01 }}
  >
    {/* Border glow */}
    <div className="absolute inset-0 rounded-3xl border border-emerald-400/10 animate-pulse pointer-events-none" />

    {/* Content */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Transform Healthcare Delivery with Structured Project Management
    </h2>

    <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
      Improve patient outcomes, safety, and operational efficiency through structured healthcare project systems designed for modern clinical environments.
    </p>

    {/* CTA Button (FIXED like Government pattern) */}
    <Link to="/contact-us" className="inline-block mt-10">
      <button className="px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg hover:scale-105 transition duration-300">
        Get Healthcare Support →
      </button>
    </Link>

    {/* Trust line */}
    <p className="text-white/40 text-xs mt-6">
      Trusted for hospital systems modernization, digital health & clinical transformation
    </p>
  </motion.div>
</section>
    </div>
  );
};

export default Healthcare;