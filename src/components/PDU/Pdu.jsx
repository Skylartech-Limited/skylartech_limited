import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock3,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Target,
  Users,
  BarChart3,
  Zap,
  Rocket,
  Layers,
  ChevronDown,
} from "lucide-react";

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/* ─── Reusable Primitives ─── */

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
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
  />
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
);

const Divider = () => (
  <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto" />
);

const hoverLift = (reduce) =>
  reduce ? {} : { y: -6, transition: { duration: 0.2 } };

/* ─── Data ─── */

const maintenanceRows = [
  { cert: "CAPM®", cycle: "5 years", pdu: "No PDUs (Re-exam required)" },
  { cert: "PMP®", cycle: "3 years", pdu: "60 PDUs" },
  { cert: "PgMP®", cycle: "3 years", pdu: "60 PDUs" },
  { cert: "PfMP®", cycle: "3 years", pdu: "60 PDUs (Portfolio focus)" },
  { cert: "PMI-ACP®", cycle: "3 years", pdu: "30 PDUs (Agile focus)" },
  { cert: "PMI-PBA®", cycle: "3 years", pdu: "60 PDUs (BA focus)" },
  { cert: "PMI-RMP®", cycle: "3 years", pdu: "30 PDUs (Risk focus)" },
  { cert: "PMI-SP®", cycle: "3 years", pdu: "30 PDUs (Scheduling focus)" },
];

const courses = [
  {
    course: "How to Measure Project Performance",
    wow: "3.0 hrs",
    power: "3.0 hrs",
    business: "1.0 hrs",
    total: "7.0 hrs",
  },
  {
    course: "Scrum Immersion for Agile PMs",
    wow: "5.0 hrs",
    power: "5.0 hrs",
    business: "5.0 hrs",
    total: "14.0 hrs",
  },
  {
    course: "Modern Leadership Techniques",
    wow: "5.0 hrs",
    power: "5.0 hrs",
    business: "4.0 hrs",
    total: "14.0 hrs",
  },
  {
    course: "Project Management Foundations",
    wow: "9.0 hrs",
    power: "9.0 hrs",
    business: "7.0 hrs",
    total: "25.0 hrs",
  },
];

const features = [
  "Earn all 60 PDUs in one bundle",
  "PMI-approved credits for easy renewal",
  "100% money-back guarantee",
  "180-day online access, start instantly",
  "Renew your PMP® with confidence",
  "Save more with the full bundle",
];

const statCards = [
  { icon: Award, value: "8+", label: "PMI Certifications" },
  { icon: Clock3, value: "60", label: "Maximum PDUs" },
  { icon: TrendingUp, value: "100%", label: "Online Access" },
];

const benefits = [
  {
    icon: Target,
    title: "Certification Maintenance",
    text: "Keep your PMI certification active with earned PDUs.",
  },
  {
    icon: BookOpen,
    title: "PMI-Approved Content",
    text: "All courses meet PMI's rigorous quality standards.",
  },
  {
    icon: Clock3,
    title: "Flexible Learning",
    text: "180-day online access, learn at your own pace.",
  },
  {
    icon: ShieldCheck,
    title: "Renewal Confidence",
    text: "Complete all 60 PDUs in one comprehensive bundle.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    text: "Monitor your PDU completion in real time.",
  },
  {
    icon: Users,
    title: "Expert Support",
    text: "Get guidance from PMI-certified instructors.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Layers,
    title: "Choose Your Path",
    text: "Select the renewal bundle that matches your certification needs.",
  },
  {
    step: "02",
    icon: Rocket,
    title: "Enroll & Access",
    text: "Get instant access to all courses in our online learning platform.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Complete PDUs",
    text: "Finish courses and earn PDUs across Ways of Working, Power Skills, and Business Acumen.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Submit to PMI",
    text: "Easily report your completed PDUs through the PMI portal.",
  },
  {
    step: "05",
    icon: Award,
    title: "Renew & Succeed",
    text: "Maintain your certification and continue your professional growth.",
  },
];

/* ─── PDU Tab Component ─── */

const TABS = ["All", "PMP® / PgMP® / PfMP®", "Agile / BA / Risk / SP", "CAPM®"];

