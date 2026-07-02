import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Landmark,
  Globe2,
  HeartPulse,
  Users,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";

import HeroImage from "../../assets/Industries/Industries.jpg";

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
    className={`relative overflow-hidden rounded-[28px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      ${
        hover
          ? "transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(56,189,248,0.12)]"
          : ""
      } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
    {children}
  </Tag>
);

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "We help financial institutions modernize governance, strengthen compliance, and improve project delivery efficiency.",
    icon: Landmark,
    link: "/who-we-serve/banking-and-finance",
    gradient: "from-sky-300 to-blue-400",
  },
  {
    title: "Telecommunications",
    description:
      "Supporting telcos with agile transformation, infrastructure delivery, and enterprise-scale project execution.",
    icon: Globe2,
    link: "/who-we-serve/telecommunications",
    gradient: "from-blue-300 to-indigo-400",
  },
  {
    title: "Government & Public Sector",
    description:
      "Enabling digital transformation, policy-driven delivery, and PMO maturity across public institutions.",
    icon: Building2,
    link: "/who-we-serve/government",
    gradient: "from-indigo-300 to-slate-400",
  },
  {
    title: "NGOs & Development",
    description:
      "Helping NGOs improve accountability, funding efficiency, and impact-driven program delivery.",
    icon: Users,
    link: "/who-we-serve/ngos",
    gradient: "from-cyan-300 to-sky-400",
  },
  {
    title: "Healthcare",
    description:
      "Improving healthcare systems through structured project governance and digital transformation delivery.",
    icon: HeartPulse,
    link: "/who-we-serve/healthcare",
    gradient: "from-sky-300 to-teal-400",
  },
];

const heroStats = [
  { value: "5", label: "Key Sectors" },
  { value: "PMI®", label: "Premier ATP" },
  { value: "Global", label: "Standards" },
  { value: "Enterprise", label: "Scale" },
];

const trustPoints = [
  "Governance maturity across regulated industries",
  "Enterprise-scale transformation delivery",
  "PMO and portfolio excellence frameworks",
  "Agile and adaptive delivery capability",
];

const WhoWeServe = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>
          Industries We Serve | Skylartech Project Management & Project
          Consulting
        </title>
        <meta
          name="description"
          content="Skylartech partners with banking, telecom, government, NGOs, and healthcare organizations to improve governance, strengthen project delivery, and drive digital transformation success."
        />
        <meta
          name="keywords"
          content="project management consulting, industries we serve, banking transformation, telecom PMO, government digital transformation, NGO project delivery, healthcare IT consulting, Skylartech"
        />
        <meta property="og:title" content="Industries We Serve | Skylartech" />
        <meta
          property="og:description"
          content="We help organizations across key industries achieve project excellence, governance maturity, and successful transformation delivery."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://skylartech.co.ke/who-we-serve"
        />
        <link rel="canonical" href="https://skylartech.co.ke/who-we-serve" />
      </Helmet>
      <div className="relative overflow-hidden text-white bg-gradient-to-b from-[#050b1e] via-[#07142b] to-[#050b1e]">
        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${HeroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050b1e]/80 to-[#07142b]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

          <GlowOrb className="top-0 left-1/2 w-[550px] h-[550px] bg-blue-500/15 -translate-x-1/2 -translate-y-1/2" />
          <GlowOrb className="bottom-0 right-0 w-[480px] h-[480px] bg-sky-500/10 translate-x-1/3 translate-y-1/3" />
          <GlowOrb className="top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/10 -translate-x-1/2 -translate-y-1/2" />
          <GridOverlay />

          <div className="relative z-10 min-h-[100svh] flex items-center pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <SectionLabel>
                  <Globe2 className="w-3.5 h-3.5 text-sky-300" />
                  Industries We Empower
                </SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight"
              >
                We Help Organizations Deliver
                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                  Project Excellence at Scale
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="mt-8 text-white/65 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
              >
                From financial institutions to public sector organizations, we
                partner with teams to strengthen governance, improve delivery
                capability, and drive successful transformation programs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Talk to an Expert
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
                    className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 hover:bg-white/[0.08] hover:border-sky-400/20 transition-all duration-300"
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

        {/* INDUSTRIES GRID */}
        <section className="relative py-24 md:py-28 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050b1e] via-[#07142b] to-[#040a18]" />
          <GlowOrb className="top-0 right-0 w-[450px] h-[450px] bg-blue-500/10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_55%)]" />
          <GridOverlay />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-14 md:mb-16"
            >
              <SectionLabel>
                <Building2 className="w-3.5 h-3.5 text-sky-300" />
                Industries We Work With
              </SectionLabel>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Specialized Support Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                  Critical Sectors
                </span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-white/55 text-base leading-relaxed">
                We partner with organizations across regulated and high-impact
                industries to improve governance maturity, project delivery
                performance, and digital transformation success.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {industries.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={
                      item.title === "Healthcare"
                        ? "sm:col-span-2 lg:col-span-1"
                        : ""
                    }
                  >
                    <GlassCard
                      as={Link}
                      to={item.link}
                      className="group flex flex-col justify-between min-h-[240px] p-6 sm:p-7 md:p-8 h-full"
                    >
                      <div>
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110`}
                        >
                          <Icon className="w-6 h-6 text-black" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold leading-snug text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-white/55 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sky-300 text-sm font-medium group-hover:gap-3 transition-all">
                        Explore Sector
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* TRUST POINTS */}
        <section className="relative py-20 md:py-24 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#040a18] via-[#061020] to-[#050b1e]" />
          <GlowOrb className="bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/10 -translate-x-1/3 translate-y-1/3" />
          <GridOverlay />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <SectionLabel>
                <Award className="w-3.5 h-3.5 text-sky-300" />
                Sector Expertise
              </SectionLabel>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
                Trusted Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                  High-Impact Industries
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-5"
            >
              {trustPoints.map((point) => (
                <motion.div key={point} variants={fadeUp}>
                  <GlassCard className="flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center">
                      <CheckCircle2 className="text-sky-300 w-5 h-5" />
                    </div>
                    <p className="text-white/70 leading-relaxed pt-1.5">
                      {point}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 sm:py-24 md:py-28 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050b1e] via-[#07142b] to-[#040a18]" />
          <GlowOrb className="top-1/2 left-1/2 w-[550px] h-[550px] bg-blue-500/10 -translate-x-1/2 -translate-y-1/2" />
          <GridOverlay />

          <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <GlassCard
                hover={false}
                className="p-8 sm:p-12 md:p-16 text-center"
              >
                <SectionLabel>
                  <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                  Get Started
                </SectionLabel>

                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Ready to Transform Your{" "}
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                    Organization?
                  </span>
                </h2>

                <p className="mt-6 text-white/65 leading-relaxed max-w-2xl mx-auto">
                  Let's build stronger governance, better delivery, and
                  sustainable transformation outcomes.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/book-training"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/offerings"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    View Our Offerings
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeServe;
