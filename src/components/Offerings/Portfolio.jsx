import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  Briefcase,
  Target,
  Workflow,
  Users,
  Building2,
  TrendingUp,
  Shield,
  CheckCircle,
  Layers,
} from "lucide-react";

import Portfolio from "../../assets/Services image/Portfolio.jpg";

const PortfolioGovernance = () => {
  const features = [
    "Portfolio Management & Optimization",
    "PMO Design & Implementation",
    "Governance Framework Development",
    "Strategy Execution Alignment",
    "Maturity Model Assessments",
  ];

  const benefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      text: "Ensure every project delivers measurable business value.",
    },
    {
      icon: Workflow,
      title: "Execution Excellence",
      text: "Transform strategy into structured and predictable delivery.",
    },
    {
      icon: Users,
      title: "Stakeholder Visibility",
      text: "Improve executive reporting and decision transparency.",
    },
    {
      icon: Building2,
      title: "PMO Optimization",
      text: "Build or enhance PMOs tailored to your organization.",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Performance",
      text: "Maximize ROI through prioritization and resource balance.",
    },
    {
      icon: Shield,
      title: "Governance Control",
      text: "Strengthen compliance, accountability, and risk management.",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-950 via-indigo-950 to-black">
      {/* ================= HERO ================= */}
      <section
        className="
          relative min-h-screen flex items-center
          pt-24 sm:pt-28 lg:pt-32
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${Portfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay (stronger for visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-indigo-950/70 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-start">
            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                w-full max-w-2xl
                bg-white/10 backdrop-blur-2xl
                border border-white/15
                text-white
                p-5 sm:p-8 md:p-10 lg:p-12
                rounded-3xl
                shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                min-h-[420px]
                flex flex-col justify-center
              "
            >
              {/* TAG */}
              <div className="w-full flex justify-center mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm">
                  <Briefcase size={16} />
                  Portfolio, PMO & Governance Excellence
                </div>
              </div>

              {/* TITLE + TYPEWRITER */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[120px] sm:min-h-[140px]">
                Elevate Execution with{" "}
                <span className="text-indigo-300">
                  <Typewriter
                    words={[
                      "PMO Excellence",
                      "Portfolio Governance",
                      "Strategy Execution",
                      "Enterprise Alignment",
                    ]}
                    loop={0}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </span>
                <span className="text-indigo-300">
                  <Cursor cursorStyle="|" />
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-4 sm:mt-5 md:mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                Bridging the gap between strategy and execution. We build PMOs,
                optimize project portfolios, and establish governance
                frameworks that drive sustainable growth.
              </p>

              {/* FEATURES */}
              <div className="mt-5 sm:mt-6 md:mt-8 grid gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start sm:items-center gap-3">
                    <CheckCircle size={18} className="text-indigo-300 shrink-0" />
                    <span className="text-gray-200 text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            
            </motion.div>
          </div>
        </div>
      </section>

     {/* ================= PORTFOLIO & GOVERNANCE ================= */}
<section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-indigo-950 to-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Empowering Strategic Execution
      </h2>

      <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
        In today’s fast-paced business environment, great ideas are only as
        good as their execution. We transform chaotic project environments into
        structured, transparent, and high-performing systems.
      </p>

      <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
        We partner with executives and project leaders to design PMOs, align
        portfolios with strategy, and implement governance frameworks that
        ensure accountability and growth.
      </p>
    </div>

    {/* RIGHT CARD */}
    <div className="rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-xl">

      <Layers className="text-indigo-300 mb-5" size={34} />

      <h3 className="text-xl sm:text-2xl font-bold mb-4">
        PMI-Aligned Governance Model
      </h3>

      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        A structured approach built on globally recognized PMI® frameworks to
        improve delivery maturity, control, and performance.
      </p>
    </div>

  </div>

  {/* ================= BENEFITS ================= */}
  <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">

    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Why Portfolio & Governance Excellence Matters
      </h2>

      <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
        Structured governance ensures organizations invest in the right work,
        execute effectively, and deliver measurable outcomes.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {benefits.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Icon className="text-indigo-300 mb-4" size={26} />
            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {item.text}
            </p>
          </motion.div>
        );
      })}

    </div>
  </div>

</section>

  {/* ================= PREMIUM PORTFOLIO CTA ================= */}
<section className="relative py-24 sm:py-28 lg:py-32 text-center overflow-hidden">

  {/* soft background continuity (no harsh section break) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

  {/* indigo ambient glow */}
  <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-indigo-500/10 blur-[180px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[160px] rounded-full" />

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

    {/* GLASS CARD */}
    <div className="
      relative
      bg-white/5 backdrop-blur-2xl
      border border-white/10
      rounded-3xl
      p-8 sm:p-12 lg:p-14
      shadow-[0_25px_80px_rgba(0,0,0,0.6)]
      overflow-hidden
    ">

      {/* subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-400/20">
            <Briefcase className="text-indigo-300" size={30} />
          </div>
        </div>

        {/* LABEL */}
        <p className="text-indigo-200/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Portfolio • PMO • Governance Excellence
        </p>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Strategy without execution is just vision —
          <span className="text-indigo-300"> let’s fix that.</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
          Build high-performing PMO structures, align portfolios to strategy, and enable governance systems that deliver measurable business outcomes.
        </p>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent mx-auto my-8" />

        {/* BUTTON */}
        <div className="flex justify-center">
          <Link to="/book-training">
            <button className="
              bg-indigo-500 hover:bg-indigo-600
              text-white
              px-8 py-4
              rounded-2xl
              font-semibold
              shadow-lg shadow-indigo-500/20
              hover:shadow-indigo-500/40
              hover:scale-[1.03]
              transition-all duration-300
            ">
              Start Transformation
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default PortfolioGovernance;