const tabFilter = (tab) => {
  if (tab === "All") return maintenanceRows;
  if (tab === "CAPM®") return maintenanceRows.filter((r) => r.cert === "CAPM®");
  if (tab === "PMP® / PgMP® / PfMP®")
    return maintenanceRows.filter((r) =>
      ["PMP®", "PgMP®", "PfMP®"].includes(r.cert),
    );
  return maintenanceRows.filter((r) =>
    ["PMI-ACP®", "PMI-PBA®", "PMI-RMP®", "PMI-SP®"].includes(r.cert),
  );
};

/* ─── Component ─── */

const PDU = () => {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState("All");

  const filteredRows = tabFilter(activeTab);

  const handleScrollToMaintenance = (e) => {
    e.preventDefault();
    const el = document.getElementById("maintenance");
    if (el) {
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          PMP Renewal Bundle | Earn 60 PDUs Online | PMI Certification Renewal |
          Skylartech
        </title>

        <meta
          name="description"
          content="Renew your PMP® certification with Skylartech's PMI-approved 60 PDU bundle. Earn all required Professional Development Units (PDUs) online and maintain your PMI certification with confidence."
        />

        <meta
          name="keywords"
          content="PMP renewal, PMP renewal bundle, PMP certification renewal, PMI certification renewal, PMI PDU courses, Earn 60 PDUs, Online PDU courses, PMI ATP, PMI Approved Training Partner, PMP continuing education, Professional Development Units, CAPM renewal, PMI ACP renewal, PMI RMP renewal, PMI SP renewal, PMI PBA renewal, PgMP renewal, PfMP renewal, Project Management Institute, Skylartech"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="PMP Renewal Bundle | Earn 60 PDUs Online | Skylartech"
        />

        <meta
          property="og:description"
          content="Complete all 60 required PDUs with PMI-approved online training and renew your PMP® certification quickly and confidently."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://skylartech.co.ke/pdu" />

        <meta
          property="og:image"
          content="https://skylartech.co.ke/images/pmp-renewal-banner.jpg"
        />

        <meta property="og:locale" content="en_KE" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="PMP Renewal Bundle | Earn 60 PDUs Online"
        />

        <meta
          name="twitter:description"
          content="Renew your PMP® certification online with PMI-approved PDU courses from Skylartech."
        />

        <meta
          name="twitter:image"
          content="https://skylartech.co.ke/images/pmp-renewal-banner.jpg"
        />

        <link rel="canonical" href="https://skylartech.co.ke/pdu" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "PMP Renewal Bundle - 60 PDUs",
            description:
              "PMI-approved online training to help professionals earn the required 60 PDUs for PMP certification renewal.",
            provider: {
              "@type": "Organization",
              name: "Skylartech",
              url: "https://skylartech.co.ke",
            },
            courseMode: "Online",
            educationalCredentialAwarded:
              "60 Professional Development Units (PDUs)",
          })}
        </script>
      </Helmet>
      <section
        aria-label="PMI Certification Renewal and PDU Maintenance"
        className="relative overflow-hidden pt-28 lg:pt-32"
      >
        {/* ── Shared Background ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#06111f] to-slate-950" />
        <GlowOrb className="h-80 w-80 -top-16 -left-16 bg-cyan-500/10" />
        <GlowOrb className="h-96 w-96 -bottom-24 -right-20 bg-violet-500/10" />
        <GlowOrb className="h-[520px] w-[520px] top-1/3 left-1/2 -translate-x-1/2 bg-fuchsia-500/5" />
        <GridOverlay />

        {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative flex min-h-[90vh] items-center pb-16 lg:min-h-screen lg:pb-20"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            {/* LEFT */}
            <motion.div variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionLabel>
                  <Sparkles
                    className="h-3.5 w-3.5 text-cyan-300"
                    aria-hidden="true"
                  />
                  PMI® Certification Renewal
                </SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.75rem,3.5vw,3.5rem)]"
              >
                Earn Your Required{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  PDUs
                </span>{" "}
                and Maintain Your Certification
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed"
              >
                Keep your PMI® certification active through continuous
                professional development. Access PMI-approved training, earn the
                required PDUs, and renew your certification with confidence.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="#maintenance"
                  onClick={handleScrollToMaintenance}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 hover:scale-[1.02]"
                  aria-label="View maintenance requirements"
                >
                  Maintenance Requirements
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/book-training"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-4 font-semibold text-white backdrop-blur-xl transition-colors duration-200 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-label="Talk to an advisor"
                >
                  Talk to an Advisor
                </Link>
              </motion.div>

              {/* STATS */}
              <motion.div
                variants={staggerFast}
                className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
              >
                {statCards.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={hoverLift(reduce)}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <item.icon
                      className="h-8 w-8 text-cyan-300"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-3xl font-bold text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: reduce ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reduce ? 0.2 : 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
                {/* Glow */}
                <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-500/20 blur-[90px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-400/20">
                      <ShieldCheck
                        className="h-6 w-6 text-cyan-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        PMP® Renewal Bundle
                      </h2>
                      <p className="text-sm text-slate-400">
                        Complete all required PDUs
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Earn all required 60 PDUs",
                      "PMI-approved learning content",
                      "Study anytime, anywhere",
                      "Instant online access",
                      "Renew with confidence",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors duration-200 hover:bg-white/[0.06]"
                      >
                        <CheckCircle2
                          className="h-5 w-5 text-cyan-300 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-5 sm:p-6">
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-cyan-300">
                      Recommended
                    </p>
                    <p className="mt-1 text-3xl sm:text-4xl font-bold text-white">
                      60 PDUs
                    </p>
                    <p className="mt-2 text-slate-300 text-sm sm:text-base">
                      Complete your certification renewal in one convenient
                      package.
                    </p>
                  </div>

                  <Link
                    to="/book-training"
                    className="group mt-6 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
                  >
                    Get Started Today
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════
          BENEFITS / WHY PDUs MATTER
      ════════════════════════════════════════════════ */}
        <div className="relative border-t border-white/5 py-20 sm:py-24 lg:py-32">
          <GlowOrb className="h-64 w-64 top-0 left-1/4 bg-cyan-500/8" />
          <GlowOrb className="h-64 w-64 bottom-0 right-1/4 bg-violet-500/8" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="text-center"
            >
              <SectionLabel>
                <Zap className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                Why PDUs Matter
              </SectionLabel>

              <h2 className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.875rem,3.6vw,3.5rem)]">
                Everything You Need for{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Effortless Renewal
                </span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl text-pretty text-base sm:text-lg text-slate-300 leading-relaxed">
                Our PMI-approved bundles make it simple to earn every PDU you
                need — with expert support and flexible online access at every
                step.
              </p>

              <div className="mt-8">
                <Divider />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard className="h-full p-6 sm:p-7">
                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/20">
                        <benefit.icon
                          className="h-6 w-6 text-cyan-300"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-slate-400 leading-relaxed text-sm sm:text-base">
                        {benefit.text}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
          MAINTENANCE REQUIREMENTS
      ════════════════════════════════════════════════ */}
        <div
          id="maintenance"
          className="relative border-t border-white/5 py-20 sm:py-24 lg:py-32 scroll-mt-24"
        >
          <GlowOrb className="h-80 w-80 top-0 right-0 bg-violet-500/8" />
          <GlowOrb className="h-80 w-80 bottom-0 left-0 bg-cyan-500/8" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="text-center"
            >
              <SectionLabel>Stay Current</SectionLabel>

              <h2 className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.875rem,3.6vw,3.5rem)]">
                Certification Maintenance{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Requirements
                </span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl text-pretty text-base sm:text-lg text-slate-300 leading-relaxed">
                Keep your PMI® certification active through continuous
                professional development and stay ahead in today&apos;s evolving
                project management landscape.
              </p>

              <div className="mt-8">
                <Divider />
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-10 flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Certification filter tabs"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                    activeTab === tab
                      ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-200"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Desktop Table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mt-10 hidden md:block"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-cyan-950/20">
                <div className="grid grid-cols-[1.1fr_0.8fr_1.2fr] gap-4 p-5 sm:p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 text-cyan-200 font-semibold text-sm">
                  <div>Certification</div>
                  <div>Cycle</div>
                  <div>PDUs Required</div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredRows.map((row, i) => (
                      <motion.div
                        key={row.cert}
                        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: reduce ? 0 : i * 0.05 }}
                        className={`grid grid-cols-[1.1fr_0.8fr_1.2fr] gap-4 p-5 sm:p-6 border-t border-white/5 transition-all duration-300 ${
                          i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                        } hover:bg-white/[0.05]`}
                      >
                        <div className="font-medium text-cyan-200 break-words">
                          {row.cert}
                        </div>
                        <div className="text-slate-300 break-words">
                          {row.cycle}
                        </div>
                        <div className="text-slate-300 break-words">
                          {row.pdu}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-mobile"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-8 space-y-4 md:hidden"
              >
                {filteredRows.map((row, i) => (
                  <motion.div
                    key={row.cert}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    whileHover={hoverLift(reduce)}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                        <Award
                          className="h-4 w-4 text-cyan-300"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-cyan-200">
                        {row.cert}
                      </h3>
                    </div>
                    <div className="mt-4 space-y-3 text-slate-300">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-cyan-300/80 text-sm">Cycle</span>
                        <span className="text-right text-sm">{row.cycle}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-cyan-300/80 text-sm">
                          PDUs Required
                        </span>
                        <span className="text-right text-sm">{row.pdu}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
          HOW IT WORKS — PROCESS STEPS
      ════════════════════════════════════════════════ */}
        <div className="relative border-t border-white/5 py-20 sm:py-24 lg:py-32">
          <GlowOrb className="h-72 w-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-fuchsia-500/6" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="text-center"
            >
              <SectionLabel>
                <Rocket
                  className="h-3.5 w-3.5 text-cyan-300"
                  aria-hidden="true"
                />
                Simple 5-Step Process
              </SectionLabel>

              <h2 className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.875rem,3.6vw,3.5rem)]">
                From Enrollment to{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Renewal
                </span>
              </h2>

              <p className="mt-4 mx-auto max-w-3xl text-pretty text-base sm:text-lg text-slate-300 leading-relaxed">
                A clear, guided path to earn your PDUs and renew your PMI®
                certification — without the guesswork.
              </p>

              <div className="mt-8">
                <Divider />
              </div>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
              {processSteps.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  {/* Connector line (desktop) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[2.25rem] left-[calc(100%_-_8px)] w-full h-px bg-gradient-to-r from-cyan-400/30 to-transparent z-0" />
                  )}

                  <GlassCard className="relative z-10 flex flex-col items-center text-center p-6">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/20">
                      <s.icon
                        className="h-6 w-6 text-cyan-300"
                        aria-hidden="true"
                      />
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="relative z-10 mt-4 text-base font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-slate-400 leading-relaxed">
                      {s.text}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
          PMP RENEWAL BUNDLE
      ════════════════════════════════════════════════ */}
        <div className="relative border-t border-white/5 py-20 sm:py-24 lg:py-32">
          <GlowOrb className="h-72 w-72 -top-16 -right-12 bg-cyan-500/10" />
          <GlowOrb className="h-72 w-72 -bottom-16 -left-12 bg-violet-500/10" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="text-center"
            >
              <SectionLabel>Renew &amp; Maintain</SectionLabel>

              <h2 className="mt-6 max-w-4xl mx-auto text-balance font-bold leading-tight text-white [font-size:clamp(1.75rem,3.2vw,3rem)]">
                Maintain Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  PMP® Certification
                </span>
              </h2>

              <p className="mt-4 mx-auto max-w-4xl text-pretty text-base sm:text-lg leading-relaxed text-slate-300">
                Complete your PMP® renewal quickly and confidently with our{" "}
                <span className="text-cyan-200 font-semibold">
                  PMP Renewal Bundle (60 PDUs)
                </span>
                . Earn all required PDUs in one package with no guesswork—just
                continuous professional growth.
              </p>

              <div className="mt-8">
                <Divider />
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  whileHover={hoverLift(reduce)}
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
                    <CheckCircle2
                      className="h-5 w-5 text-cyan-300"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-snug">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* ATP Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-12"
            >
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-6 sm:p-8 lg:p-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <GlowOrb className="h-40 w-40 -top-10 -right-10 bg-cyan-500/15" />
                <GlowOrb className="h-40 w-40 -bottom-10 -left-10 bg-violet-500/15" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:text-left">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-400/25">
                    <ShieldCheck
                      className="h-8 w-8 text-cyan-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/80">
                      Official Accreditation
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white">
                      Premier Authorized Training Partner (ATP)
                    </h3>
                    <p className="mt-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                      All courses included in this bundle are approved by the
                      Project Management Institute® and qualify for
                      certification renewal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Course Table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="mt-12 hidden xl:block"
            >
              <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
                <div className="min-w-[900px]">
                  <div className="grid grid-cols-5 p-5 sm:p-6 text-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 text-cyan-200 font-semibold text-sm">
                    <div className="text-left pl-2">Course</div>
                    <div>Ways of Working</div>
                    <div>Power Skills</div>
                    <div>Business Acumen</div>
                    <div>Total Hours</div>
                  </div>

                  {courses.map((course, i) => (
                    <div
                      key={course.course}
                      className={`grid grid-cols-5 items-center p-5 sm:p-6 text-center border-t border-white/5 transition-colors duration-200 hover:bg-white/[0.05] ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <div className="font-medium text-cyan-200 text-left pl-2 pr-4 text-sm leading-snug">
                        {course.course}
                      </div>
                      <div className="text-slate-300 text-sm">{course.wow}</div>
                      <div className="text-slate-300 text-sm">
                        {course.power}
                      </div>
                      <div className="text-slate-300 text-sm">
                        {course.business}
                      </div>
                      <div className="font-semibold text-slate-200 text-sm">
                        {course.total}
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-5 p-5 sm:p-6 text-center bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-violet-500/15 border-t border-cyan-400/20">
                    <div className="font-bold text-cyan-200 text-left pl-2">
                      Grand Total
                    </div>
                    <div className="font-semibold text-white">22 hrs</div>
                    <div className="font-semibold text-white">22 hrs</div>
                    <div className="font-semibold text-white">17 hrs</div>
                    <div className="font-bold text-white">61 hrs*</div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">
                * Total hours may vary slightly based on course version and
                completion pace.
              </p>
            </motion.div>

            {/* Mobile Course Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-10 space-y-4 xl:hidden"
            >
              {courses.map((course) => (
                <motion.div
                  key={course.course}
                  variants={fadeUp}
                  whileHover={hoverLift(reduce)}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <h4 className="text-base font-semibold text-cyan-200">
                    {course.course}
                  </h4>

                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    {[
                      ["Ways of Working", course.wow],
                      ["Power Skills", course.power],
                      ["Business Acumen", course.business],
                    ].map(([label, val]) => (
                      <div key={label} className="flex justify-between gap-4">
                        <span className="text-slate-400">{label}</span>
                        <span>{val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 border-t border-white/10 pt-3 font-semibold text-cyan-200">
                      <span>Total</span>
                      <span>{course.total}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Mobile Total */}
              <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-5 text-center">
                <p className="text-lg font-bold text-cyan-200">
                  Grand Total: 61 PDUs*
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Ways of Working: 22 hrs &bull; Power Skills: 22 hrs &bull;
                  Business Acumen: 17 hrs
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
        <div className="relative border-t border-white/5 py-20 sm:py-24">
          <GlowOrb className="h-96 w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/8" />
          <GlowOrb className="h-64 w-64 -bottom-10 -right-10 bg-violet-500/10" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>
                  <Sparkles
                    className="h-3.5 w-3.5 text-cyan-300"
                    aria-hidden="true"
                  />
                  Ready to Renew?
                </SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.75rem,3.5vw,3.25rem)]"
              >
                Start Earning Your PDUs{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Today
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
              >
                Join thousands of PMI® certified professionals who trust
                Skylartech to maintain their credentials with confidence and
                ease.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  Enroll Now
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="#maintenance"
                  onClick={handleScrollToMaintenance}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  View Requirements
                  <ChevronDown className="h-5 w-5" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.p
                variants={fadeIn}
                className="mt-8 text-xs text-slate-500 tracking-wide"
              >
                PMI® Premier Authorized Training Partner &bull; 100% Money-Back
                Guarantee
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PDU;
