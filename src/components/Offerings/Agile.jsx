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
  ArrowRight,
  Target,
  Zap,
  Sparkles,
  BarChart3,
  Repeat,
  LayoutDashboard,
  Rocket,
  Star,
  Award,
  TrendingUp,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

import AgileIMG from "../../assets/Services image/Agile.jpg";

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
    className={`inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-emerald-200/90 ${className}`}
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
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(16,185,129,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
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
  { icon: Workflow, title: "Iterative Product Development", text: "MVP-driven sprints for faster validation and continuous delivery." },
  { icon: Layers, title: "Adaptive Transformation", text: "Shift from waterfall to agile operating models seamlessly." },
  { icon: Users, title: "Agile Coaching & Enablement", text: "Empower self-organizing teams with expert coaching." },
  { icon: RefreshCw, title: "Scaled Agile Execution", text: "Align multiple teams at scale with SAFe and LeSS." },
  { icon: LayoutDashboard, title: "Kanban & Flow Optimization", text: "Visualize work, limit WIP, and optimize delivery flow." },
  { icon: Target, title: "Agile Maturity Assessment", text: "Benchmark capabilities and chart a data-driven improvement roadmap." },
];

const frameworks = [
  { icon: Repeat, title: "Scrum", text: "Sprint-based delivery with defined roles, events, and artifacts for cross-functional teams.", gradient: "from-emerald-400 to-green-500" },
  { icon: LayoutDashboard, title: "Kanban", text: "Visual workflow management with continuous delivery and flow-based pull systems.", gradient: "from-cyan-400 to-teal-500" },
  { icon: Zap, title: "Lean", text: "Eliminate waste, amplify learning, and deliver value faster through lean principles.", gradient: "from-lime-400 to-emerald-500" },
  { icon: Star, title: "XP (Extreme Programming)", text: "Engineering excellence through TDD, pair programming, and continuous integration.", gradient: "from-amber-400 to-yellow-500" },
  { icon: Layers, title: "SAFe\u00ae", text: "Scale agile across the enterprise with SAFe\u2019s proven framework for large organizations.", gradient: "from-blue-400 to-indigo-500" },
];

const benefits = [
  { icon: TrendingUp, title: "Faster Time-to-Market", text: "Deliver value in weeks, not months with iterative planning and rapid prototyping." },
  { icon: ShieldCheck, title: "Reduced Risk", text: "Early and continuous feedback loops minimize costly late-stage surprises." },
  { icon: Users, title: "Higher Team Engagement", text: "Empowered, self-organizing teams that take ownership and innovate." },
  { icon: Award, title: "Customer-Centric Outcomes", text: "Continuous stakeholder collaboration ensures delivered value aligns with real needs." },
  { icon: BarChart3, title: "Measurable Predictability", text: "Velocity metrics, burn-down charts, and flow analytics for data-driven decisions." },
  { icon: Rocket, title: "Sustainable Innovation", text: "Create a culture of experimentation and continuous improvement that drives long-term growth." },
];

const processSteps = [
  { step: "01", title: "Assess & Align", text: "Evaluate current delivery maturity, identify bottlenecks, and define strategic agile goals." },
  { step: "02", title: "Design the Model", text: "Select the right frameworks \u2014 Scrum, Kanban, Lean, or hybrid \u2014 tailored to your context." },
  { step: "03", title: "Enable Teams", text: "Upskill teams through coaching, training, and hands-on agile capability building." },
  { step: "04", title: "Launch & Iterate", text: "Execute in iterative cycles with continuous inspection, adaptation, and delivery." },
  { step: "05", title: "Scale & Sustain", text: "Expand agile practices across portfolios while embedding a culture of continuous improvement." },
];

/* ─── Component ─── */

