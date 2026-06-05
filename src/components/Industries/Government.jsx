import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Users,
  Landmark,
  ClipboardCheck,
  AlertTriangle,
  Check,
} from "lucide-react";

import Govt from "../../assets/Industries/Government.jpg";

const Government = () => {
  return (
    <div className="w-full text-white bg-[#05060A] overflow-hidden sm:pt-24">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Govt})` }}
        />

        {/* PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A]/80 via-[#07101F]/60 to-[#0B1630]/50" />

        {/* SUBTLE GLOW */}
        <div className="absolute inset-0 bg-blue-500/5" />

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
            <h2 className="flex items-center gap-2 text-blue-300 font-semibold text-sm sm:text-base">
              <Landmark className="w-5 h-5" />
              Government Project Management
            </h2>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight">
              Delivering Public Sector Projects with Accountability & Precision
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              Government project management involves planning, executing, and
              monitoring public sector initiatives such as infrastructure, IT
              systems, and policy reforms within strict frameworks of
              accountability, regulatory compliance, and budget control.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/book-training" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                  Discuss a Project
                </button>
              </Link>

              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300">
                  Explore Framework
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GOVERNMENT INSIGHTS (MERGED SECTION) ================= */}
      <section
        id="overview"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#060913]"
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Government Transformation Through Structured Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Public sector projects operate under strict governance frameworks
            where structured execution drives transparency, accountability, and
            national value delivery.
          </p>
        </div>

        {/* ================= GOVERNANCE CARDS ================= */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Compliance & Accountability",
              text: "Ensures adherence to procurement laws, financial regulations, and audit standards.",
            },
            {
              icon: ClipboardCheck,
              title: "Monitoring & Evaluation (M&E)",
              text: "Tracks progress through structured reporting cycles and performance measurement.",
            },
            {
              icon: Users,
              title: "Stakeholder Engagement",
              text: "Manages citizens, government bodies, contractors, and institutions effectively.",
            },
            {
              icon: AlertTriangle,
              title: "Risk & Governance Challenges",
              text: "Handles bureaucratic delays, political changes, and resource constraints.",
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
          hover:border-blue-400/20
          transition-all
          duration-300
        "
            >
              <item.icon className="text-blue-300 w-6 h-6 mb-3" />

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-white/60 mt-2 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ================= DELIVERY ================= */}
        <div className="max-w-5xl mx-auto text-center mt-20 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Structured Government Project Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Structured delivery ensures public sector programs are executed with
            clarity, control, and improved governance outcomes across complex
            environments.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {[
            "National Infrastructure Delivery",
            "Public Sector Program Management",
            "Hybrid Governance Models",
          ].map((t, i) => (
            <div
              key={i}
              className="
          bg-white/5
          border border-white/10
          p-5 sm:p-6
          rounded-2xl
          backdrop-blur-xl
          text-center
          hover:border-blue-400/30
          transition-all
          duration-300
        "
            >
              <ClipboardCheck className="w-6 h-6 text-blue-300 mx-auto mb-3" />

              <p className="font-medium text-sm sm:text-base text-white/80">
                {t}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="max-w-5xl mx-auto text-center mt-20 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Key Benefits of Structured Delivery
          </h2>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {[
            "Improved Public Accountability",
            "Reduced Project Delays",
            "Stronger Governance Frameworks",
            "Higher Delivery Success Rate",
            "Better Stakeholder Coordination",
            "Enhanced Transparency",
          ].map((b, i) => (
            <div
              key={i}
              className="
          bg-white/5
          border border-white/10
          p-5 sm:p-6
          rounded-2xl
          text-center
          backdrop-blur-xl
          hover:border-blue-400/30
          transition-all
          duration-300
        "
            >
              <Check className="w-5 h-5 text-blue-300 mx-auto mb-2" />

              <p className="text-sm text-white/80">{b}</p>
            </div>
          ))}
        </div>
      </section>
 {/* ================= PREMIUM CTA ================= */}
<section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#05060A] overflow-hidden text-center">
  {/* Glow background (SAFE: does not block clicks) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
  </div>

  {/* Glass card (SAFE STACKING) */}
  <motion.div
    className="
      relative z-10
      max-w-4xl
      mx-auto
      bg-white/5
      border border-white/10
      backdrop-blur-2xl
      rounded-3xl
      p-10 sm:p-14
      shadow-2xl
      overflow-hidden
    "
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.01 }}
  >
    {/* Animated border glow (SAFE) */}
    <div className="absolute inset-0 rounded-3xl border border-blue-400/10 animate-pulse pointer-events-none" />

    {/* Content */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Strengthen Public Sector Delivery with Structured Governance
    </h2>

    <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
      Partner with government project management experts to improve transparency,
      accountability, compliance, and execution efficiency across public sector
      transformation initiatives.
    </p>

    {/* CTA Button (BANKING-STYLE SAFE LINK) */}
    <Link to="/book-training">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(96,165,250,0.35)",
        }}
        whileTap={{ scale: 0.97 }}
        className="
          mt-10
          inline-flex
          items-center
          justify-center
          px-8 py-3
          rounded-xl
          font-semibold
          text-black
          bg-gradient-to-r
          from-blue-400
          to-blue-500
          shadow-lg
        "
      >
        Get Expert Government Support →
      </motion.button>
    </Link>

    {/* Trust line */}
    <p className="text-white/40 text-xs mt-6">
      Trusted for public sector modernization, governance transformation & national infrastructure delivery
    </p>
  </motion.div>
</section>
    </div>
  );
};

export default Government;
