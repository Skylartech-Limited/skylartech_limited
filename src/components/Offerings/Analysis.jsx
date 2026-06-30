import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  ClipboardList,
  Users,
  FileSearch,
  Workflow,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Target,
  GitBranch,
  BarChart3,
  FileCheck,
} from "lucide-react";

import AnalysisImg from "../../assets/Services image/Analysis.jpg";

/* ─── Reusable Premium Components ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionLabel = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border border-[#99AD7A]/20 bg-[#99AD7A]/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#99AD7A]/90 ${className}`}
  >
    {children}
  </div>
);

const GlassCard = ({
  children,
  className = "",
  hover = true,
  as: Tag = "div",
  ...props
}) => (
  <Tag
    {...props}
    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${
      hover
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-[#99AD7A]/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(153,173,122,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#99AD7A]/40 to-transparent" />
    {children}
  </Tag>
);

const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute rounded-full blur-[180px] pointer-events-none ${className}`}
  />
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
);

/* ─── Data ─── */

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
  {
    icon: Search,
    title: "Discovery & Elicitation",
    text: "Uncover hidden needs through structured discovery techniques.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Analysis",
    text: "Leverage analytics to validate assumptions and guide decisions.",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery & Elicitation",
    text: "Conduct stakeholder interviews, workshops, and document analysis to uncover business needs and objectives.",
  },
  {
    icon: FileSearch,
    title: "2. Analysis & Modeling",
    text: "Map current-state processes, identify gaps, and model future-state workflows with traceable requirements.",
  },
  {
    icon: Target,
    title: "3. Definition & Scoping",
    text: "Define solution scope, acceptance criteria, and success metrics aligned with business strategy.",
  },
  {
    icon: FileCheck,
    title: "4. Validation & Handoff",
    text: "Validate requirements with stakeholders and deliver structured documentation for development teams.",
  },
];

const Analysis = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#05070A] via-[#0A0F1A] to-[#050407]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${AnalysisImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060607]/95 via-[#060607]/80 to-[#060607]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent" />

        <GlowOrb className="top-1/4 left-1/4 w-[500px] h-[500px] bg-[#99AD7A]/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100svh-140px)]">
            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="order-2 lg:order-1 mt-8 lg:mt-0">
              <SectionLabel>
                <ClipboardList size={14} />
                Business Capability Offering
              </SectionLabel>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Business Analysis and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] to-[#b8cc98] inline-flex whitespace-nowrap min-w-[240px] sm:min-w-[300px] md:min-w-[360px]">
                  <Typewriter words={["Requirements Clarity","Stakeholder Alignment","Process Modeling","Solution Definition"]} loop={0} typeSpeed={80} deleteSpeed={40} delaySpeed={1500} />
                  <span className="ml-1"><Cursor cursorStyle="|" /></span>
                </span>
              </h1>

              {/* Features */}
              <div className="mt-8 grid gap-3">
                {["Requirements Elicitation & Documentation","Stakeholder Analysis & Alignment","Process Modeling & Optimization","Traceability & Value Assurance"].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="bg-[#99AD7A]/15 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-[#99AD7A]" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/book-training" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-[#546B41] to-[#99AD7A] shadow-lg shadow-[#546B41]/25 hover:shadow-[#546B41]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/offerings" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  Explore All Offerings
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }} className="order-1 lg:order-2 flex justify-center">
              <GlassCard className="w-full max-w-md sm:max-w-lg p-6 sm:p-8">
                <div className="relative z-10">
                  <SectionLabel className="mb-4">Why Analysis Matters</SectionLabel>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Turning Ambiguity into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] to-[#b8cc98]">Structured Delivery</span>
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    Strong business analysis ensures every initiative is built on clear, validated, and aligned requirements that reflect real stakeholder needs and organizational strategy.
                  </p>
                  <div className="mt-6 space-y-3">
                    {["Stakeholder Engagement","Requirements Engineering","Process Optimization","Documentation Excellence","Value Assurance"].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/5 hover:bg-white/[0.05] hover:border-[#99AD7A]/15 transition-all duration-300">
                        <div className="bg-[#99AD7A]/15 p-1.5 rounded-lg flex-shrink-0">
                          <CheckCircle2 size={14} className="text-[#99AD7A]" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B120C] via-[#0A0F1A] to-[#0F1410]" />
        <GridOverlay />
        <GlowOrb className="-top-40 right-0 w-[420px] h-[420px] bg-[#99AD7A]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center lg:text-left"
          >
            <SectionLabel className="mx-auto lg:mx-0 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#99AD7A]" />
              Overview
            </SectionLabel>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Turning Ambiguity into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] to-[#b8cc98]">
                Structured Delivery
              </span>
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
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full"
          >
            <GlassCard hover={false} className="p-5 sm:p-6 lg:p-8">
              <FileSearch className="text-[#99AD7A] mb-4" size={28} />
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                Core Capability Focus
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Requirement discovery, stakeholder alignment, process mapping,
                and structured documentation.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

        {/* ================= PROCESS / METHODOLOGY ================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-white/5">
        <GridOverlay />
        <GlowOrb className="top-40 -left-40 w-[520px] h-[520px] bg-[#546B41]/10" />
        <GlowOrb className="-bottom-40 right-0 w-[420px] h-[420px] bg-[#99AD7A]/8" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14 sm:mb-16 lg:mb-20"
          >
            <SectionLabel className="mx-auto">
              <GitBranch className="w-3.5 h-3.5 text-[#99AD7A]" />
              Structured Approach
            </SectionLabel>
            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Our Analysis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] to-[#b8cc98]">
                Methodology
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              A proven four-phase approach to transform ambiguity into clear,
              actionable requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full text-center lg:text-left">
                    <Icon
                      className="text-[#99AD7A] mb-4 mx-auto lg:mx-0"
                      size={26}
                    />
                    <h3 className="text-base sm:text-lg font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {step.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-white/5">
        <GridOverlay />
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#546B41]/15" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14 sm:mb-16 lg:mb-20"
          >
            <SectionLabel className="mx-auto">
              <Layers className="w-3.5 h-3.5 text-[#99AD7A]" />
              Expertise Areas
            </SectionLabel>
            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] to-[#b8cc98]">
                Capabilities
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Structured analysis practices that improve clarity and delivery
              success.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full text-center lg:text-left">
                    <Icon
                      className="text-[#99AD7A] mb-4 mx-auto lg:mx-0"
                      size={26}
                    />
                    <h3 className="text-base sm:text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#546B41]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,173,122,0.14),transparent_60%)]" />
        <GlowOrb className="-top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#99AD7A]/10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-5xl mx-auto"
        >
          <GlassCard hover={false} className="p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-b from-[#99AD7A]/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <SectionLabel className="mx-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#99AD7A]" />
                Analysis &bull; Requirements &bull; Structure
              </SectionLabel>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                Ready to Define
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#99AD7A] via-[#b8cc98] to-[#99AD7A]">
                  Better Requirements?
                </span>
              </h2>

              <p className="text-[#99AD7A]/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Transform ambiguity into structured clarity through rigorous
                business analysis, stakeholder alignment, and traceable
                requirement engineering.
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#99AD7A]/50 to-transparent mx-auto my-8 sm:my-10" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-[#546B41] to-[#99AD7A] shadow-lg shadow-[#546B41]/25 hover:shadow-[#546B41]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings/professional-training-and-certification"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  View Certifications
                </Link>
              </div>

              <p className="mt-8 text-xs sm:text-sm text-white/35 tracking-wide">
                Structured thinking &bull; Clear requirements &bull; Reliable
                delivery outcomes
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Analysis;

