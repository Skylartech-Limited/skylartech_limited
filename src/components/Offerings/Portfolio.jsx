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
  ArrowRight,
  Sparkles,
  BarChart3,
  RefreshCw,
  GitBranch,
  BookOpen,
  Star,
  LineChart,
  PieChart,
  Rocket,
} from "lucide-react";

import Portfolio from "../../assets/Services image/Portfolio.jpg";

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
    className={`inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-indigo-200/90 ${className}`}
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
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(99,102,241,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
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
    icon: Building2,
    title: "Enterprise PMO Setup",
    text: "Design and deploy governance-driven PMO structures that standardize execution.",
  },
  {
    icon: Workflow,
    title: "Process Transformation",
    text: "Modernize operating models and workflows for speed, efficiency, and scale.",
  },
  {
    icon: Users,
    title: "Organizational Change",
    text: "Enable enterprise-wide adoption through structured change management.",
  },
  {
    icon: Target,
    title: "Strategic Portfolio Mgmt",
    text: "Align project portfolios with strategic business objectives and KPIs.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    text: "Implement metrics-driven frameworks to measure and improve delivery.",
  },
  {
    icon: Shield,
    title: "Risk & Governance",
    text: "Strengthen enterprise risk visibility and decision-making controls.",
  },
];

const approaches = [
  {
    icon: Layers,
    title: "PMI-Aligned Framework",
    text: "Leverage PMBOK® standards and proven best practices for structured portfolio governance.",
    gradient: "from-indigo-400 to-blue-500",
  },
  {
    icon: GitBranch,
    title: "Strategy-to-Execution",
    text: "Connect high-level vision with measurable OKRs, resource allocation, and delivery milestones.",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    text: "Embed maturity assessments and iterative improvements across your portfolio lifecycle.",
    gradient: "from-blue-400 to-cyan-500",
  },
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
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    text: "Make informed decisions with real-time portfolio analytics and dashboards.",
  },
  {
    icon: PieChart,
    title: "Resource Optimization",
    text: "Allocate talent and capital where they deliver the highest strategic impact.",
  },
  {
    icon: Rocket,
    title: "Accelerated Delivery",
    text: "Reduce time-to-value through streamlined governance and execution frameworks.",
  },
];

const PortfolioGovernance = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-950 via-indigo-950 to-black">
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
        style={{
          backgroundImage: `url(${Portfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-indigo-950/70 to-transparent" />
        <GlowOrb className="-top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/15" />
        <GlowOrb className="-bottom-20 right-0 w-[400px] h-[400px] bg-purple-500/10" />
        <GridOverlay />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="
                w-full max-w-2xl
                bg-white/[0.04] backdrop-blur-2xl
                border border-white/10
                text-white
                p-6 sm:p-8 md:p-10 lg:p-12
                rounded-[28px]
                shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                min-h-[440px]
                flex flex-col justify-center
                relative overflow-hidden
              "
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
              <div className="w-full flex justify-center mb-5 sm:mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-indigo-200/90">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-300" />
                  Portfolio, PMO & Governance Excellence
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[120px] sm:min-h-[140px]">
                Elevate Execution with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-400">
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

              <p className="mt-4 sm:mt-5 md:mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                Bridging the gap between strategy and execution. We build PMOs,
                optimize project portfolios, and establish governance
                frameworks that drive sustainable growth.
              </p>

              <div className="mt-5 sm:mt-6 md:mt-8 grid gap-3">
                {[
                  "Portfolio Management & Optimization",
                  "PMO Design & Implementation",
                  "Governance Framework Development",
                  "Strategy Execution Alignment",
                  "Maturity Model Assessments",
                ].map((item, i) => (
                  <div key={i} className="flex items-start sm:items-center gap-3">
                    <CheckCircle size={18} className="text-indigo-300 shrink-0" />
                    <span className="text-gray-200 text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-indigo-400 to-blue-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Start Transformation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings/professional-training-and-certification"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" /> View Certifications
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO & GOVERNANCE ================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-black" />
        <GlowOrb className="top-40 left-0 w-[500px] h-[500px] bg-indigo-500/10" />
        <GlowOrb className="bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10" />
        <GridOverlay />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="mb-5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              Our Approach
            </SectionLabel>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Strategic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">
                Execution
              </span>
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
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlassCard className="p-6 sm:p-8">
              <Layers className="text-indigo-300 mb-5" size={34} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                PMI-Aligned Governance Model
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A structured approach built on globally recognized PMI® frameworks to
                improve delivery maturity, control, and performance.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* ================= BENEFITS ================= */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mt-20 sm:mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <SectionLabel className="mb-5">
              <Star className="w-3.5 h-3.5 text-indigo-300" />
              Why It Matters
            </SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Why Portfolio & Governance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">
                Excellence Matters
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              Structured governance ensures organizations invest in the right work,
              execute effectively, and deliver measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 h-full">
                    <Icon className="text-indigo-300 mb-4" size={26} />
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
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

      {/* ================= CAPABILITIES ================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
        <GlowOrb className="top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <SectionLabel className="mb-5">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-300" />
              Core Capabilities
            </SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">
                Deliver
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              End-to-end portfolio, PMO and governance services that align execution with enterprise strategy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-400/20">
                        <Icon className="text-indigo-300" size={22} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
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

      {/* ================= APPROACH / METHODOLOGY ================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-black" />
        <GlowOrb className="top-0 right-0 w-[450px] h-[450px] bg-purple-500/10" />
        <GridOverlay />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <SectionLabel className="mb-5">
              <GitBranch className="w-3.5 h-3.5 text-indigo-300" />
              How We Deliver
            </SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">Methodology</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              Proven frameworks adapted to your unique enterprise context for predictable, high-impact outcomes.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {approaches.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-8 text-center h-full">
                    <div className={"mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br " + item.gradient + " bg-opacity-20 flex items-center justify-center mb-5 shadow-lg"}>
                      <Icon className="text-white" size={26} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PREMIUM PORTFOLIO CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_60%)]" />
        <GlowOrb className="-top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-500/10" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative max-w-5xl mx-auto">
          <GlassCard hover={false} className="p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <SectionLabel>
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                Portfolio &bull; PMO &bull; Governance Excellence
              </SectionLabel>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                Strategy without execution is just vision &mdash;
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-400">
                  let&rsquo;s fix that.
                </span>
              </h2>
              <p className="text-indigo-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Build high-performing PMO structures, align portfolios to strategy, and enable governance systems that deliver measurable business outcomes.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent mx-auto my-8 sm:my-10" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/book-training" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-indigo-400 to-blue-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                  Start Transformation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/offerings/professional-training-and-certification" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <BookOpen className="w-4 h-4" /> View Certifications
                </Link>
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/35 tracking-wide">
                Strategy-led transformation &bull; Governance-driven PMO &bull; Measurable enterprise outcomes
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioGovernance;
