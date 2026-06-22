import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Team from "../../assets/About Images/Team.jpg";
import {
  Lightbulb,
  GraduationCap,
  ShieldCheck,
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Globe,
  Award,
  Sparkles,
  Heart,
  Puzzle,
  Compass,
  Crown,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";

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
    className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80 ${className}`}
  >
    {children}
  </div>
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
);

const GlowOrb = ({ className = "" }) => (
  <div className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`} />
);

const GlassCard = ({ children, className = "", hover = true }) => (
  <div
    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${
      hover
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(91,44,255,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
    {children}
  </div>
);

const IconBadge = ({ icon: Icon, gradient, className = "" }) => (
  <div
    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg ${className}`}
  >
    <Icon className="h-6 w-6 text-black" />
  </div>
);

const certifications = [
  { name: "CAPM®", link: "/certifications/capm" },
  { name: "PMP®", link: "/certifications/pmp" },
  { name: "PgMP®", link: "/certifications/pgmp" },
  { name: "PfMP®", link: "/certifications/pfmp" },
  { name: "PMI-ACP®", link: "/certifications/pmi-acp" },
  { name: "PMI-RMP®", link: "/certifications/pmi-rmp" },
  { name: "PMI-PBA®", link: "/certifications/pmi-pba" },
  { name: "PMI-SP®", link: "/certifications/pmi-sp" },
  { name: "PMI-CP®", link: "/certifications/pmi-cp" },
  { name: "PMI-PMOCP®", link: "/certifications/pmi-pmocp" },
  { name: "PMI-CPMAI®", link: "/certifications/pmi-cpmai" },
  { name: "GPM-b®", link: "/certifications/gpm-b" },
];

const heroCards = [
  {
    icon: Lightbulb,
    title: "Seeing The Gap",
    text: "Professionals were taught to memorize frameworks instead of understanding how to apply them.",
    glow: "from-purple-500/15 to-fuchsia-500/10",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-200",
  },
  {
    icon: ShieldCheck,
    title: "The Turning Point",
    text: "Talented professionals needed structure, guidance, and clarity — not more confusing content.",
    glow: "from-fuchsia-500/15 to-pink-500/10",
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-200",
  },
  {
    icon: Target,
    title: "Building Something Different",
    text: "Skylartech was created to transform complexity into confidence through guided mastery.",
    glow: "from-indigo-500/15 to-violet-500/10",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-200",
  },
];

const philosophyCards = [
  {
    icon: Puzzle,
    title: "Break Down Complexity",
    text: "We simplify difficult concepts into clear, structured understanding.",
    gradient: "from-pink-300 to-rose-400",
    rotate: "-rotate-1",
    offset: "",
  },
  {
    icon: Compass,
    title: "Teach Understanding",
    text: "We focus on clarity and intuition instead of memorization.",
    gradient: "from-purple-300 to-indigo-400",
    rotate: "rotate-1",
    offset: "md:-translate-y-6",
  },
  {
    icon: Heart,
    title: "Build Confidence",
    text: "Confidence grows through guided learning, not pressure.",
    gradient: "from-rose-300 to-pink-400",
    rotate: "-rotate-2",
    offset: "md:translate-y-8",
  },
  {
    icon: BookOpen,
    title: "Real-World Application",
    text: "Every concept connects directly to real project environments.",
    gradient: "from-indigo-300 to-slate-400",
    rotate: "rotate-1",
    offset: "md:-translate-y-2",
  },
  {
    icon: Users,
    title: "Continuous Support",
    text: "We support learners throughout their entire certification journey.",
    gradient: "from-pink-300 to-purple-400",
    rotate: "-rotate-1",
    offset: "md:translate-y-6",
  },
];

const deliveryFormats = [
  {
    icon: Globe,
    title: "Live Virtual Training",
    text: "Instructor-led online sessions designed for working professionals who need flexibility without losing real-time engagement.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Corporate Onsite Programs",
    text: "Tailored training delivered directly within organizations to align teams, improve delivery standards, and build internal PM capability.",
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Weekend Cohorts",
    text: "Structured weekend-based learning designed for professionals balancing full-time roles and certification preparation.",
    color: "emerald",
  },
  {
    icon: Layers,
    title: "Hybrid Learning",
    text: "A blended model combining virtual sessions and guided support for maximum flexibility and reinforcement.",
    color: "indigo",
  },
  {
    icon: Crown,
    title: "Private Executive Training",
    text: "High-touch, customized coaching for senior professionals and executives focused on strategic project leadership.",
    color: "pink",
    featured: true,
  },
];

const beliefCards = [
  {
    icon: ShieldCheck,
    label: "Clarity",
    text: "We believe no professional should feel lost in their certification journey.",
    glow: "from-[#5b2cff]/10",
    iconBg: "bg-[#5b2cff]/20",
    iconColor: "text-[#c9a7ff]",
    labelColor: "text-[#c9a7ff]",
  },
  {
    icon: TrendingUp,
    label: "Growth",
    text: "We believe the right guidance transforms not only exam results — but careers.",
    glow: "from-[#a67c52]/15",
    iconBg: "bg-[#a67c52]/20",
    iconColor: "text-[#e0c3a0]",
    labelColor: "text-[#e0c3a0]",
  },
  {
    icon: Target,
    label: "Certainty",
    text: "And we believe success should never depend on guesswork.",
    glow: "from-[#c9a7ff]/10 to-[#5b2cff]/10",
    iconBg: "bg-[#c9a7ff]/20",
    iconColor: "text-[#c9a7ff]",
    labelColor: "text-[#c9a7ff]",
  },
];

const colorMap = {
  purple: { bg: "bg-purple-500/20", text: "text-purple-300" },
  blue: { bg: "bg-blue-500/20", text: "text-blue-300" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-300" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-300" },
  pink: { bg: "bg-pink-500/20", text: "text-pink-300" },
};

const About = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-gray-800">
      <Helmet>
        <title>
          About Skylartech Limited | PMI® Premier Authorized Training Partner in Kenya
        </title>
        <meta
          name="description"
          content="Skylartech Limited is a PMI® Premier Authorized Training Partner based in Nairobi, Kenya. We specialize in PMP training, Agile certification, PMO consulting, and project management courses."
        />
        <meta
          name="keywords"
          content="
            Skylartech Limited,
            PMP training Kenya,
            PMI Authorized Training Partner Kenya,
            project management courses Nairobi,
            Agile certification Kenya,
            PMO consulting Kenya
          "
        />
        <link rel="canonical" href="https://skylartech.co.ke/about" />
        <meta name="author" content="Skylartech Limited" />
        <meta property="og:title" content="About Skylartech Limited" />
        <meta
          property="og:description"
          content="PMI® Premier Authorized Training Partner in Kenya delivering PMP training, Agile certification, and PMO consulting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skylartech.co.ke/about" />
        <meta property="og:site_name" content="Skylartech Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Skylartech Limited | PMP Training Kenya"
        />
        <meta
          name="twitter:description"
          content="PMI® Authorized Training Partner offering PMP training, Agile certification, and PMO consulting in Nairobi, Kenya."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Skylartech Limited",
            url: "https://skylartech.co.ke",
            logo: "https://skylartech.co.ke/logo.png",
            description:
              "Skylartech Limited is a PMI® Premier Authorized Training Partner delivering PMP training, Agile certification, and PMO consulting in Kenya.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "Kenya",
            },
            sameAs: ["https://skylartech.co.ke"],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-36 md:pt-44 pb-24 px-5 sm:px-8 lg:px-12 text-slate-100 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Team})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[#060607]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

        <GlowOrb className="top-0 left-0 w-[550px] h-[550px] bg-violet-500/15 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="top-[25%] right-0 w-[480px] h-[480px] bg-fuchsia-500/10 translate-x-1/3" />
        <GlowOrb className="bottom-0 left-1/2 w-[700px] h-[700px] bg-indigo-600/15 -translate-x-1/2 translate-y-1/3" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionLabel>
              <Award className="w-3.5 h-3.5 text-violet-300" />
              PMI® Premier Authorized Training Partner
            </SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight max-w-6xl mx-auto text-white"
          >
            Founder Story:
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300">
              The Journey Behind Skylartech Limited
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
              <p className="text-lg md:text-xl leading-relaxed text-white/85">
                Skylartech Limited did not begin as a business idea. It began with
                a simple question that refused to go away — why do capable
                professionals struggle with globally recognized certifications
                designed to elevate their careers?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-16 max-w-5xl mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl rounded-[40px]" />

            <GlassCard className="p-8 md:p-14" hover={false}>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {heroCards.map((card, i) => (
                  <motion.div key={card.title} variants={fadeUp} className="group space-y-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                    >
                      <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-white/70 leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "PMI®", label: "Premier ATP" },
              { value: "12+", label: "Certifications" },
              { value: "Global", label: "Reach" },
              { value: "100%", label: "Guided Learning" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-28 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-950" />
        <GlowOrb className="top-0 left-0 w-[500px] h-[500px] bg-pink-400/10 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_50%)]" />
        <GridOverlay />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionLabel>
              <GraduationCap className="w-3.5 h-3.5 text-pink-300" />
              A Different Philosophy Of Learning
            </SectionLabel>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Built Around Understanding,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300">
                Not Memorization
              </span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-white/65 leading-relaxed">
              From the beginning, Skylartech Limited chose a softer, clearer
              approach — centered on understanding, confidence, and real-world
              mastery.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-20 flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyCards.slice(0, 3).map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className={`relative ${card.rotate} ${card.offset} hover:rotate-0 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 blur-2xl rounded-[30px]" />
                  <GlassCard className="p-8">
                    <IconBadge icon={card.icon} gradient={card.gradient} className="mb-6" />
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-white/65 leading-relaxed">{card.text}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {philosophyCards.slice(3).map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className={`relative ${card.rotate} ${card.offset} hover:rotate-0 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-2xl rounded-[30px]" />
                  <GlassCard className="p-8">
                    <IconBadge icon={card.icon} gradient={card.gradient} className="mb-6" />
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-white/65 leading-relaxed">{card.text}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TODAY */}
      <section className="relative py-28 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120a1f] via-[#1a0f2e] to-[#0f0b14]" />
        <GlowOrb className="top-0 left-0 w-[550px] h-[550px] bg-[#5b2cff]/15 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="bottom-0 right-0 w-[450px] h-[450px] bg-[#a67c52]/12 translate-x-1/3 translate-y-1/3" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <SectionLabel>
                <TrendingUp className="w-3.5 h-3.5 text-[#c9a7ff]" />
                What It Has Become Today
              </SectionLabel>

              <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Structured Learning.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a7ff] via-violet-300 to-[#e0c3a0]">
                  Repeatable Success.
                </span>
              </h2>

              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed">
                Today, Skylartech Limited stands as a PMI® Premier Authorized
                Training Partner delivering globally aligned project management
                training built around clarity, structure, and practical mastery.
              </p>

              <p className="mt-6 text-lg text-white/55 leading-relaxed">
                Every program is designed around one belief: professionals do
                not fail because they lack ability — they struggle when the
                learning system is unclear.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              <motion.div variants={fadeUp}>
                <GlassCard className="p-8 h-full">
                  <Users className="w-10 h-10 mb-6 text-[#c9a7ff]" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Learner-Centered</h3>
                  <p className="leading-relaxed text-white/65">
                    Confidence grows when guidance and structure replace confusion.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard className="p-8 h-full">
                  <Globe className="w-10 h-10 mb-6 text-[#e0c3a0]" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Global Reach</h3>
                  <p className="leading-relaxed text-white/65">
                    Supporting professionals globally pursuing internationally
                    respected certifications.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeUp} className="sm:col-span-2">
                <GlassCard className="p-8" hover={false}>
                  <Sparkles className="w-10 h-10 mb-6 text-[#c9a7ff]" />
                  <h3 className="text-2xl font-bold mb-6 text-white">Certifications Supported</h3>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {certifications.map((cert) => (
                      <Link
                        key={cert.name}
                        to={cert.link}
                        className="group px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[#e5d4ff] font-semibold text-sm hover:bg-white/10 hover:border-[#c9a7ff]/40 hover:scale-105 transition-all duration-300"
                      >
                        <span className="group-hover:text-white transition-colors">{cert.name}</span>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEARNING DELIVERY FORMATS */}
      <section className="relative py-28 px-6 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-950" />
        <GlowOrb className="top-0 left-0 w-[480px] h-[480px] bg-violet-500/10 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="bottom-0 right-0 w-[480px] h-[480px] bg-cyan-500/8" />
        <GridOverlay />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>
              <Layers className="w-3.5 h-3.5 text-violet-300" />
              Delivery Formats
            </SectionLabel>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Flexible Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
                Options
              </span>
            </h2>

            <p className="mt-6 text-white/60 max-w-3xl mx-auto text-base leading-relaxed">
              We design learning experiences that adapt to professionals, teams,
              and enterprise organizations — without compromising structure,
              quality, or certification outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {deliveryFormats.map((format) => {
              const colors = colorMap[format.color];
              return (
                <motion.div
                  key={format.title}
                  variants={fadeUp}
                  className={format.featured ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <GlassCard className="p-6 h-full group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`p-2.5 rounded-xl ${colors.bg} transition-transform duration-300 group-hover:scale-110`}>
                        <format.icon className={`w-5 h-5 ${colors.text}`} />
                      </span>
                      <h3 className="text-white font-semibold text-lg">{format.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{format.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/book-training"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Request Corporate Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/offerings/professional-training-and-certification"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              Explore Certifications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section className="relative min-h-screen flex items-center px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070a12] via-[#14102a] to-[#0b0f1a]" />
        <GlowOrb className="top-0 left-0 w-[600px] h-[600px] bg-[#5b2cff]/18 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="bottom-0 right-0 w-[600px] h-[600px] bg-[#a67c52]/12 translate-x-1/3 translate-y-1/3" />
        <GridOverlay />

        <div className="relative max-w-6xl mx-auto w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center px-2 sm:px-0"
          >
            <SectionLabel>
              <BookOpen className="w-3.5 h-3.5 text-[#c9a7ff]" />
              The Belief That Drives Us
            </SectionLabel>

            <h2 className="mt-8 sm:mt-10 text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Clarity Creates Confidence.{" "}
              <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#c9a7ff] via-violet-300 to-[#e0c3a0]">
                Structure Creates Success.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {beliefCards.map((card) => (
              <motion.div key={card.label} variants={fadeUp} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} to-transparent blur-2xl rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <GlassCard className="p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className={`w-11 sm:w-12 h-11 sm:h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                      <card.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${card.iconColor}`} />
                    </div>
                    <span className={`text-xs sm:text-sm uppercase tracking-[0.18em] ${card.labelColor} font-semibold`}>
                      {card.label}
                    </span>
                  </div>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed">{card.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070712] via-[#2a0a3d] to-[#0b1b3a]" />
        <GlowOrb className="top-0 left-0 w-[550px] h-[550px] bg-pink-400/15 -translate-x-1/2 -translate-y-1/2" />
        <GlowOrb className="top-1/3 right-0 w-[480px] h-[480px] bg-violet-500/15 translate-x-1/3" />
        <GlowOrb className="bottom-0 left-1/2 w-[650px] h-[650px] bg-indigo-900/15 -translate-x-1/2 translate-y-1/3" />
        <GridOverlay />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative max-w-6xl mx-auto text-center text-white py-20"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>
              <Target className="w-3.5 h-3.5 text-pink-300" />
              This Is Still The Beginning
            </SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Built From A Problem.{" "}
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-violet-300 to-indigo-300">
              Committed To Transformation.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Skylartech Limited continues to grow globally as a PMI® Premier
            Authorized Training Partner trusted by professionals pursuing
            globally recognized certifications.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-14 flex flex-wrap justify-center gap-4">
            {[
              { text: "Built From A Problem", color: "text-pink-200" },
              { text: "Driven By Clarity", color: "text-violet-200" },
              { text: "Focused On Transformation", color: "text-indigo-200" },
            ].map((tag) => (
              <div
                key={tag.text}
                className="px-6 py-3.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl font-semibold shadow-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className={tag.color}>{tag.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14">
            <Link
              to="/book-training"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