const Agile = () => {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-[#060607] via-[#070D0A] to-[#060607]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/8 blur-[180px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-teal-600/6 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 blur-[160px] rounded-full" />
        <GridOverlay />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${AgileIMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060607]/95 via-[#060607]/80 to-[#060607]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent" />

        <GlowOrb className="top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10" />

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
                <GitBranch size={14} />
                Agile & Adaptive Delivery
              </SectionLabel>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Elevate Execution with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-lime-400 inline-flex whitespace-nowrap min-w-[240px] sm:min-w-[300px] md:min-w-[360px]">
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
                  <span className="ml-1">
                    <Cursor cursorStyle="|" />
                  </span>
                </span>
              </h1>

              {/* Hero Features */}
              <div className="mt-8 grid gap-3">
                {[
                  "Iterative Product Delivery & MVP Execution",
                  "Adaptive Transformation to Agile Operating Models",
                  "Agile Coaching, Scrum & Kanban Enablement",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="bg-emerald-500/15 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-emerald-300" />
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
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
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
                  <SectionLabel className="mb-4">Why Agile</SectionLabel>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Speed, Adaptability,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
                      & Continuous Value
                    </span>
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    Move beyond rigid planning cycles with Agile, Scrum, Kanban,
                    Lean, and continuous feedback-driven execution models.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Continuous Value Delivery",
                      "Iterative & Incremental Execution",
                      "Customer-Centric Feedback Loops",
                      "Cross-Functional Collaboration",
                      "Rapid Adaptation to Change",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/5 hover:bg-white/[0.05] hover:border-emerald-400/15 transition-all duration-300"
                      >
                        <div className="bg-emerald-500/15 p-1.5 rounded-lg flex-shrink-0">
                          <CheckCircle2 size={14} className="text-emerald-300" />
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
  <GlowOrb className="-top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/8" />

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
        Agile Delivery Excellence{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-lime-400">
          That Scales
        </span>
      </h2>
      <p className="text-emerald-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
        End-to-end agile capabilities designed for speed, quality, and
        continuous value delivery.
      </p>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-8" />
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
              <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/10 p-3 rounded-xl border border-emerald-300/15 w-fit mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
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

{/* ================= AGILE FRAMEWORKS ================= */}
<section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#050A07] via-[#0B1410] to-[#020617]" />
  <GlowOrb className="top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/8" />

  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto"
    >
      <SectionLabel>Frameworks & Practices</SectionLabel>
      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
        The Right Framework for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-lime-400">
          Every Context
        </span>
      </h2>
      <p className="text-emerald-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
        We select and blend the most effective agile frameworks to match
        your team size, complexity, and business goals.
      </p>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-8" />
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
    >
      {frameworks.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div key={i} variants={fadeUp}>
            <GlassCard className="p-6 text-center h-full">
              <div className={`bg-gradient-to-br ${item.gradient} bg-opacity-10 p-3 rounded-xl w-fit mx-auto mb-4`}>
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

    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-10 text-center text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto"
    >
      We also support hybrid models, LeSS, Nexus, and custom frameworks
      tailored to your specific organizational context.
    </motion.p>
  </div>
</section>

{/* ================= BENEFITS ================= */}
<section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5">
  <GlowOrb className="top-0 left-0 w-[500px] h-[500px] bg-emerald-500/8" />

  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto"
    >
      <SectionLabel>Why Agile Delivery</SectionLabel>
      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
        Outcomes That{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-lime-400">
          Speak for Themselves
        </span>
      </h2>
      <p className="text-emerald-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
        Organizations that embrace agile delivery see measurable
        improvements across the board.
      </p>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-8" />
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
              <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/10 p-3 rounded-xl border border-emerald-300/15 w-fit mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
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
  <div className="absolute inset-0 bg-gradient-to-br from-[#050A07] via-[#0B1410] to-[#020617]" />
  <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/8" />

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
        Proven Process for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-lime-400">
          Lasting Change
        </span>
      </h2>
      <p className="text-emerald-50/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
        Our structured approach ensures agile transformation that sticks.
      </p>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-8" />
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
            <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
          )}
          <GlassCard className="p-5 sm:p-6 text-center h-full">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-300/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
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
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_60%)]" />
  <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="relative max-w-5xl mx-auto"
  >
    <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="relative z-10">
        <SectionLabel>
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          Agile Transformation
        </SectionLabel>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
          Delivery should never slow you down —
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-400">
            it should accelerate you.
          </span>
        </h2>

        <p className="text-emerald-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Build adaptive delivery systems using Agile, Scrum, Kanban, and
          Lean practices that continuously deliver customer value.
        </p>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto my-8 sm:my-10" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/book-training"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start Transformation
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
          Continuous delivery • Fast feedback loops • Scalable Agile systems
        </p>
      </div>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default Agile;
