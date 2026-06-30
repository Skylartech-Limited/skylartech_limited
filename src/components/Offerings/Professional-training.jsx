import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Globe,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Target,
  RefreshCw,
  GraduationCap,
} from "lucide-react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import Certified from "../../assets/Services image/Certified.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const certifications = [
  {
    group: "Core Certifications",
    items: [
      {
        name: "CAPM®",
        link: "/certifications/capm",
        description:
          "Build foundational project management knowledge and prepare for entry-level project leadership roles.",
      },
      {
        name: "PMP®",
        link: "/certifications/pmp",
        description:
          "Advance your career with the world's leading certification for experienced project managers.",
      },
      {
        name: "PgMP®",
        link: "/certifications/pgmp",
        description:
          "Develop advanced capability in managing multiple strategic programs.",
      },
      {
        name: "PfMP®",
        link: "/certifications/pfmp",
        description:
          "Lead enterprise-wide portfolio governance and strategic execution.",
      },
    ],
  },
  {
    group: "Specialized Certifications",
    items: [
      {
        name: "PMI-ACP®",
        link: "/certifications/pmi-acp",
        description:
          "Master agile principles, Scrum, Kanban, Lean, and adaptive delivery approaches.",
      },
      {
        name: "PMI-RMP®",
        link: "/certifications/pmi-rmp",
        description:
          "Strengthen advanced project risk identification, analysis, and response capability.",
      },
      {
        name: "PMI-PBA®",
        link: "/certifications/pmi-pba",
        description:
          "Develop business analysis expertise and stakeholder requirements management skills.",
      },
      {
        name: "PMI-SP®",
        link: "/certifications/pmi-sp",
        description:
          "Enhance scheduling capability for complex project environments.",
      },
      {
        name: "PMI-CP™",
        link: "/certifications/pmi-cp",
        description:
          "Build specialized capability for construction project environments.",
      },
      {
        name: "PMI-PMOCP™",
        link: "/certifications/pmi-pmocp",
        description:
          "Develop modern PMO leadership and organizational transformation capability.",
      },
      {
        name: "PMI-CPMAI™",
        link: "/certifications/pmi-cpmai",
        description:
          "Learn how to manage AI-enabled project and organizational environments.",
      },
    ],
  },
  {
    group: "Sustainability Certifications",
    items: [
      {
        name: "GPM-b™",
        link: "/certifications/gpm-b",
        description:
          "Integrate sustainability practices into modern project delivery.",
      },
    ],
  },
];

const valuePillars = [
  {
    icon: ShieldCheck,
    title: "Credibility",
    text: "Validate your professional expertise with globally recognized standards backed by 30+ years of leadership.",
    span: "md:col-span-4",
  },
  {
    icon: Globe,
    title: "Transferability",
    text: "Works across industries, regions, and methodologies.",
    span: "md:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    text: "Improves career growth and salary potential.",
    span: "md:col-span-2",
  },
  {
    icon: RefreshCw,
    title: "Commitment",
    text: "Demonstrates lifelong learning and professional growth.",
    span: "md:col-span-4",
  },
  {
    icon: Target,
    title: "Relevance",
    text: "Built by practitioners and continuously updated to reflect real-world industry demands.",
    span: "md:col-span-6",
  },
];

const whyPmiFeatures = [
  {
    icon: Globe,
    title: "Global Recognition",
    text: "Trusted in 185+ countries as a global standard.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    text: "Improves salary potential and advancement opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Credibility",
    text: "Proves your expertise through rigorous certification standards.",
  },
  {
    icon: BookOpen,
    title: "Advanced Knowledge",
    text: "Built on PMBOK® and industry best practices.",
  },
  {
    icon: Award,
    title: "Competitive Advantage",
    text: "Helps you stand out in the global job market.",
  },
];

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
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
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-red-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(239,68,68,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
    {children}
  </Tag>
);

