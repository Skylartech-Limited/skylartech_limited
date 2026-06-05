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
  Compass,
  CheckCircle,
  Layers,
} from "lucide-react";

import Transform from "../../assets/Services image/Transform.jpg";

const Consulting = () => {
  const features = [
    "Enterprise Project Governance",
    "PMO Setup & Optimization",
    "Organizational Change Enablement",
    "Strategic Portfolio Management",
  ];

  const benefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      text: "Align execution with enterprise-wide business goals.",
    },
    {
      icon: Workflow,
      title: "Process Transformation",
      text: "Modernize workflows for speed, efficiency, and scale.",
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      text: "Improve collaboration across leadership teams.",
    },
    {
      icon: Building2,
      title: "PMO Maturity",
      text: "Build governance-driven PMO structures.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      text: "Enable measurable delivery performance.",
    },
    {
      icon: Shield,
      title: "Risk Governance",
      text: "Improve predictability and delivery control.",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* ================= HERO ================= */}
      <section
        className="
    relative min-h-screen flex items-center
    pt-24 sm:pt-28 lg:pt-32
    overflow-hidden
  "
        style={{
          backgroundImage: `url(${Transform})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/60 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-start">
            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
  w-full
  max-w-2xl
  bg-white/10 backdrop-blur-2xl
  border border-white/15
  text-white
  p-5 sm:p-8 md:p-10 lg:p-12
  rounded-3xl
  shadow-[0_25px_80px_rgba(0,0,0,0.7)]

  min-h-[420px] sm:min-h-[460px] md:min-h-[500px]
  flex flex-col justify-center
"
            >
              {/* TAG */}
              <div className="w-full flex justify-center mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm">
                  <Briefcase size={16} />
                  Consulting & Organizational Transformation
                </div>
              </div>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[120px] sm:min-h-[140px]">
                Transform Organizations Through{" "}
                <span className="text-amber-400">
                  <Typewriter
                    words={[
                      "Strategy",
                      "Execution",
                      "Governance",
                      "Leadership",
                    ]}
                    loop={0}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </span>
                <span className="text-amber-400">
                  <Cursor cursorStyle="|" />
                </span>
              </h1>

              {/* FEATURES */}
              <div className="mt-5 sm:mt-6 md:mt-8 grid gap-3">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start sm:items-center gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-amber-400 shrink-0"
                    />
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

      {/* ================= OVERVIEW + BENEFITS (MERGED) ================= */}
<section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        Enterprise Consulting for{" "}
        <span className="text-amber-400">Modern Organizations</span>
      </h2>

      <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
        We help organizations transform execution through structured governance,
        PMO maturity, and strategic alignment frameworks.
      </p>

      <p className="mt-4 sm:mt-5 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
        From operating models to portfolio management, we enable measurable
        transformation outcomes across enterprise systems.
      </p>
    </div>

    {/* RIGHT CARD */}
    <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-900 to-black border border-slate-800 shadow-2xl">

      <Layers className="text-amber-400 mb-4" size={32} />

      <h3 className="text-xl sm:text-2xl font-bold mb-4">
        PMI-Aligned Framework
      </h3>

      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        Structured consulting approach designed to improve governance,
        predictability, and enterprise performance through proven PMO practices.
      </p>
    </div>

  </div>

  {/* ================= BENEFITS (INTEGRATED BELOW) ================= */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16">

    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Why Organizations Choose Us
      </h2>

      <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
        We deliver enterprise transformation through structured consulting,
        governance, and PMO excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {benefits.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="
              p-5 sm:p-6 md:p-8
              rounded-3xl
              bg-slate-900/60 backdrop-blur-xl
              border border-slate-800
              shadow-lg hover:shadow-2xl
              transition-all
            "
          >
            <Icon size={26} className="text-amber-400 mb-4" />

            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
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

</section>

      {/* ================= PREMIUM CONSULTING CTA ================= */}
      <section className="relative py-24 sm:py-28 lg:py-32 text-center overflow-hidden">
        {/* smooth background continuity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {/* warm consulting glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-amber-500/10 blur-[180px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* GLASS CARD */}
          <div
            className="
      bg-white/5 backdrop-blur-2xl
      border border-white/10
      rounded-3xl
      p-8 sm:p-12 lg:p-14
      shadow-[0_25px_80px_rgba(0,0,0,0.6)]
      relative
      overflow-hidden
    "
          >
            {/* inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

            <div className="relative">
              {/* ICON */}
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/20">
                  <Compass className="text-amber-300" size={30} />
                </div>
              </div>

              {/* LABEL */}
              <p className="text-amber-200/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
                Consulting • Strategy • Transformation
              </p>

              {/* TITLE */}
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                High performance doesn’t happen by chance —
                <span className="text-amber-300"> it’s engineered.</span>
              </h2>

              {/* SUBTEXT */}
              <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Partner with expert consultants to modernize operations,
                strengthen governance, and accelerate enterprise transformation
                outcomes.
              </p>

              {/* DIVIDER */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto my-8" />

              {/* BUTTON */}
              <div className="flex justify-center">
                <Link to="/book-training">
                  <button
                    className="
              bg-amber-500 hover:bg-amber-600
              text-black font-semibold
              px-8 py-4
              rounded-2xl
              shadow-lg shadow-amber-500/20
              hover:shadow-amber-500/40
              hover:scale-[1.03]
              transition-all duration-300
            "
                  >
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

export default Consulting;
