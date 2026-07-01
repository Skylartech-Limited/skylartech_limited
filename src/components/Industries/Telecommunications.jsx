import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  Network,
  ShieldCheck,
  Activity,
  BarChart3,
  Zap,
  Check,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Radio,
  Wifi,
  Signal,
} from "lucide-react";

import Telecom from "../../assets/Industries/telecommunication.jpg";

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
          ? "transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(251,191,36,0.12)]"
          : ""
      } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
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

const importanceData = [
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
];

const deliveryData = [
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
];

const benefitsList = [
  "Faster network deployment",
  "Reduced operational risk",
  "Improved budget control",
  "Better vendor alignment",
  "Higher delivery success rate",
  "Stronger governance models",
];

const statsData = [
  { value: 95, suffix: "%", label: "Network Reliability" },
  { value: 40, suffix: "%", label: "Faster Deployment" },
  { value: 60, suffix: "%", label: "Cost Savings" },
  { value: 99, suffix: "%", label: "Service Uptime" },
];


const Telecommunications = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="relative overflow-hidden text-white bg-[#05060D] sm:pt-24">
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Telecom})` }}
        />

        {/* Premium Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060D]/85 via-[#0B1020]/65 to-[#120A2A]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

        {/* Glow Orbs */}
        <GlowOrb className="top-0 right-0 w-[500px] h-[500px] bg-amber-500/15 -translate-y-1/3 translate-x-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 translate-y-1/3 -translate-x-1/4" />
        <GridOverlay />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex justify-start py-10 sm:py-16 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
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
            <motion.div variants={fadeUp}>
              <h2 className="flex items-center gap-2 text-amber-300 font-semibold text-sm sm:text-base">
                <Network className="w-5 h-5" />
                Telecommunications Project Management
              </h2>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight"
            >
              Delivering Telecom Infrastructure with Speed & Precision
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg"
            >
              Telecom project management enables large-scale network rollouts,
              5G deployment, infrastructure upgrades, and digital transformation
              initiatives in fast-paced, high-pressure environments.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/book-training" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(251,191,36,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
                >
                  Start a Project
                </motion.button>
              </Link>

              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition duration-300">
                  Explore Framework
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TELECOM INSIGHTS ─────────────────────────────────────────── */}
      <section
        id="overview"
        className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 bg-[#070A14] overflow-hidden"
      >
        <GlowOrb className="top-0 right-0 w-[600px] h-[600px] bg-amber-500/8 translate-x-1/3 -translate-y-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/6 -translate-x-1/4 translate-y-1/4" />
        <GridOverlay />

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <SectionLabel>
            <Radio className="w-3.5 h-3.5 text-amber-300" />
            Why Telecom Transformation Matters
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Telecom Project Delivery for High-Performance Networks
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            Telecom projects require precise coordination across infrastructure,
            vendors, engineering teams, and digital systems to deliver scalable,
            reliable connectivity in fast-moving environments.
          </p>
        </motion.div>

        {/* Importance Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {importanceData.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <item.icon className="text-amber-300 w-5 h-5" />
                </div>

                <h3 className="font-semibold text-lg sm:text-xl leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Delivery Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center mt-20 sm:mt-28"
        >
          <SectionLabel>
            <Wifi className="w-3.5 h-3.5 text-amber-300" />
            Our Delivery Approach
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Structured Telecom Project Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            Structured delivery ensures telecom projects are executed with
            clarity, reduced risk, and predictable outcomes across complex
            infrastructure environments.
          </p>
        </motion.div>

        {/* Delivery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-14 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6"
        >
          {deliveryData.map((item, i) => (
            <motion.div key={i} variants={scaleIn}>
              <GlassCard className="p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center mx-auto mb-4">
                  <Signal className="w-5 h-5 text-amber-300" />
                </div>

                <h3 className="text-amber-300 font-semibold text-lg mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm sm:text-base leading-relaxed text-center">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center mt-20 sm:mt-28"
        >
          <SectionLabel>
            <BarChart3 className="w-3.5 h-3.5 text-amber-300" />
            Measurable Outcomes
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Key Benefits for Telecom Organizations
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {benefitsList.map((b, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="flex items-center gap-4 p-5 sm:p-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-amber-300" />
                </div>

                <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed">
                  {b}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── STATS COUNTER SECTION ─────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#14101e] to-[#05060D]" />
        <GlowOrb className="top-1/2 left-1/2 w-[700px] h-[700px] bg-amber-500/10 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <SectionLabel>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Impact by the Numbers
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Telecom Transformation Delivered at Scale
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-14 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8"
        >
          {statsData.map((stat, i) => (
            <motion.div key={i} variants={scaleIn}>
              <GlassCard className="p-6 sm:p-8 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-400">
                  {statsInView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      decimals={0}
                    />
                  ) : (
                    "0%"
                  )}
                </div>
                <p className="text-white/60 text-sm sm:text-base mt-2 leading-snug">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── PREMIUM CTA ───────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060D] via-[#14101e] to-[#05060D]" />
        <GlowOrb className="top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-500/12 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <GlassCard hover={false} className="p-8 sm:p-12 md:p-16 text-center">
            <SectionLabel>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Get Started
            </SectionLabel>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Accelerate Telecom Transformation with{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">
                Precision Delivery
              </span>
            </h2>

            <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              Partner with structured project management experts to reduce
              operational risk, improve rollout efficiency, and deliver telecom
              infrastructure at scale with confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-training"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Talk to a Telecom Consultant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#overview"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Explore Framework
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-white/40 text-xs mt-8">
              Trusted for large-scale telecom infrastructure & network transformation programs
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Telecommunications;
