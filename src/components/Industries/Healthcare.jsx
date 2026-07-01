import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  HeartPulse,
  ShieldPlus,
  Activity,
  Users,
  FileText,
  Database,
  Stethoscope,
  AlertTriangle,
  Check,
  ArrowUpRight,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Health from "../../assets/Industries/Healthcare.jpg";

// ─── Reusable Premium Components ─────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80">
    {children}
  </div>
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px] pointer-events-none" />
);

const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
  />
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
    className={`relative overflow-hidden rounded-[28px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      ${
        hover
          ? "transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(52,211,153,0.12)]"
          : ""
      } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
    {children}
  </Tag>
);

// ─── Framer Motion Variants ──────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const focusAreasData = [
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
];

const projectTypesData = [
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
];

const skillsList = [
  "Patient Safety & Risk Management",
  "Clinical Communication",
  "Data-Driven Healthcare Decisions",
  "Regulatory Compliance",
  "Change Management",
  "Resource Optimization",
];

const statsData = [
  { value: 85, suffix: "%", label: "Patient Satisfaction" },
  { value: 30, suffix: "%", label: "Faster Delivery" },
  { value: 45, suffix: "%", label: "Cost Reduction" },
  { value: 99, suffix: "%", label: "Compliance Rate" },
];

const Healthcare = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="relative overflow-hidden text-white bg-[#05060A] sm:pt-24">
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Health})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A]/85 via-[#0a2a25]/70 to-[#0b1220]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        <GlowOrb className="top-0 right-0 w-[500px] h-[500px] bg-emerald-500/15 -translate-y-1/3 translate-x-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 translate-y-1/3 -translate-x-1/4" />
        <GridOverlay />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-10 sm:py-16 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl text-left bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl"
          >
            <motion.div variants={fadeUp}>
              <h2 className="flex items-center gap-2 text-emerald-300 font-semibold text-sm sm:text-base">
                <HeartPulse className="w-5 h-5" />
                Healthcare Project Management
              </h2>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight">
              Improving Patient Care Through Structured Project Delivery
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              Project management in healthcare applies structured clinical and
              administrative processes to improve patient care, safety, and
              operational efficiency within highly regulated environments.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/book-training" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(52,211,153,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
                >
                  Discuss a Healthcare Project
                </motion.button>
              </Link>
              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition duration-300">
                  Explore Details
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── HEALTHCARE INSIGHTS ─────────────────────────────────────────── */}
      <section id="overview" className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 bg-gradient-to-br from-[#05060A] via-[#061a17] to-[#0b1220] overflow-hidden">
        <GlowOrb className="top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 translate-x-1/3 -translate-y-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/6 -translate-x-1/4 translate-y-1/4" />
        <GridOverlay />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative z-10 max-w-5xl mx-auto text-center">
          <SectionLabel><HeartPulse className="w-3.5 h-3.5 text-emerald-300" /> Clinical Delivery Excellence</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Healthcare Project Management & Delivery Excellence</h2>
          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            Healthcare projects require precision, compliance, and coordination across clinical and administrative systems to ensure patient safety and operational efficiency.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
          className="relative z-10 mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {focusAreasData.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-4">
                  <item.icon className="text-emerald-300 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl leading-snug">{item.title}</h3>
                <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Types Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative z-10 max-w-6xl mx-auto text-center mt-20 sm:mt-28">
          <SectionLabel><Database className="w-3.5 h-3.5 text-emerald-300" /> Project Categories</SectionLabel>
          <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Common Healthcare Project Types</h3>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
          className="relative z-10 mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {projectTypesData.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 sm:p-7 text-center">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-emerald-300 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl leading-snug">{item.title}</h3>
                <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative z-10 max-w-6xl mx-auto text-center mt-20 sm:mt-28">
          <SectionLabel><BarChart3 className="w-3.5 h-3.5 text-emerald-300" /> Core Competencies</SectionLabel>
          <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Essential Skills & Best Practices</h3>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
          className="relative z-10 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skillsList.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="flex items-center gap-4 p-5 sm:p-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-300" />
                </div>
                <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed">{item}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── STATS COUNTER SECTION ─────────────────────────────────────── */}
      <section ref={statsRef} className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060b18] via-[#0a1a15] to-[#05060A]" />
        <GlowOrb className="top-1/2 left-1/2 w-[700px] h-[700px] bg-emerald-500/10 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative z-10 max-w-6xl mx-auto text-center">
          <SectionLabel><Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Impact by the Numbers</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Healthcare Transformation Delivered at Scale</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
          className="relative z-10 mt-14 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {statsData.map((stat, i) => (
            <motion.div key={i} variants={scaleIn}>
              <GlassCard className="p-6 sm:p-8 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-400">
                  {statsInView ? <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} decimals={0} /> : "0%"}
                </div>
                <p className="text-white/60 text-sm sm:text-base mt-2 leading-snug">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── PREMIUM CTA ───────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060A] via-[#0a1a15] to-[#05060A]" />
        <GlowOrb className="top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-500/12 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <GlassCard hover={false} className="p-8 sm:p-12 md:p-16 text-center">
            <SectionLabel><Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Get Started</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Transform Healthcare Delivery with{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Structured Project Management
              </span>
            </h2>
            <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              Improve patient outcomes, safety, and operational efficiency through structured healthcare project systems designed for modern clinical environments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-training" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Get Healthcare Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#overview" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                Explore Details
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-white/40 text-xs mt-8">
              Trusted for hospital systems modernization, digital health & clinical transformation
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Healthcare;