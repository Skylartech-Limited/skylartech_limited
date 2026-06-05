import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lock,
  Check,
  AlertTriangle,
  TrendingUp,
  Clock,
  Layers,
} from "lucide-react";

import Cash from "../../assets/Industries/Cash.jpg";

const Banking = () => {
  return (
    <div className="w-full text-white bg-[#05060A] overflow-hidden sm:pt-24">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Cash})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04050A]/90 via-[#07131F]/70 to-[#081A2A]/55" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-0">
          <div
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
            <h2 className="flex items-center gap-2 text-cyan-300 font-semibold text-sm sm:text-base">
              <Lock className="w-5 h-5" />
              Banking & Financial Project Management
            </h2>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight">
              Structured Delivery for Modern Financial Systems
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              We help banks execute complex transformation programs using
              structured project management frameworks that improve compliance,
              efficiency, and delivery success across financial systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/book-training" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                  Start a Project
                </button>
              </Link>

              <a href="#importance" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300">
                  Explore Framework
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BANKING INSIGHTS (MERGED SECTION) ================= */}
      <section
        id="importance"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#070A14]"
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Banking Transformation Through Structured Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Banking institutions operate in highly regulated, fast-changing
            environments where structured execution determines success across
            transformation, compliance, and operational efficiency.
          </p>
        </div>

        {/* ================= IMPORTANCE CARDS ================= */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Regulatory Compliance at Scale",
              text: "Ensures adherence to global financial regulations and audit standards.",
            },
            {
              icon: TrendingUp,
              title: "Digital Transformation",
              text: "Supports modernization of banking systems including AI and cloud banking.",
            },
            {
              icon: Clock,
              title: "Faster Time-to-Market",
              text: "Improves speed of financial product and system delivery.",
            },
            {
              icon: Layers,
              title: "Cross-Functional Alignment",
              text: "Aligns IT, compliance, operations, and executive stakeholders.",
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
          hover:border-cyan-400/20
          transition-all
          duration-300
        "
            >
              <item.icon className="text-cyan-300 w-6 h-6 mb-3" />

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
            Structured Banking Project Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Structured delivery ensures banking transformation programs are
            executed with clarity, control, and reduced operational risk.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {[
            "Core Banking System Upgrades",
            "Risk & Vendor Coordination",
            "Hybrid Agile Execution Models",
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
          hover:border-cyan-400/30
          transition-all
          duration-300
        "
            >
              <Layers className="w-6 h-6 text-cyan-300 mx-auto mb-3" />

              <p className="font-medium text-sm sm:text-base">{t}</p>
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
            "Improved Budget Control",
            "Reduced Project Failure Rates",
            "Stronger Governance Frameworks",
            "Faster Delivery Cycles",
            "Enhanced Risk Control",
            "Better Stakeholder Alignment",
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
          hover:border-cyan-400/30
          transition-all
          duration-300
        "
            >
              <Check className="w-5 h-5 text-cyan-300 mx-auto mb-2" />

              <p className="text-sm text-white/80">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#05060A] overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Glass Card */}
        <motion.div
          className="relative max-w-4xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 animate-pulse" />

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Accelerate Banking Transformation with Precision Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            Partner with structured project delivery experts to strengthen
            governance, reduce execution risk, and deliver complex banking
            systems with confidence.
          </p>

          {/* CTA Button */}
          <Link to="/book-training">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(34,211,238,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg"
            >
              Talk to a Banking Consultant →
            </motion.button>
          </Link>

          {/* Sub text */}
          <p className="text-white/40 text-xs mt-6">
            Trusted by transformation teams in regulated financial environments
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Banking;
