import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import {
  ClipboardList,
  Users,
  FileSearch,
  Workflow,
  Layers,
  CheckCircle2,
} from "lucide-react";

import AnalysisImg from "../../assets/Services image/Analysis.jpg";

const Analysis = () => {
  const features = [
    "Requirements Elicitation & Documentation",
    "Stakeholder Analysis & Alignment",
    "Process Modeling & Optimization",
    "Solution Scoping & Definition",
    "Traceability & Value Assurance",
  ];

  const capabilities = [
    {
      icon: Users,
      title: "Stakeholder Engagement",
      text: "Identify and align business stakeholders effectively.",
    },
    {
      icon: Workflow,
      title: "Process Analysis",
      text: "Map and optimize end-to-end business workflows.",
    },
    {
      icon: Layers,
      title: "Requirements Engineering",
      text: "Define, validate, and manage structured requirements.",
    },
    {
      icon: ClipboardList,
      title: "Documentation Excellence",
      text: "Deliver clear and traceable business documentation.",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#05070A] via-[#0A0F1A] to-[#050407]">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
        style={{
          backgroundImage: `url(${AnalysisImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* HERO OVERLAY (UPDATED: darker + more image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />

        {/* SOFT GREEN GLOWS (subtle, non-blocking) */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#546B41]/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#99AD7A]/10 blur-[200px] rounded-full" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center lg:justify-start">
            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                w-full max-w-2xl
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
              <div className="w-full flex justify-center mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm">
                  <ClipboardList size={16} />
                  Business Capability Offering
                </div>
              </div>

              {/* TITLE */}
              <h1 className="text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block">Business Analysis and </span>

                <span className="mt-3 flex items-center justify-center lg:justify-start text-[#99AD7A] whitespace-nowrap">
                  <Typewriter
                    words={[
                      "Requirements Clarity",
                      "Stakeholder Alignment",
                      "Process Modeling",
                      "Solution Definition",
                    ]}
                    loop={0}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />

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
                      className="text-[#99AD7A] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-200 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0B120C] via-[#0A0F1A] to-[#0F1410]">
        {/* ================= OVERVIEW GRID ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Turning Ambiguity into Structured Delivery
            </h2>

            <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Strong business analysis ensures that every initiative is built on
              clear, validated, and aligned requirements that reflect real
              stakeholder needs and organizational strategy.
            </p>

            <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
              We bridge the gap between business and technology through
              structured analysis.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full">
            <div
              className="
        p-5 sm:p-6 lg:p-8
        rounded-2xl sm:rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        shadow-lg
      "
            >
              <FileSearch className="text-[#99AD7A] mb-4" size={28} />

              <h3 className="text-lg sm:text-xl font-bold mb-3">
                Core Capability Focus
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Requirement discovery, stakeholder alignment, process mapping,
                and structured documentation.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CAPABILITIES ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Core Capabilities
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Structured analysis practices that improve clarity and delivery
            success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 lg:mt-14 text-left">
            {capabilities.map((item, i) => {
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
                  <Icon className="text-[#99AD7A] mb-4" size={26} />

                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PREMIUM ANALYSIS CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden">
        {/* soft analytical green ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,107,65,0.18),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-2xl" />

        {/* glass container */}
        <div className="relative max-w-4xl mx-auto bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* ICON */}
          <div className="flex justify-center mb-5">
            <div className="p-3 rounded-2xl bg-[#546B41]/10 border border-[#99AD7A]/20">
              <ClipboardList className="text-[#99AD7A]" size={44} />
            </div>
          </div>

          {/* Small label */}
          <p className="text-[#99AD7A]/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
            Analysis • Requirements • Structure
          </p>

          {/* Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Define
            <span className="text-[#99AD7A]"> Better Requirements?</span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-300/70 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transform ambiguity into structured clarity through rigorous
            business analysis, stakeholder alignment, and traceable requirement
            engineering.
          </p>

          {/* Divider glow line */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#99AD7A]/60 to-transparent mx-auto my-8" />

          {/* Buttons */}
          <div className="flex justify-center">
            <button
              className="
        relative px-8 py-4 rounded-2xl font-semibold text-black
        bg-gradient-to-r from-[#546B41] to-[#99AD7A]
        shadow-lg shadow-[#546B41]/25
        hover:shadow-[#546B41]/40
        hover:scale-[1.03]
        transition-all duration-300
      "
            >
              Get Started
            </button>
          </div>

          {/* Micro trust line */}
          <p className="mt-8 text-xs text-white/40">
            Structured thinking • Clear requirements • Reliable delivery
            outcomes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
