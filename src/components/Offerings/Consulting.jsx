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
} from "lucide-react";

import Transform from "../../assets/Services image/Transform.jpg";

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
    className={`inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-amber-200/90 ${className}`}
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
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(245,158,11,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
    {children}
  </Tag>
);

const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
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
    text: "Leverage PMBOK\u00ae standards and proven best practices for structured consulting.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: GitBranch,
    title: "Agile Transformation",
    text: "Shift from traditional to agile operating models with coaching and enablement.",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    text: "Use analytics and benchmarking to guide strategy and measure outcomes.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    text: "Embed Kaizen and lean practices for ongoing operational excellence.",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    icon: Star,
    title: "Executive Advisory",
    text: "Partner with leadership to define vision, strategy, and transformation roadmaps.",
    gradient: "from-blue-400 to-indigo-500",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Strategic Alignment",
    text: "Align execution with enterprise-wide business goals for measurable impact.",
  },
  {
    icon: Workflow,
    title: "Process Transformation",
    text: "Modernize workflows for speed, efficiency, and scalability across teams.",
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    text: "Improve collaboration and communication across leadership and teams.",
  },
  {
    icon: Building2,
    title: "PMO Maturity",
    text: "Build governance-driven PMO structures that ensure delivery consistency.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    text: "Enable measurable delivery performance through data-driven frameworks.",
  },
  {
    icon: Shield,
    title: "Risk Governance",
    text: "Improve predictability and delivery control with robust risk frameworks.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Assess",
    text: "Evaluate current state, identify gaps, and define strategic transformation goals.",
  },
  {
    step: "02",
    title: "Design the Blueprint",
    text: "Architect operating models, governance structures, and execution frameworks.",
  },
  {
    step: "03",
    title: "Enable & Mobilize",
    text: "Upskill teams, establish PMO capabilities, and launch transformation initiatives.",
  },
  {
    step: "04",
    title: "Execute & Optimize",
    text: "Drive delivery with continuous monitoring, adaptation, and performance tuning.",
  },
  {
    step: "05",
    title: "Sustain & Scale",
    text: "Embed lasting capabilities and expand best practices across the enterprise.",
  },
];

/* ─── Component ─── */

const Consulting = () => {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-[#060607] via-[#0A0806] to-[#060607]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/8 blur-[180px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-orange-600/6 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 blur-[160px] rounded-full" />
        <GridOverlay />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${Transform})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060607]/95 via-[#060607]/80 to-[#060607]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent" />

        <GlowOrb className="top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100svh-140px)]">
            {/* LEFT — Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1 mt-8 lg:mt-0"
            >
              <SectionLabel>
                <Briefcase size={14} />
                Consulting & Transformation
              </SectionLabel>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Transform Organizations Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400 inline-flex whitespace-nowrap min-w-[180px] sm:min-w-[220px] md:min-w-[260px]">
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
                  <span className="ml-1">
                    <Cursor cursorStyle="|" />
                  </span>
                </span>
              </h1>

              {/* Hero Features */}
              <div className="mt-8 grid gap-3">
                {[
                  "Enterprise Project Governance",
                  "PMO Setup & Optimization",
                  "Organizational Change Enablement",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="bg-amber-500/15 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-amber-300" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dual CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Start Transformation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Explore All Offerings
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — Premium Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <GlassCard className="w-full max-w-md sm:max-w-lg p-6 sm:p-8">
                <div className="relative z-10">
                  <SectionLabel className="mb-4">Our Approach</SectionLabel>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Strategy-Led,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                      Execution-Driven
                    </span>
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    From operating models to portfolio management, we enable
                    measurable transformation outcomes across enterprise
                    systems.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "PMI-Aligned Consulting Framework",
                      "Enterprise Governance & PMO Design",
                      "Strategic Portfolio Management",
                      "Organizational Change Enablement",
                      "Performance Metrics & Dashboards",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/5 hover:bg-white/[0.05] hover:border-amber-400/15 transition-all duration-300"
                      >
                        <div className="bg-amber-500/15 p-1.5 rounded-lg flex-shrink-0">
                          <CheckCircle size={14} className="text-amber-300" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5">
        <GlowOrb className="-top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/8" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionLabel>Core Capabilities</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              Enterprise Consulting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
                Excellence
              </span>
            </h2>
            <p className="text-amber-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              End-to-end consulting capabilities for governance, transformation,
              and operational excellence.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-8" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full">
                    <div className="bg-gradient-to-br from-amber-500/15 to-orange-500/10 p-3 rounded-xl border border-amber-300/15 w-fit mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CONSULTING APPROACHES ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050706] via-[#0A0A07] to-[#020607]" />
        <GlowOrb className="top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/8" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              Proven Methodologies for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
                Real Results
              </span>
            </h2>
            <p className="text-amber-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              We combine industry frameworks with practical expertise to deliver
              lasting enterprise transformation.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-8" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {approaches.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 text-center h-full">
                    <div
                      className={`bg-gradient-to-br ${item.gradient} bg-opacity-10 p-3 rounded-xl w-fit mx-auto mb-4`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5">
        <GlowOrb className="top-0 left-0 w-[500px] h-[500px] bg-amber-500/8" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionLabel>Why Organizations Choose Us</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              Outcomes That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-amber-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Organizations that partner with us see measurable improvements in
              governance, delivery, and strategic alignment.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-8" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full flex flex-col items-start">
                    <div className="bg-gradient-to-br from-amber-500/15 to-orange-500/10 p-3 rounded-xl border border-amber-300/15 w-fit mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
                      {item.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= DELIVERY PROCESS ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050706] via-[#0A0A07] to-[#020607]" />
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/8" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionLabel>How We Deliver</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              Structured Process for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
                Lasting Transformation
              </span>
            </h2>
            <p className="text-amber-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Our proven consulting methodology ensures measurable outcomes at
              every stage.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-8" />
          </motion.div>
          <div className="mt-14 grid md:grid-cols-5 gap-4 sm:gap-6">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-400/40 to-transparent" />
                )}
                <GlassCard className="p-5 sm:p-6 text-center h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-300/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/8 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
            <div className="relative z-10">
              <SectionLabel>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Consulting
                Excellence
              </SectionLabel>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                High performance doesn’t happen by chance —
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                  it’s engineered.
                </span>
              </h2>
              <p className="text-amber-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Partner with expert consultants to modernize operations,
                strengthen governance, and accelerate enterprise transformation
                outcomes.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto my-8 sm:my-10" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Start Transformation{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings/professional-training-and-certification"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" /> View Certifications
                </Link>
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/35 tracking-wide">
                Strategy-led transformation • Governance-driven PMO • Measurable
                enterprise outcomes
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Consulting;
