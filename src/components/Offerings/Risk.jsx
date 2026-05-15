import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import { Shield, CheckCircle2, Building2 } from "lucide-react";

import RiskImg from "../../assets/Services image/Risk.jpg";

const Risk = () => {
  const features = [
    "Enterprise Risk Management Frameworks",
    "Regulatory Compliance & Audit Readiness",
    "Internal Controls & Governance Design",
    "Operational Risk Assessment & Mitigation",
    "Policy Development & Assurance Systems",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Visibility",
      text: "Identify, assess, and monitor risks across all business units.",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      text: "Reduce exposure through structured controls and response plans.",
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      text: "Ensure alignment with regulatory and industry standards.",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#050A14] via-[#0B1220] to-[#020617]">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
        style={{
          backgroundImage: `url(${RiskImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* darker overlay like Agile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center lg:justify-start">
            {/* HERO CARD */}
                     <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="
                            w-full max-w-4xl
                            bg-white/5 backdrop-blur-2xl
                            border border-white/10
                            text-white
                            p-5 sm:p-8 md:p-10 lg:p-12
                            rounded-3xl
                            shadow-[0_25px_80px_rgba(0,0,0,0.8)]
                            flex flex-col justify-center
                          "
                        >
              {/* TAG */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs sm:text-sm">
                  <Shield size={16} />
                  Risk, Compliance & Assurance Excellence
                </div>
              </div>

              {/* TITLE */}
<h1 className="text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">

  {/* LINE 1 */}
  <span className="block">
    Strengthen Governance with
  </span>

  {/* LINE 2 (TYPEWRITER BLOCK) */}
  <span className="mt-2 flex items-center justify-center lg:justify-start text-cyan-300 whitespace-nowrap">
    
    <Typewriter
      words={[
        "Risk Intelligence",
        "Compliance Assurance",
        "Control Frameworks",
        "Audit Readiness",
      ]}
      loop={0}
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1500}
    />

    {/* Cursor stays aligned */}
    <span className="ml-1 flex items-center">
      <Cursor cursorStyle="|" />
    </span>

  </span>

</h1>

              {/* FEATURES */}
              <div className="mt-6 sm:mt-8 grid gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={18}
                      className="text-cyan-300 shrink-0 mt-0.5"
                    />
                    <span className="text-gray-200 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us" className="w-full sm:w-auto">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold">
                    Book Consultation
                  </button>
                </Link>

                <Link to="/services" className="w-full sm:w-auto">
                  <button className="w-full bg-white/10 hover:bg-white/15 border border-white/10 px-6 py-3 rounded-2xl font-semibold">
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* ================= CONSOLIDATED RISK SECTION ================= */}
<section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#050A14] via-[#0B1220] to-[#020617]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* ================= INTRO ================= */}
    <div className="text-center mb-14 sm:mb-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Enterprise Risk, Compliance & Assurance
      </h2>

      <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
        We help organizations build resilient risk management systems,
        strengthen compliance structures, and ensure continuous audit readiness
        across all operational layers. Our approach integrates governance,
        control frameworks, and assurance mechanisms into a unified operating model.
      </p>
    </div>

    {/* ================= OVERVIEW ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">

      {/* LEFT */}
      <div className="text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Enterprise Risk & Compliance Transformation
        </h3>

        <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
          We enable organizations to proactively manage risk exposure and
          compliance through structured governance and continuous assurance systems.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="
        p-6 sm:p-8
        rounded-2xl sm:rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        shadow-lg
      ">
        <Building2 className="text-cyan-300 mb-4" size={28} />

        <h3 className="text-lg sm:text-xl font-bold mb-3">
          Integrated Governance Model
        </h3>

        <p className="text-gray-400 text-sm sm:text-base">
          Unified risk, compliance, and assurance framework designed for enterprise resilience.
        </p>
      </div>

    </div>

    {/* ================= BENEFITS ================= */}
    <div className="text-center">

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Why Risk & Compliance Matters
      </h3>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
        Strong governance reduces uncertainty and improves decision-making.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-14 text-left">

        {benefits.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                p-5 sm:p-6
                rounded-2xl sm:rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                transition-all duration-300
              "
            >
              <Icon className="text-cyan-300 mb-4" size={24} />

              <h3 className="text-base sm:text-lg font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base">
                {item.text}
              </p>
            </motion.div>
          );
        })}

      </div>

    </div>

  </div>
</section>

    {/* ================= PREMIUM RISK CTA ================= */}
<section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden">

  {/* ambient glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
  <div className="absolute inset-0 backdrop-blur-2xl" />

  {/* glass container */}
  <div className="relative max-w-4xl mx-auto bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl">

    {/* ICON */}
    <Shield className="mx-auto text-cyan-300 mb-5" size={44} />

    {/* Small label */}
    <p className="text-cyan-200/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
      Risk • Compliance • Assurance
    </p>

    {/* Headline */}
    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
      Governance isn’t optional —
      <span className="text-cyan-300"> it’s your competitive edge.</span>
    </h2>

    {/* Subtext */}
    <p className="text-gray-300/70 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      Strengthen enterprise risk visibility, compliance assurance, and control frameworks that protect value and enable confident decision-making.
    </p>

    {/* Divider glow line */}
    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto my-8" />

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link to="/contact-us">
        <button className="
          relative px-8 py-4 rounded-2xl font-semibold text-black
          bg-gradient-to-r from-cyan-400 to-cyan-500
          shadow-lg shadow-cyan-500/25
          hover:shadow-cyan-500/40
          hover:scale-[1.03]
          transition-all duration-300
        ">
          Strengthen Governance
        </button>
      </Link>
    </div>

    {/* Micro trust line */}
    <p className="mt-8 text-xs text-white/40">
      Enterprise-grade governance • Audit-ready systems • Continuous assurance models
    </p>
  </div>
</section>
    </div>
  );
};

export default Risk;
