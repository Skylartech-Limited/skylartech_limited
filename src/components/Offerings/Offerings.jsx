import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Workflow,
  BarChart3,
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

import HeroImage from "../../assets/Services image/Offerings.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80">
    {children}
  </div>
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
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

const offerings = [
  {
    title: "Professional Training & Certification",
    icon: GraduationCap,
    link: "/offerings/professional-training-and-certification",
    description:
      "Globally recognized certification programs designed to build leadership and project management excellence.",
    gradient: "from-emerald-300 to-teal-400",
  },
  {
    title: "Consulting & Organizational Transformation",
    icon: Briefcase,
    link: "/offerings/consulting-and-organizational-transformation",
    description:
      "Strategic consulting that enables transformation, operational efficiency, and sustainable growth.",
    gradient: "from-green-300 to-emerald-400",
  },
  {
    title: "Portfolio, PMO & Governance Excellence",
    icon: Building2,
    link: "/offerings/portfolio-pmo-and-governance-excellence",
    description:
      "Enterprise governance and PMO frameworks that maximize value delivery and strategic alignment.",
    gradient: "from-teal-300 to-cyan-400",
  },
  {
    title: "Agile & Adaptive Delivery Excellence",
    icon: Workflow,
    link: "/offerings/agile-and-adaptive-delivery-excellence",
    description:
      "Agile transformation and adaptive delivery approaches that improve speed and business agility.",
    gradient: "from-lime-300 to-green-400",
  },
  {
    title: "Risk, Compliance & Assurance",
    icon: ShieldCheck,
    link: "/offerings/risk-compliance-and-assurance",
    description:
      "Structured risk and compliance frameworks that strengthen organizational resilience.",
    gradient: "from-emerald-300 to-green-500",
  },
  {
    title: "Business Analysis & Requirements Engineering",
    icon: BarChart3,
    link: "/offerings/business-analysis-and-requirements-gathering",
    description:
      "Transform business needs into clear requirements that drive successful delivery outcomes.",
    gradient: "from-green-300 to-lime-400",
  },
];

const whyChooseItems = [
  "Globally recognized certification pathways",
  "Experienced transformation consultants",
  "Industry-focused delivery expertise",
  "Agile & adaptive delivery frameworks",
  "Strong governance & compliance models",
  "Proven enterprise transformation results",
];

const heroStats = [
  { value: "6", label: "Core Offerings" },
  { value: "PMI®", label: "Premier ATP" },
  { value: "Global", label: "Standards" },
  { value: "Enterprise", label: "Scale" },
];

const Offerings = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#040b08] via-[#071a12] to-black text-white">
      <Helmet>
        <title>Our Offerings | Skylartech Limited</title>
        <meta
          name="description"
          content="Skylartech offers professional training, consulting, governance frameworks, and transformation services to help organizations achieve project excellence at scale."
        />
        <meta
          name="keywords"
          content="project management training, PMO consulting, agile transformation, governance frameworks, enterprise consulting, Skylartech"
        />
        <link rel="canonical" href="https://skylartech.co.ke/offerings" />
        <meta
          property="og:title"
          content="Our Offerings | Skylartech Limited"
        />
        <meta
          property="og:description"
          content="Training, consulting, governance frameworks, and transformation services for enterprise project excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skylartech.co.ke/offerings" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#04130e]/80 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        <GlowOrb className="top-0 left-0 w-[550px] h-[550px] bg-emerald-500/12 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="top-1/3 right-0 w-[480px] h-[480px] bg-green-500/10 translate-x-1/3" />
        <GlowOrb className="bottom-0 left-1/2 w-[650px] h-[650px] bg-lime-500/8 -translate-x-1/2 translate-y-1/3" />
        <GridOverlay />

        <div className="relative z-10 min-h-[100svh] flex items-center pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionLabel>
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                Enterprise Project Management Solutions
              </SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              Building World-Class
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400">
                Project Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="mt-8 max-w-3xl mx-auto text-white/65 text-base md:text-lg leading-relaxed"
            >
              We empower organizations with training, consulting, governance
              frameworks, and transformation expertise to deliver successful
              projects at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/book-training"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Book Training
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 hover:bg-white/[0.08] hover:border-emerald-400/20 transition-all duration-300"
                >
                  <p className="text-lg font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO + OFFERINGS */}
      <section className="py-24 md:py-28 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040b08] via-[#071a12] to-[#030806]" />
        <GlowOrb className="-top-40 left-1/2 w-[550px] h-[550px] bg-emerald-500/10 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_55%)]" />
        <GridOverlay />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          >
            <SectionLabel>
              <Building2 className="w-3.5 h-3.5 text-emerald-300" />
              Built For Modern Organizations
            </SectionLabel>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              Strategic Solutions For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400">
                Lasting Impact
              </span>
            </h2>

            <p className="mt-6 text-white/65 leading-relaxed text-base md:text-lg">
              Modern organizations require strategic leadership, governance
              maturity, and adaptive delivery capabilities. Our solutions are
              designed to build long-term project management excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10 md:mb-14"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-400">
                Offerings
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {offerings.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} variants={fadeUp}>
                  <GlassCard
                    as={Link}
                    to={item.link}
                    className="group flex flex-col justify-between min-h-[260px] p-6 sm:p-7 md:p-8 h-full"
                  >
                    <div>
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6 text-black" />
                      </div>

                      <h4 className="text-lg sm:text-xl font-semibold leading-snug text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-white/55 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 text-emerald-300 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      Explore Offering
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030806] via-[#051510] to-black" />
        <GlowOrb className="bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/8 translate-x-1/3 translate-y-1/3" />
        <GridOverlay />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <SectionLabel>
              <Award className="w-3.5 h-3.5 text-emerald-300" />
              Why Skylartech
            </SectionLabel>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              Why Organizations Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-400">
                Skylartech
              </span>
            </h2>

            <p className="mt-6 text-white/55 max-w-2xl mx-auto leading-relaxed">
              We combine global best practices with deep industry expertise.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-14 grid md:grid-cols-2 gap-5 text-left"
          >
            {whyChooseItems.map((item) => (
              <motion.div key={item} variants={fadeUp}>
                <GlassCard className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-300 w-5 h-5" />
                  </div>
                  <p className="text-white/70 leading-relaxed pt-1.5">{item}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 md:py-28 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040b08] via-[#071a12] to-black" />
        <GlowOrb className="top-1/2 left-1/2 w-[550px] h-[550px] bg-emerald-500/10 -translate-x-1/2 -translate-y-1/2" />
        <GridOverlay />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <GlassCard
              hover={false}
              className="p-8 sm:p-12 md:p-16 lg:p-20 text-center"
            >
              <SectionLabel>
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                Get Started
              </SectionLabel>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Ready To Elevate{" "}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400">
                  Your Organization?
                </span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
                Partner with Skylartech to accelerate transformation and build
                long-term capability.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/offerings/professional-training-and-certification"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                >
                  View Certifications
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;
