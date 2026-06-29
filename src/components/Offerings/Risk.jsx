import React from "react";
import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Target,
  Workflow,
  Layers,
  Users,
  Search,
  FileCheck,
  RefreshCw,
  ArrowRight,
  Sparkles,
  BarChart3,
  GitBranch,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Eye,
  Siren,
  ScrollText,
} from "lucide-react";

import RiskImg from "../../assets/Services image/Risk.jpg";

/* --- Reusable Premium Components --- */

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
    className={`inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-cyan-200/90 ${className}`}
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
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(34,211,238,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
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


/* --- Data --- */

const capabilities = [
  { icon: Shield, title: "Enterprise Risk Management Frameworks", text: "Design and deploy ERM structures that identify, assess, and monitor risks across all business units." },
  { icon: FileCheck, title: "Regulatory Compliance & Audit Readiness", text: "Ensure alignment with regulatory standards and maintain continuous audit-ready posture." },
  { icon: Building2, title: "Internal Controls & Governance Design", text: "Build robust internal control systems and governance frameworks that drive accountability." },
  { icon: Search, title: "Operational Risk Assessment & Mitigation", text: "Conduct comprehensive risk assessments and implement structured mitigation strategies." },
  { icon: ScrollText, title: "Policy Development & Assurance Systems", text: "Develop enterprise policies and assurance mechanisms for sustained compliance." },
  { icon: Eye, title: "Third-Party & Vendor Risk Management", text: "Assess and monitor vendor ecosystems to prevent supply chain and partner risk exposure." },
];

const frameworks = [
  { icon: Layers, title: "COSO Framework", text: "Integrated internal control and enterprise risk management aligned with COSO 2013 standards.", gradient: "from-cyan-400 to-teal-500" },
  { icon: Target, title: "ISO 31000", text: "Principles-based risk management framework for organizations of any size or sector.", gradient: "from-blue-400 to-cyan-500" },
  { icon: ShieldCheck, title: "ISO 27001 (ISMS)", text: "Information security management systems for protecting data assets and ensuring compliance.", gradient: "from-emerald-400 to-green-500" },
  { icon: Workflow, title: "Three Lines Model", text: "Governance structure clarifying roles across operational management, risk functions, and audit.", gradient: "from-amber-400 to-orange-500" },
  { icon: BarChart3, title: "Basel III / Solvency II", text: "Regulatory capital frameworks for financial institutions and insurance enterprises.", gradient: "from-indigo-400 to-purple-500" },
  { icon: Siren, title: "Business Continuity (ISO 22301)", text: "Build organizational resilience through structured business continuity and crisis management.", gradient: "from-red-400 to-rose-500" },
];

const benefits = [
  { icon: TrendingUp, title: "Risk Visibility", text: "Identify, assess, and monitor risks across all business units with real-time dashboards." },
  { icon: ShieldCheck, title: "Risk Mitigation", text: "Reduce exposure through structured controls, response plans, and early warning systems." },
  { icon: Award, title: "Compliance Assurance", text: "Ensure continuous alignment with regulatory and industry standards." },
  { icon: Users, title: "Stakeholder Confidence", text: "Build trust through transparent governance and demonstrable control effectiveness." },
  { icon: Star, title: "Decision Intelligence", text: "Enable confident strategic decisions with accurate risk data and scenario analysis." },
  { icon: RefreshCw, title: "Operational Resilience", text: "Strengthen organizational capacity to anticipate, respond, and adapt to disruptions." },
];

const processSteps = [
  { step: "01", title: "Assess & Identify", text: "Map the risk landscape across strategic, operational, financial, and compliance domains." },
  { step: "02", title: "Analyze & Prioritize", text: "Evaluate likelihood, impact, and velocity to prioritize risks based on organizational appetite." },
  { step: "03", title: "Design Controls", text: "Develop preventive, detective, and responsive controls aligned with regulatory requirements." },
  { step: "04", title: "Implement & Embed", text: "Integrate risk management practices into daily operations and decision-making processes." },
  { step: "05", title: "Monitor & Report", text: "Establish continuous monitoring, assurance reporting, and adaptive risk response mechanisms." },
];


/* --- Component --- */

const Risk = () => {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-[#050A14] via-[#0B1220] to-[#020617]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/8 blur-[180px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-cyan-600/6 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[160px] rounded-full" />
        <GridOverlay />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${RiskImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/95 via-[#050A14]/80 to-[#050A14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />
        <GlowOrb className="top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100svh-140px)]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1 mt-8 lg:mt-0"
            >
              <SectionLabel>
                <Shield size={14} />
                Risk, Compliance & Assurance
              </SectionLabel>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Strengthen Governance with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 inline-flex whitespace-nowrap min-w-[240px] sm:min-w-[300px] md:min-w-[360px]">
                  <Typewriter
                    words={[
                      "Risk Intelligence",
                      "Compliance Assurance",
                      "Control Frameworks",
                      "Audit Readiness",
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
              <div className="mt-8 grid gap-3">
                {[
                  "Enterprise Risk Management Frameworks",
                  "Regulatory Compliance & Audit Readiness",
                  "Internal Controls & Governance Design",
                  "Operational Risk Assessment & Mitigation",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="bg-cyan-500/15 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-cyan-300" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Strengthen Governance
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings/professional-training-and-certification"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  View Certifications
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="order-1 lg:order-2 hidden lg:flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-md aspect-square"
              >
                <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-400/15" />
                <GlassCard hover={false} className="p-8 text-center relative z-10 mt-16">
                  <Shield className="mx-auto text-cyan-300" size={52} />
                  <h3 className="mt-4 text-lg font-bold">Integrated Governance</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Unified risk, compliance, and assurance framework designed for enterprise resilience.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-cyan-300 text-xl font-bold">100+</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Frameworks</p>
                    </div>
                    <div>
                      <p className="text-cyan-300 text-xl font-bold">99%</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Compliance</p>
                    </div>
                    <div>
                      <p className="text-cyan-300 text-xl font-bold">24/7</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Monitoring</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-white/5">
        <GlowOrb className="top-1/3 -left-60 w-[600px] h-[600px] bg-cyan-500/6" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <SectionLabel className="mx-auto"><Sparkles className="w-3.5 h-3.5 text-cyan-300" /> What We Deliver</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">Enterprise Risk, Compliance & Assurance</h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              We help organizations build resilient risk management systems,
              strengthen compliance structures, and ensure continuous audit readiness
              across all operational layers.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14 lg:mt-16">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                      <Icon className="text-cyan-300" size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-transparent" />
        <GlowOrb className="-bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/6" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <SectionLabel className="mx-auto"><GitBranch size={14} /> Our Approach</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">Risk Management Lifecycle</h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">A structured, end-to-end methodology for building enterprise resilience.</p>
          </motion.div>
          <div className="mt-14 lg:mt-16 relative">
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center lg:text-left">
                  <GlassCard className="p-5 sm:p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                      <span className="text-cyan-300 text-sm font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FRAMEWORKS & STANDARDS ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-white/5">
        <GlowOrb className="top-1/2 -left-60 w-[550px] h-[550px] bg-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <SectionLabel className="mx-auto"><Star className="w-3.5 h-3.5 text-cyan-300" /> Frameworks & Standards</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">Globally Recognized Standards</h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">We align your governance architecture with the world's most respected risk and compliance frameworks.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14 lg:mt-16">
            {frameworks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 text-center">
            <Link to="/book-training" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              Explore All Standards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY RISK & COMPLIANCE ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/8 to-transparent" />
        <GlowOrb className="-bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/6" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <SectionLabel className="mx-auto"><Award className="w-3.5 h-3.5 text-cyan-300" /> Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">Why Risk & Compliance Matters</h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">Strong governance reduces uncertainty, protects value, and improves decision-making.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-14 lg:mt-16">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="p-6 sm:p-7 h-full text-center lg:text-left">
                    <Icon className="text-cyan-300 mb-4 mx-auto lg:mx-0" size={24} />
                    <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative max-w-5xl mx-auto">
          <GlassCard hover={false} className="p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <SectionLabel className="mx-auto"><Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Risk &bull; Compliance &bull; Assurance</SectionLabel>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                Governance isn&rsquo;t optional &mdash;
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">it&rsquo;s your competitive edge.</span>
              </h2>
              <p className="text-cyan-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Strengthen enterprise risk visibility, compliance assurance, and control frameworks that protect value and enable confident decision-making.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto my-8 sm:my-10" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/book-training" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                  Strengthen Governance <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/offerings/professional-training-and-certification" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <BookOpen className="w-4 h-4" /> View Certifications
                </Link>
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/35 tracking-wide">Enterprise-grade governance &bull; Audit-ready systems &bull; Continuous assurance models</p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Risk;

