import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  RefreshCw,
  GitBranch,
  Layers,
  Users,
  Workflow,
  CheckCircle2,
} from "lucide-react";

import AgileIMG from "../../assets/Services image/Agile.jpg";

const Agile = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0B0F14] via-[#0F172A] to-[#111827]">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
        style={{
          backgroundImage: `url(${AgileIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* darker overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />

        {/* subtle glow (reduced brightness for darker theme) */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[180px] rounded-full" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center lg:justify-start">
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
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs sm:text-sm">
                  <GitBranch size={16} />
                  Agile & Adaptive Delivery Excellence
                </div>
              </div>

              {/* TITLE */}
              <h1 className="text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elevate Execution with {/* FIXED TYPEWRITER WRAPPER */}
                <span className="text-emerald-300 inline-flex whitespace-nowrap min-w-[260px] sm:min-w-[320px] md:min-w-[380px]">
                  <Typewriter
                    words={[
                      "Agile Delivery",
                      "Adaptive Systems",
                      "Lean Execution",
                      "Continuous Value",
                    ]}
                    loop={0}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />

                  {/* Cursor INSIDE same inline flow */}
                  <span className="ml-1">
                    <Cursor cursorStyle="|" />
                  </span>
                </span>
              </h1>

              {/* FEATURES */}
              <div className="mt-6 grid gap-3">
                {[
                  "Iterative Product Delivery & MVP Execution",
                  "Adaptive Transformation to Agile Operating Models",
                  "Agile Coaching, Scrum & Kanban Enablement",
                  "Scaled Agile Delivery Across Teams",
                  "Agile Maturity & Capability Assessment",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-300 mt-0.5"
                    />
                    <span className="text-gray-300 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

    
            </motion.div>
          </div>
        </div>
      </section>

     {/* ================= OVERVIEW + CAPABILITIES ================= */}
<section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#05070A] via-[#0B1410] to-[#020617]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* ================= OVERVIEW ================= */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 sm:mb-20">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Agile Delivery Ecosystems for{" "}
          <span className="text-emerald-300">Modern Organizations</span>
        </h2>

        <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
          We design agile delivery ecosystems that enable organizations to
          respond faster, deliver continuously, and maximize customer value.
        </p>

        <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
          Move beyond rigid planning cycles with Agile, Scrum, Kanban, Lean,
          and continuous feedback-driven execution models.
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
        <h3 className="text-lg sm:text-xl font-bold text-emerald-300 mb-4">
          Adaptive Delivery Principles
        </h3>

        <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
          {[
            "Continuous Value Delivery",
            "Iterative & Incremental Execution",
            "Customer-Centric Feedback Loops",
            "Cross-Functional Collaboration",
            "Rapid Adaptation to Change",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <CheckCircle2 className="text-emerald-300 mt-1" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* ================= CAPABILITIES ================= */}
    <div className="text-center">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Core Capabilities
      </h2>

      <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        Agile delivery capabilities designed for speed and continuous value.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 lg:mt-14">

        {[
          {
            icon: Workflow,
            title: "Iterative Product Development",
            text: "MVP-driven sprints for faster validation.",
          },
          {
            icon: Layers,
            title: "Adaptive Transformation",
            text: "Shift from waterfall to agile models.",
          },
          {
            icon: Users,
            title: "Agile Coaching",
            text: "Enable self-organizing teams.",
          },
          {
            icon: RefreshCw,
            title: "Scaled Agile Execution",
            text: "Align multiple teams at scale.",
          },
        ].map((item, i) => {
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
                text-left
                transition-all duration-300
              "
            >
              <Icon className="text-emerald-300 mb-4" size={22} />

              <h3 className="font-semibold text-base sm:text-lg">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          );
        })}

      </div>

    </div>

  </div>
</section>

   {/* ================= PREMIUM AGILE CTA ================= */}
<section className="relative py-16 sm:py-20 lg:py-32 text-center overflow-hidden">

  {/* ambient glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_65%)]" />
  <div className="absolute inset-0 backdrop-blur-2xl" />

  {/* glass container */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl 
                    p-6 sm:p-10 lg:p-12 shadow-2xl">

      {/* ICON */}
      <RefreshCw className="mx-auto text-emerald-300 mb-4 sm:mb-5" size={36} />

      {/* label */}
      <p className="text-emerald-200/70 text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase">
        Agile • Delivery • Transformation
      </p>

      {/* headline */}
      <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight">
        Delivery should never slow you down —
        <span className="text-emerald-300 block sm:inline">
          {" "}it should accelerate you.
        </span>
      </h2>

      {/* subtext */}
      <p className="text-gray-300/70 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg 
                    max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
        Build adaptive delivery systems using Agile, Scrum, Kanban, and Lean practices that continuously deliver customer value.
      </p>

      {/* divider glow */}
      <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-auto my-6 sm:my-8" />

      {/* buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
        <Link to="/book-training" className="w-full sm:w-auto">
          <button className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 sm:py-4
            rounded-2xl font-semibold text-black
            bg-gradient-to-r from-emerald-400 to-emerald-500
            shadow-lg shadow-emerald-500/20
            hover:shadow-emerald-500/40
            hover:scale-[1.03]
            transition-all duration-300
          ">
            Start Transformation
          </button>
        </Link>
      </div>

      {/* micro trust */}
      <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-white/40 px-4 sm:px-0">
        Continuous delivery • Fast feedback loops • Scalable Agile systems
      </p>

    </div>
  </div>
</section>
    </div>
  );
};

export default Agile;
