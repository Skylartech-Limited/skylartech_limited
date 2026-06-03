import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";
import Team from "../../assets/About Images/Team.jpg"; // adjust path to your file
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
} from "lucide-react";

const About = () => {
  const certifications = [
    // Foundational
    { name: "CAPM®", link: "/certifications/capm" },
    { name: "PMP®", link: "/certifications/pmp" },
    { name: "PgMP®", link: "/certifications/pgmp" },
    { name: "PfMP®", link: "/certifications/pfmp" },

    // Specialized
    { name: "PMI-ACP®", link: "/certifications/pmi-acp" },
    { name: "PMI-RMP®", link: "/certifications/pmi-rmp" },
    { name: "PMI-PBA®", link: "/certifications/pmi-pba" },
    { name: "PMI-SP®", link: "/certifications/pmi-sp" },
    { name: "PMI-CP®", link: "/certifications/pmi-cp" },
    { name: "PMI-PMOCP®", link: "/certifications/pmi-pmocp" },
    { name: "PMI-CPMAI®", link: "/certifications/pmi-cpmai" },

    // Sustainability
    { name: "GPM-b®", link: "/certifications/gpm-b" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#f8fafc] text-gray-800">
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

  {/* ENTITY SIGNAL */}
  <meta name="author" content="Skylartech Limited" />

  {/* Open Graph */}
  <meta property="og:title" content="About Skylartech Limited" />
  <meta
    property="og:description"
    content="PMI® Premier Authorized Training Partner in Kenya delivering PMP training, Agile certification, and PMO consulting."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://skylartech.co.ke/about" />
  <meta property="og:site_name" content="Skylartech Limited" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About Skylartech Limited | PMP Training Kenya"
  />
  <meta
    name="twitter:description"
    content="PMI® Authorized Training Partner offering PMP training, Agile certification, and PMO consulting in Nairobi, Kenya."
  />

  {/* STEP 3: STRUCTURED DATA (IMPORTANT FOR GOOGLE ENTITY RECOGNITION) */}
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
      sameAs: [
        "https://skylartech.co.ke"
      ]
    })}
  </script>
