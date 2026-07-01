import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  HeartHandshake,
  Globe,
  Link2,
  ShieldCheck,
  Users,
  BarChart3,
  Database,
  Network,
  FileText,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Target,
} from "lucide-react";

import NGO from "../../assets/Industries/NGO.jpg";

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
          ? "transition-all duration-500 hover:-translate-y-1 hover:border-pink-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(244,114,182,0.12)]"
          : ""
      } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
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

const coreComponentsData = [
  {
    icon: FileText,
    title: "Project Cycle Management (PCM)",
    desc: "End-to-end lifecycle management from identification to evaluation ensuring structured delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Donor Compliance & Reporting",
    desc: "Ensures transparency, financial accountability, and adherence to funding requirements.",
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Learning (MEAL)",
    desc: "Tracks outcomes, measures impact, and improves future project performance.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    desc: "Aligns communities, donors, and governments for inclusive impact delivery.",
  },
];

const digitalData = [
  {
    icon: Network,
    title: "Integrated NGO Platforms",
    desc: "Unified systems connecting operations, finance, donors, and reporting.",
  },
  {
    icon: Database,
    title: "Impact Analytics",
    desc: "Data-driven dashboards measuring real-world social outcomes.",
  },
  {
    icon: Globe,
    title: "Global Outreach Systems",
    desc: "Digital platforms expanding reach to underserved communities.",
  },
  {
    icon: Link2,
    title: "System Integration",
    desc: "Seamless integration across all NGO operational systems.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    desc: "Real-time engagement tools between NGOs and beneficiaries.",
  },
  {
    icon: BarChart3,
    title: "Transparency Systems",
    desc: "Automated reporting for donors and stakeholders.",
  },
];

const statsData = [
  { value: 92, suffix: "%", label: "Donor Confidence" },
  { value: 50, suffix: "%", label: "Impact Reach" },
  { value: 40, suffix: "%", label: "Cost Efficiency" },
  { value: 10, suffix: "K+", label: "Communities Served" },
];


const Ngos = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="relative overflow-hidden text-white bg-[#05060A] sm:pt-24">
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${NGO})` }}
        />

        {/* Premium Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-fuchsia-500/30 to-pink-600/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

        {/* Glow Orbs */}
        <GlowOrb className="top-0 right-0 w-[500px] h-[500px] bg-pink-500/15 -translate-y-1/3 translate-x-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 translate-y-1/3 -translate-x-1/4" />
        <GridOverlay />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-10 sm:py-16 lg:py-0 flex justify-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="
              max-w-3xl
              w-full
              text-left
              bg-black/30
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-6 sm:p-8 md:p-10 lg:p-14
              shadow-2xl
            "
          >
            <motion.div variants={fadeUp}>
              <h2 className="flex items-center gap-2 text-pink-300 font-semibold text-sm sm:text-base">
                <HeartHandshake className="w-5 h-5" />
                NGO & Social Impact Project Management
              </h2>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight"
            >
              Delivering Sustainable Social Impact Through Structured Project Management
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/70 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl"
            >
              NGOs rely on structured project delivery frameworks to ensure transparency,
              donor compliance, and measurable community outcomes across the entire project lifecycle.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link to="/book-training" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(244,114,182,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-400 to-fuchsia-500 text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
                >
                  Start a Project
                </motion.button>
              </Link>

              <a href="#digital" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition duration-300">
                  Explore Digital Transformation
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── NGO INSIGHTS ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-5 sm:px-8 bg-gradient-to-br from-[#05060A] via-[#1A0A1F] to-[#2A0A3D] overflow-hidden">
        <GlowOrb className="top-0 right-0 w-[600px] h-[600px] bg-pink-500/8 translate-x-1/3 -translate-y-1/4" />
        <GlowOrb className="bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/6 -translate-x-1/4 translate-y-1/4" />
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
            <HeartHandshake className="w-3.5 h-3.5 text-pink-300" />
            Social Impact & Digital Systems
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            NGO Project Management & Digital Transformation
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            Structured frameworks and digital systems enable NGOs to improve accountability, scale impact,
            and deliver measurable social outcomes efficiently.
          </p>
        </motion.div>

        {/* Core Components Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-6xl mx-auto text-center mt-20 sm:mt-28"
        >
          <SectionLabel>
            <Target className="w-3.5 h-3.5 text-pink-300" />
            Core Pillars
          </SectionLabel>

          <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Core Components of NGO Project Management
          </h3>

          <p className="text-white/60 mt-5 max-w-3xl mx-auto text-sm sm:text-base">
            Structured frameworks ensure accountability, sustainability, and measurable impact.
          </p>
        </motion.div>

        {/* Core Components Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {coreComponentsData.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-pink-500/15 flex items-center justify-center mb-4">
                  <item.icon className="text-pink-300 w-5 h-5" />
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

        {/* Digital Transformation Header */}
        <motion.div
          id="digital"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-6xl mx-auto text-center mt-20 sm:mt-28"
        >
          <SectionLabel>
            <Globe className="w-3.5 h-3.5 text-pink-300" />
            Digital Innovation
          </SectionLabel>

          <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Digital Transformation for Social Good
          </h3>

          <p className="text-white/60 mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Technology enables NGOs to scale impact, improve transparency, and optimize resources.
          </p>
        </motion.div>

        {/* Digital Transformation Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {digitalData.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-pink-500/15 flex items-center justify-center mb-4">
                  <item.icon className="text-pink-300 w-5 h-5" />
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
      </section>

      {/* ─── STATS COUNTER SECTION ─────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0515] via-[#1a0a2a] to-[#05060A]" />
        <GlowOrb className="top-1/2 left-1/2 w-[700px] h-[700px] bg-pink-500/10 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <SectionLabel>
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            Impact by the Numbers
          </SectionLabel>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Social Impact Delivered at Scale
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
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-fuchsia-400 to-purple-400">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060A] via-[#1a0a2a] to-[#05060A]" />
        <GlowOrb className="top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/12 -translate-x-1/2 -translate-y-1/2" />
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
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              Get Started
            </SectionLabel>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Empower NGO Impact with{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-400">
                Structured Digital Systems
              </span>
            </h2>

            <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              Whether you're managing donor programs, field operations, or large-scale
              humanitarian initiatives, we help NGOs implement structured systems that
              improve transparency, coordination, and measurable impact delivery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-training"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-black font-semibold hover:shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Contact NGO Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#digital"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Explore Digital Systems
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-white/40 text-xs mt-8">
              Trusted for nonprofit digital transformation, donor systems & field operations
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Ngos;