import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Network, ShieldCheck, Activity, BarChart3, Zap } from "lucide-react";

import Telecom from "../../assets/Industries/telecommunication.jpg";

const Telecommunications = () => {
  return (
    <div className="w-full text-white bg-[#05060D] overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Telecom})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060D]/85 via-[#0B1020]/65 to-[#120A2A]/55" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
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
              p-6 sm:p-8 md:p-12 lg:p-14
              shadow-2xl
            "
          >
            <h2 className="flex items-center gap-2 text-amber-300 font-semibold text-sm sm:text-base">
              <Network className="w-5 h-5" />
              Telecommunications Project Management
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Delivering Telecom Infrastructure with Speed & Precision
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
              Telecom project management enables large-scale network rollouts,
              5G deployment, infrastructure upgrades, and digital transformation
              initiatives in fast-paced, high-pressure environments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/book-training">
                <button className="bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto">
                  Start a Project
                </button>
              </Link>

              <a href="#overview">
                <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition w-full sm:w-auto">
                  Explore Framework
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TELECOM INSIGHTS (MERGED SECTION) ================= */}
      <section
        id="overview"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070A14]"
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Telecom Project Delivery for High-Performance Networks
          </h2>

          <p className="text-white/60 mt-6 text-sm sm:text-base leading-relaxed">
            Telecom projects require precise coordination across infrastructure,
            vendors, engineering teams, and digital systems to deliver scalable,
            reliable connectivity in fast-moving environments.
          </p>
        </div>

        {/* ================= WHY IT MATTERS ================= */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "System Integration Complexity",
              desc: "Ensures seamless coordination between network systems, vendors, and platforms.",
            },
            {
              icon: Zap,
              title: "Rapid Infrastructure Deployment",
              desc: "Supports fast rollout of 4G/5G networks and telecom upgrades.",
            },
            {
              icon: Activity,
              title: "Operational Risk Control",
              desc: "Minimizes downtime during upgrades, migrations, and system changes.",
            },
            {
              icon: BarChart3,
              title: "Cost & Performance Efficiency",
              desc: "Improves delivery speed, cost control, and operational performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <item.icon className="text-amber-300 w-6 h-6 mb-3" />

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-white/60 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= DELIVERY ================= */}
        <div className="max-w-5xl mx-auto text-center mt-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Structured Telecom Project Delivery
          </h2>

          <p className="text-white/60 mt-6 text-sm sm:text-base leading-relaxed">
            Structured delivery ensures telecom projects are executed with
            clarity, reduced risk, and predictable outcomes across complex
            infrastructure environments.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Network Rollout Planning",
              desc: "Structured planning of telecom infrastructure including towers, fiber, and core networks.",
            },
            {
              title: "Vendor Coordination",
              desc: "Aligns multiple suppliers and partners to ensure timely and quality delivery.",
            },
            {
              title: "Hybrid Delivery Models",
              desc: "Combines Agile and traditional methods for faster and controlled execution.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-amber-300 font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="max-w-5xl mx-auto text-center mt-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Key Benefits for Telecom Organizations
          </h2>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Faster network deployment",
            "Reduced operational risk",
            "Improved budget control",
            "Better vendor alignment",
            "Higher delivery success rate",
            "Stronger governance models",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"
            >
              <p className="text-white/80 font-medium">✔ {item}</p>
            </div>
          ))}
        </div>
      </section>

 {/* ================= PREMIUM CTA ================= */}
<section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#05060D] overflow-hidden">
  {/* Background Glow (SAFE LAYER) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full" />
  </div>

  {/* Glass Card (SAFE STACKING CONTEXT) */}
  <motion.div
    className="relative z-10 max-w-4xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.01 }}
  >
    {/* Animated border glow */}
    <div className="absolute inset-0 rounded-3xl border border-amber-400/10 animate-pulse pointer-events-none" />

    {/* Content */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Accelerate Telecom Transformation with Precision Delivery
    </h2>

    <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
      Partner with structured project management experts to reduce
      operational risk, improve rollout efficiency, and deliver telecom
      infrastructure at scale with confidence.
    </p>

    {/* CTA Button (BANKING-STYLE RELIABLE LINKING) */}
    <Link to="/book-training">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(251,191,36,0.35)",
        }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg"
      >
        Talk to a Telecom Consultant →
      </motion.button>
    </Link>

    {/* Trust line */}
    <p className="text-white/40 text-xs mt-6">
      Trusted for large-scale telecom infrastructure & network transformation programs
    </p>
  </motion.div>
</section>
    </div>
  );
};

export default Telecommunications;