const SectionLabel = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-500/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-red-200/90 ${className}`}
  >
    {children}
  </div>
);

const ProfessionalTraining = () => {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-[#060607] via-[#0D0708] to-[#060607]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-500/8 blur-[180px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-rose-600/6 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[160px] rounded-full" />
        <GridOverlay />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Certified})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0D0708]/75 to-[#060607]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />

        {/* Reduced glow (only one kept) */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600/10 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
            {/* ================= LEFT CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative bg-[#1A0B0C]/70 border border-red-300/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent" />

                <div className="relative z-10">
                  <SectionLabel>
                    <GraduationCap className="w-3.5 h-3.5 text-red-300" />
                    PMI® Certification Excellence
                  </SectionLabel>

                  <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                    You.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300 to-red-400">
                      Certified.
                    </span>
                  </h1>

                  <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-red-100 min-h-[40px]">
                    <Typewriter
                      words={[
                        "Globally Recognized Credentials",
                        "Advance Your Career",
                        "Lead with Confidence",
                        "Master Project Excellence",
                      ]}
                      loop={0}
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={1500}
                    />
                    <span className="text-red-300">
                      <Cursor cursorStyle="|" />
                    </span>
                  </h2>

                  <p className="text-red-50/85 mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl leading-relaxed max-w-xl">
                    Demonstrate your expertise, strengthen your credibility, and
                    accelerate your career with globally recognized PMI®
                    certifications.
                  </p>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="#certifications-pathways"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Get Certified
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/offerings"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      Explore All Offerings
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="flex justify-center order-1 lg:order-2 mt-10 sm:mt-12 lg:mt-0"
            >
              <GlassCard hover={false} className="w-full max-w-md sm:max-w-lg p-6 sm:p-8">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <SectionLabel>Why It Matters</SectionLabel>

                  <h2 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    Why PMI Certification{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-rose-400">
                      Matters
                    </span>
                  </h2>

                  <p className="text-red-50/75 mt-3 text-sm sm:text-base leading-relaxed max-w-sm">
                    Globally recognized credentials that validate your skills
                    and accelerate your growth.
                  </p>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-5 space-y-2.5 w-full"
                  >
                    {whyPmiFeatures.slice(0, 3).map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        className="group flex items-start gap-3 text-left bg-white/[0.03] border border-white/6 rounded-2xl p-3 hover:bg-white/[0.05] hover:border-red-300/20 transition-all duration-300"
                      >
                        <div className="bg-gradient-to-br from-red-500/15 to-rose-500/10 p-2.5 rounded-xl border border-red-300/15 flex-shrink-0">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-red-100/55 text-xs sm:text-sm mt-1 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PMI CERTIFICATION ECOSYSTEM ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 border-t border-white/5">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/8 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionLabel>Global Standard</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              PMI certification works hard{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300 to-red-400">
                for you
              </span>
            </h2>
            <p className="text-red-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              PMI certification validates your knowledge, experience, and
              education to contribute to strategic and organizational success.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent mx-auto mt-8" />
          </motion.div>

          {/* VALUE GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6"
          >
            {valuePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`${pillar.span} group relative bg-[#13090A]/60 border border-red-400/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl text-center overflow-hidden hover:border-red-400/30 hover:-translate-y-1 transition-all duration-500 shadow-lg shadow-black/20`}
                >
                  <GlassCard className="p-6 sm:p-8 h-full text-center">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-red-500/10 border border-red-300/15 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                      <Icon className="w-5 h-5 text-red-300" />
                    </div>
                    <h3 className="text-red-200 font-semibold text-lg">
                      {pillar.title}
                    </h3>
                    <p className="text-red-50/70 mt-3 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                      {pillar.text}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CERTIFICATIONS PATHWAYS */}
          <div
            id="certifications-pathways"
            className="scroll-mt-28 mt-20 sm:mt-28"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center"
            >
              <SectionLabel>Structured Pathways</SectionLabel>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                Certifications{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-rose-400">
                  Pathways
                </span>
              </h2>
              <p className="text-red-100/60 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Structured global certifications across foundational,
                specialized, and sustainability pathways.
              </p>
            </motion.div>

            <div className="mt-14 space-y-20">
              {certifications.map((group, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-4 mb-10 w-full max-w-4xl">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-red-400/30" />
                    <h3 className="text-red-200 text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap">
                      {group.group}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-red-400/30" />
                  </div>

                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
                    {group.items.map((cert, idx) => (
                      <Link
                        key={idx}
                        to={cert.link || "#"}
                        className="w-full group/card"
                      >
                        <div className="relative h-full flex flex-col justify-between bg-[#13090A]/55 border border-red-400/10 rounded-3xl p-6 sm:p-7 text-center backdrop-blur-xl overflow-hidden hover:border-red-400/35 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 cursor-pointer">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/0 to-transparent group-hover/card:via-red-400/60 transition-all duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                          <div>
                            <h4 className="text-red-200 font-bold text-lg sm:text-xl group-hover/card:text-red-100 transition-colors">
                              {cert.name}
                            </h4>
                            <p className="text-white/55 mt-3 text-sm sm:text-base leading-relaxed">
                              {cert.description}
                            </p>
                          </div>

                          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-red-300/50 group-hover/card:text-red-300 transition-all duration-300">
                            View certification
                            <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.14),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-red-500/10 blur-[180px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-5xl mx-auto"
        >
          <GlassCard hover={false} className="p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/8 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <SectionLabel>PMI Certification Journey</SectionLabel>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                Your future isn't waiting —
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300 to-red-400">
                  it's being built.
                </span>
              </h2>

              <p className="text-red-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Become globally certified, unlock leadership opportunities, and
                position yourself among top-performing professionals worldwide.
              </p>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent mx-auto my-8 sm:my-10" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="#certifications-pathways"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Get Certified
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Explore All Offerings
                </Link>
              </div>

              <p className="mt-8 text-xs sm:text-sm text-white/35 tracking-wide">
                Trusted globally across 185+ countries · PMI® Standards Driven
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default ProfessionalTraining;