</Helmet>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 px-5 sm:px-8 lg:px-12 text-slate-100 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Team})` }}
        />

        {/* LIGHTER + PREMIUM GRADIENT OVERLAY (key fix) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05040a]/65 via-[#0b0614]/55 to-[#05040a]/70" />

        {/* VIGNETTE (adds focus without killing image) */}
        <div className="absolute inset-0 bg-radial-gradient-to-b from-transparent via-black/10 to-black/60" />

        {/* BACKGROUND DECOR (Eggplant glow - softened) */}
        <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-purple-900/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute top-[25%] right-0 w-[520px] h-[520px] bg-fuchsia-900/10 blur-3xl rounded-full translate-x-1/3" />

        <div className="absolute bottom-0 left-1/2 w-[750px] h-[750px] bg-indigo-950/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/3" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-sm">
            <Award className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              PMI® Premier Authorized Training Partner
            </span>
          </div>

          {/* TITLE (better readability) */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight max-w-6xl mx-auto text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            Founder Story:
            <span className="block mt-3 bg-gradient-to-r from-purple-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-none">
              The Journey Behind Skylartech Limited
            </span>
          </h1>

          {/* SUBTEXT */}
          <div className="mt-8 max-w-4xl mx-auto px-6 py-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10">
            <p className="text-lg md:text-xl leading-9 text-white/90">
              Skylartech Limited did not begin as a business idea. It began with
              a simple question that refused to go away — why do capable
              professionals struggle with globally recognized certifications
              designed to elevate their careers?
            </p>
          </div>
          {/* GLASS CARD */}
          <div className="mt-16 max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl rounded-[40px]" />

            <div className="relative bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[36px] p-8 md:p-14">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {/* CARD 1 */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/15 flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-purple-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Seeing The Gap
                  </h3>

                  <p className="text-white/75 leading-8">
                    Professionals were taught to memorize frameworks instead of
                    understanding how to apply them.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/15 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-fuchsia-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    The Turning Point
                  </h3>

                  <p className="text-white/75 leading-8">
                    Talented professionals needed structure, guidance, and
                    clarity — not more confusing content.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 flex items-center justify-center">
                    <Target className="w-7 h-7 text-indigo-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Building Something Different
                  </h3>

                  <p className="text-white/75 leading-8">
                    Skylartech was created to transform complexity into
                    confidence through guided mastery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-28 px-5 sm:px-8 lg:px-12 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#0b1020]" />

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-indigo-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-pink-200 font-semibold text-sm backdrop-blur-xl">
              <GraduationCap className="w-4 h-4 text-pink-300" />A Different
              Philosophy Of Learning
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
              Built Around Understanding,
              <span className="block text-pink-300">Not Memorization</span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-9">
              From the beginning, Skylartech Limited chose a softer, clearer
              approach — centered on understanding, confidence, and real-world
              mastery.
            </p>
          </div>

          {/* GRID WRAPPER (KEY FIX) */}
          <div className="mt-20 flex flex-col gap-10">
            {/* ROW 1 → 3 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* CARD 1 */}
              <div className="relative rotate-[-1deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 blur-2xl rounded-[30px]" />
                <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center mb-6">
                    <Puzzle className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Break Down Complexity
                  </h3>
                  <p className="text-slate-300 leading-8">
                    We simplify difficult concepts into clear, structured
                    understanding.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative md:-translate-y-6 rotate-[1deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-2xl rounded-[30px]" />
                <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Teach Understanding
                  </h3>
                  <p className="text-slate-300 leading-8">
                    We focus on clarity and intuition instead of memorization.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative md:translate-y-8 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-indigo-400/10 blur-2xl rounded-[30px]" />
                <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Build Confidence
                  </h3>
                  <p className="text-slate-300 leading-8">
                    Confidence grows through guided learning, not pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2 → 2 CENTERED CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* CARD 4 */}
              <div className="relative md:-translate-y-2 rotate-[1deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-2xl rounded-[30px]" />
                <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-300 to-slate-400 flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Real-World Application
                  </h3>
                  <p className="text-slate-300 leading-8">
                    Every concept connects directly to real project
                    environments.
                  </p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="relative md:translate-y-6 rotate-[-1deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-indigo-400/10 blur-2xl rounded-[30px]" />
                <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Continuous Support
                  </h3>
                  <p className="text-slate-300 leading-8">
                    We support learners throughout their entire certification
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="relative py-28 px-5 sm:px-8 lg:px-12 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120a1f] via-[#1a0f2e] to-[#0f0b14]" />

        {/* ROYAL PURPLE + BROWN GLOWS */}
        <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-[#5b2cff]/15 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-[#3b2a1f]/25 blur-3xl rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-[#7a4a2d]/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT ================= */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#e5d4ff] font-semibold text-sm backdrop-blur-xl">
                <TrendingUp className="w-4 h-4 text-[#c9a7ff]" />
                What It Has Become Today
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-white">
                Structured Learning.
                <span className="block text-[#c9a7ff]">
                  Repeatable Success.
                </span>
              </h2>

              <p className="mt-8 text-lg md:text-xl text-[#d6cfc7] leading-9">
                Today, Skylartech Limited stands as a PMI® Premier Authorized
                Training Partner delivering globally aligned project management
                training built around clarity, structure, and practical mastery.
              </p>

              <p className="mt-6 text-lg md:text-xl text-[#b9b0a8] leading-9">
                Every program is designed around one belief: professionals do
                not fail because they lack ability — they struggle when the
                learning system is unclear.
              </p>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* CARD 1 */}
              <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-xl hover:scale-[1.02] transition-all">
                <Users className="w-10 h-10 mb-6 text-[#c9a7ff]" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Learner-Centered
                </h3>
                <p className="leading-8 text-[#d6cfc7]">
                  Confidence grows when guidance and structure replace
                  confusion.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-xl hover:scale-[1.02] transition-all">
                <Globe className="w-10 h-10 mb-6 text-[#a67c52]" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Global Reach
                </h3>
                <p className="leading-8 text-[#d6cfc7]">
                  Supporting professionals globally pursuing internationally
                  respected certifications.
                </p>
              </div>

              {/* CERTIFICATIONS CARD */}
              <div className="sm:col-span-2 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-xl">
                <Sparkles className="w-10 h-10 mb-6 text-[#c9a7ff]" />

                <h3 className="text-2xl font-bold mb-6 text-white">
                  Certifications Supported
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {certifications.map((cert, index) => (
                    <Link
                      key={index}
                      to={cert.link}
                      className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#e5d4ff] font-semibold hover:bg-white/10 hover:border-[#c9a7ff]/40 hover:scale-105 transition-all duration-200"
                    >
                      {cert.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING DELIVERY FORMATS ================= */}
      <section className="relative py-28 px-6 lg:px-12 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070a14] via-[#0f172a] to-[#0b1020]" />

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* HEADER */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Flexible Learning <span className="text-purple-300">Options</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto text-sm sm:text-base leading-7">
            We design learning experiences that adapt to professionals, teams,
            and enterprise organizations — without compromising structure,
            quality, or certification outcomes.
          </p>

          {/* GRID */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* LIVE VIRTUAL */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-purple-500/20">
                  <Globe className="w-5 h-5 text-purple-300" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Live Virtual Training
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-7">
                Instructor-led online sessions designed for working
                professionals who need flexibility without losing real-time
                engagement.
              </p>
            </div>

            {/* CORPORATE ONSITE */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-blue-500/20">
                  <Users className="w-5 h-5 text-blue-300" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Corporate Onsite Programs
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-7">
                Tailored training delivered directly within organizations to
                align teams, improve delivery standards, and build internal PM
                capability.
              </p>
            </div>

            {/* WEEKEND COHORTS */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-green-500/20">
                  <Calendar className="w-5 h-5 text-green-300" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Weekend Cohorts
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-7">
                Structured weekend-based learning designed for professionals
                balancing full-time roles and certification preparation.
              </p>
            </div>

            {/* HYBRID */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-indigo-500/20">
                  <Layers className="w-5 h-5 text-indigo-300" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Hybrid Learning
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-7">
                A blended model combining virtual sessions and guided support
                for maximum flexibility and reinforcement.
              </p>
            </div>

            {/* EXECUTIVE PRIVATE */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-pink-500/20">
                  <Crown className="w-5 h-5 text-pink-300" />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  Private Executive Training
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-7">
                High-touch, customized coaching for senior professionals and
                executives focused on strategic project leadership.
              </p>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us">
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition">
                Request Corporate Training
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section className="relative min-h-screen flex items-center px-5 sm:px-8 lg:px-12 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070a12] via-[#14102a] to-[#0b0f1a]" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#5b2cff]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#a67c52]/15 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-6xl mx-auto w-full">
          {/* HEADER */}
          <div className="text-center px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[#e7dcff] font-semibold text-xs sm:text-sm">
              <BookOpen className="w-4 h-4 text-[#c9a7ff]" />
              The Belief That Drives Us
            </div>

            <h2 className="mt-8 sm:mt-10 text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Clarity Creates Confidence.
              <span className="block mt-2 sm:mt-3 text-[#c9a7ff]">
                Structure Creates Success.
              </span>
            </h2>
          </div>

          {/* CARDS */}
          <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* CARD 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5b2cff]/10 to-transparent blur-2xl rounded-[28px]" />

              <div className="relative h-full p-6 sm:p-8 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#5b2cff]/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 sm:w-6 h-5 sm:h-6 text-[#c9a7ff]" />
                  </div>

                  <span className="text-xs sm:text-sm uppercase tracking-wider text-[#c9a7ff] font-semibold">
                    Clarity
                  </span>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-7 sm:leading-8">
                  We believe no professional should feel lost in their
                  certification journey.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a67c52]/15 to-transparent blur-2xl rounded-[28px]" />

              <div className="relative h-full p-6 sm:p-8 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#a67c52]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-[#e0c3a0]" />
                  </div>

                  <span className="text-xs sm:text-sm uppercase tracking-wider text-[#e0c3a0] font-semibold">
                    Growth
                  </span>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-7 sm:leading-8">
                  We believe the right guidance transforms not only exam results
                  — but careers.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a7ff]/10 to-[#5b2cff]/10 blur-2xl rounded-[28px]" />

              <div className="relative h-full p-6 sm:p-8 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#c9a7ff]/20 flex items-center justify-center">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-[#c9a7ff]" />
                  </div>

                  <span className="text-xs sm:text-sm uppercase tracking-wider text-[#c9a7ff] font-semibold">
                    Certainty
                  </span>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-7 sm:leading-8">
                  And we believe success should never depend on guesswork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 overflow-hidden">
        {/* BACKGROUND: Purple Ombre + Blush + Navy */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070712] via-[#2a0a3d] to-[#0b1b3a]" />

        {/* Blush Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-400/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Purple Glow */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-3xl rounded-full translate-x-1/3" />

        {/* Navy Glow */}
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-indigo-900/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/3" />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto text-center text-white">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-slate-200 font-semibold text-sm">
            <Target className="w-4 h-4 text-pink-300" />
            This Is Still The Beginning
          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Built From A Problem.
            <span className="block bg-gradient-to-r from-pink-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              Committed To Transformation.
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-slate-200 leading-9">
            Skylartech Limited continues to grow globally as a PMI® Premier
            Authorized Training Partner trusted by professionals pursuing
            globally recognized certifications.
          </p>

          {/* TAGS */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <div className="px-6 py-4 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl font-semibold text-pink-200 shadow-lg">
              Built From A Problem
            </div>

            <div className="px-6 py-4 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl font-semibold text-violet-200 shadow-lg">
              Driven By Clarity
            </div>

            <div className="px-6 py-4 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl font-semibold text-indigo-200 shadow-lg">
              Focused On Transformation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
