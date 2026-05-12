import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";
import PMI from "../../assets/Homepage images/PMI.png";
import PMI2 from "../../assets/Homepage images/PMI2.png";
import Badge from "../../assets/Homepage images/Badge.png";
import Project from "../../assets/Homepage images/Project.jpg";
import Planning from "../../assets/Homepage images/Planning.jpg";
import ClientReview from "./ClientReview";
import Clientslider from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay for render
      }
    }
  }, [location]);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [Cert1, Cert2, Cert3, Cert4, GroupPhoto];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!startX) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // swipe left
      } else {
        handlePrev(); // swipe right
      }
    }

    setStartX(null);
  };
  return (
    <>
      <Helmet>
        <title>Skylartech Limited | PMI Premier ATP</title>

        <meta
          name="description"
          content="Skylartech Limited is a PMI Premier Authorized Training Partner delivering project management certification training, leadership development, consulting, and technology solutions globally."
        />
        <link rel="canonical" href="https://skylartech.co.ke" />
      </Helmet>
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-28">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
          style={{ backgroundImage: `url(${Project})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: CONVERSION COLUMN */}
          <div className="space-y-6 max-w-2xl">
            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Developing World-Class{" "}
              <span
                className="font-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #c084fc, #6366f1, #22d3ee, #34d399, #facc15, #fb923c, #f43f5e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "brightness(1.2) saturate(1.5)",
                }}
              >
                Project Leaders
              </span>
            </h1>

            {/* KEY VALUE POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
              {[
                "Official PMI® course content",
                "Globally trusted training partner",
                "Certification-ready pathways",
                "Expert-led practical training",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl px-4 py-3"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            {/* CTA ROW (OPTIMIZED) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/offerings/pmp-training">
                <button className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:bg-amber-400 transition">
                  Explore Certifications
                </button>
              </Link>

              <Link to="/contact-us">
                <button className="px-8 py-3 rounded-xl border border-white/40 text-white font-medium hover:bg-green-500 transition">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: TRUST + VISUAL STACK */}
          <div className="relative flex flex-col items-center justify-center space-y-10">
            {/* GLOW */}
            <div className="absolute w-[85%] h-[85%] bg-violet-300/20 blur-3xl rounded-full"></div>

            {/* PMI LOGOS */}
            <div className="relative flex items-center justify-center">
              <img
                src={PMI}
                alt="PMI"
                className="h-32 sm:h-40 lg:h-48 object-contain z-10 -mr-2 sm:-mr-3"
              />

              <img
                src={PMI2}
                alt="PMI2"
                className="h-32 sm:h-40 lg:h-48 object-contain z-10 -ml-2 sm:-ml-3"
              />
            </div>

            {/* TRUST BADGE STACK */}
            <div className="flex flex-col items-center text-center space-y-3">
              {/* BADGE IMAGE (BIGGER + MORE AUTHORITY) */}
              <img
                src={Badge}
                alt="PMI Badge"
                className="h-44 sm:h-40 md:h-48 lg:h-72 object-contain drop-shadow-xl"
              />

              {/* MODERN CLASSY LABEL */}
              <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                PMI® Premier Authorized Training Partner
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ================= ABOUT US ================= */}
      <div
        id="about-skylartech"
        className="relative py-28 overflow-hidden scroll-mt-28"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white">
            {/* SMALL LABEL */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
              <span className="text-sm text-white/80 tracking-wide">
                About Skylartech
              </span>
            </div>

            {/* HEADING */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Building Globally Competitive Project Leaders
              </h2>

              <p className="mt-6 text-white/75 text-lg leading-8 max-w-2xl">
                Skylartech Limited is a PMI® Premier Authorized Training Partner
                delivering globally recognized project management certification
                training, leadership development, consulting, and scalable
                technology solutions.
              </p>
            </div>

            {/* EXTRA CONTENT */}
            <div className="space-y-5 text-white/70 leading-7">
              <p>
                We help professionals, teams, and organizations strengthen
                project execution, governance, agile transformation, and digital
                capability through internationally aligned learning and
                enterprise consulting services.
              </p>

              <p>
                Our mission is to empower organizations with practical project
                leadership, globally recognized certifications, and scalable
                technology solutions that drive measurable business impact.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { number: "PMI®", label: "Premier ATP" },
                { number: "Global", label: "Standards" },
                { number: "Enterprise", label: "Consulting" },
                { number: "Scalable", label: "Technology" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-md"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.number}
                  </h3>

                  <p className="text-white/60 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* BACKGROUND GLOW */}
            <div className="absolute w-[90%] h-[90%] bg-violet-500/25 blur-3xl rounded-full" />

            {/* DECORATIVE GRADIENT RING */}
            <div className="absolute w-[105%] h-[105%] rounded-[2.5rem] bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400 opacity-30 blur-xl" />

            {/* FLOATING CARD - TOP LEFT */}
            <div className="absolute -top-6 -left-4 sm:-left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-white text-xs sm:text-sm font-semibold">
                PMI® Premier ATP
              </p>
              <p className="text-white/70 text-[11px] sm:text-xs">
                Globally trusted training partner
              </p>
            </div>

            {/* FLOATING CARD - BOTTOM RIGHT */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
              <h4 className="text-white text-lg font-bold">10+</h4>
              <p className="text-white/70 text-xs sm:text-sm">
                Certification pathways
              </p>
            </div>

            {/* IMAGE WRAPPER */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              {/* IMAGE */}
              <img
                src={Planning}
                alt="Planning"
                className="
        w-full
        max-w-2xl
        h-[420px] sm:h-[500px] lg:h-[580px]
        object-cover
        scale-105
        hover:scale-110
        transition-transform
        duration-700
      "
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    Driving Project Excellence
                  </h3>

                  <p className="text-white/75 text-sm sm:text-base mt-2 leading-7">
                    Empowering professionals and organizations through globally
                    recognized project management training, consulting, and
                    digital transformation solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div
        id="why-choose-us"
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden scroll-mt-28"
      >
        {/* PREMIUM GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#f97316]" />

        {/* SOFT DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* LARGE GLOW EFFECTS */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-yellow-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-orange-300/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 text-white">
            {/* SMALL LABEL */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="text-xs sm:text-sm tracking-wide text-white/90">
                Why Organizations Choose Skylartech
              </span>
            </div>

            {/* HEADING */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Training Excellence.
                <br />
                Consulting Expertise.
                <br />
                Technology Innovation.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-white/85 leading-8 max-w-2xl">
                We help professionals and organizations build stronger project
                leadership, improve execution capability, and accelerate digital
                transformation through globally recognized training, enterprise
                consulting, and scalable technology solutions.
              </p>
            </div>

            {/* VALUE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Globally Recognized Training",
                  desc: "Professional certification programs aligned with international standards.",
                },
                {
                  title: "Real-World Expertise",
                  desc: "Practical learning led by experienced industry professionals.",
                },
                {
                  title: "Business Transformation",
                  desc: "Consulting solutions focused on governance, agility, and delivery excellence.",
                },
                {
                  title: "Technology Solutions",
                  desc: "Scalable software engineering and digital transformation support.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
              bg-white/10
              backdrop-blur-md
              border border-white/20
              rounded-2xl
              p-5
              hover:bg-white/15
              transition-all
              duration-300
            "
                >
                  <h3 className="font-semibold text-white text-base">
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-sm leading-6 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/offerings/pmp-training"
                className="
            px-7 py-3
            rounded-2xl
            bg-white
            text-black
            font-medium
            hover:bg-gray-200
            transition
            text-center
            shadow-xl
          "
              >
                Explore Training
              </Link>

              <Link
                to="/contact-us"
                className="
            px-7 py-3
            rounded-2xl
            bg-white/10
            border border-white/20
            backdrop-blur-md
            text-white
            hover:bg-white/20
            transition
            text-center
          "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ================= RIGHT PREMIUM CAROUSEL ================= */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="
        relative
        h-[420px]
        sm:h-[520px]
        lg:h-[640px]
        flex
        items-center
        justify-center
      "
          >
            {/* GLOW */}
            <div className="absolute w-[85%] h-[85%] bg-white/15 blur-3xl rounded-full" />

            {/* GLASS BACK PANEL */}
            <div className="absolute w-[92%] h-[92%] rounded-[3rem] bg-white/10 backdrop-blur-sm border border-white/10 shadow-2xl" />

            {/* IMAGE STACK */}
            <div className="relative w-full h-full flex items-center justify-center">
              {images.map((img, i) => {
                const total = images.length;

                let offset = i - activeIndex;

                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isActive = i === activeIndex;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-full flex justify-center"
                    animate={{
                      y: offset * 70,
                      x: offset * offset * 14,
                      rotateZ: offset * 2,
                      scale: isActive ? 1 : 0.84,
                      opacity: Math.abs(offset) > 2 ? 0 : 1,
                      zIndex: isActive ? 20 : 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative w-[88%] h-[280px] sm:h-[380px] lg:h-[460px]">
                      {/* IMAGE */}
                      <img
                        src={img}
                        alt={`slide-${i}`}
                        className="
                    w-full
                    h-full
                    object-cover
                    rounded-[2rem]
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                    border border-white/20
                  "
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= CERTIFICATION PROGRAMS ================= */}
      <div
        id="certification-programs"
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden scroll-mt-28"
      >
        {/* PREMIUM GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#312e81] via-[#6d28d9] to-[#f97316]" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-400/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-300/20 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-fuchsia-400/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= HEADER ================= */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="text-sm text-white/90 tracking-wide">
                Professional Certification Programs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.25] pb-2 overflow-visible tracking-tight">
              Build World-Class
              <span className="block bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent leading-[1.2]">
                Project Leadership Capability
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/80 leading-8 max-w-3xl mx-auto">
              PMI® certification pathways designed to build globally competitive
              project leaders, agile professionals, and high-performing
              organizations.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* ================= CORE CERTIFICATIONS ================= */}
            <div
              className="
          bg-white/10
          backdrop-blur-xl
          border border-white/15
          rounded-[2rem]
          p-6 sm:p-8
          shadow-2xl
          hover:bg-white/15
          hover:-translate-y-2
          transition-all
          duration-500
        "
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-yellow-200">01</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Core Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Foundational and advanced project leadership certifications
                aligned with globally recognized PMI® standards.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Certified Associate in Project Management (CAPM)®",
                    desc: "Build foundational project management knowledge and prepare for entry-level project leadership roles.",
                  },
                  {
                    title: "Project Management Professional (PMP)®",
                    desc: "Advance your career with the world’s leading certification for experienced project managers.",
                  },
                  {
                    title: "Program Management Professional (PgMP)®",
                    desc: "Develop advanced capability in managing multiple strategic programs.",
                  },
                  {
                    title: "Portfolio Management Professional (PfMP)®",
                    desc: "Lead enterprise-wide portfolio governance and strategic execution.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-yellow-300/70 pl-4">
                    <h4 className="font-semibold text-white text-base leading-7">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-white/70 leading-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SPECIALIZED CERTIFICATIONS ================= */}
            <div
              className="
          bg-white/10
          backdrop-blur-xl
          border border-white/15
          rounded-[2rem]
          p-6 sm:p-8
          shadow-2xl
          hover:bg-white/15
          hover:-translate-y-2
          transition-all
          duration-500
        "
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-orange-200">02</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Specialized Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Advanced capability development across agile, risk, business
                analysis, PMO leadership, scheduling, and AI.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "PMI Agile Certified Practitioner (PMI-ACP)®",
                    desc: "Master agile principles, Scrum, Kanban, Lean, and adaptive delivery approaches.",
                  },
                  {
                    title: "PMI Risk Management Professional (PMI-RMP)®",
                    desc: "Strengthen advanced project risk identification, analysis, and response capability.",
                  },
                  {
                    title: "PMI Professional in Business Analysis (PMI-PBA)®",
                    desc: "Develop business analysis expertise and stakeholder requirements management skills.",
                  },
                  {
                    title: "PMI Scheduling Professional (PMI-SP)®",
                    desc: "Enhance scheduling capability for complex project environments.",
                  },
                  {
                    title: "PMI Construction Professional (PMI-CP)™",
                    desc: "Build specialized capability for construction project environments.",
                  },
                  {
                    title: "PMI PMO Certified Professional (PMI-PMOCP)™",
                    desc: "Develop modern PMO leadership and organizational transformation capability.",
                  },
                  {
                    title:
                      "PMI Certified Professional in Managing AI (PMI-CPMAI)™",
                    desc: "Learn how to manage AI-enabled project and organizational environments.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-orange-300/70 pl-4">
                    <h4 className="font-semibold text-white text-base leading-7">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-white/70 leading-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SUSTAINABILITY ================= */}
            <div
              className="
          bg-white/10
          backdrop-blur-xl
          border border-white/15
          rounded-[2rem]
          p-6 sm:p-8
          shadow-2xl
          hover:bg-white/15
          hover:-translate-y-2
          transition-all
          duration-500
        "
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-200">03</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Sustainability Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Sustainability-focused project management pathways designed for
                modern responsible organizations.
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-green-300/70 pl-4">
                  <h4 className="font-semibold text-white text-base leading-7">
                    Green Project Manager–Basic (GPM-b)™
                  </h4>

                  <p className="mt-1 text-sm text-white/70 leading-6">
                    Integrate sustainability practices into modern project
                    delivery.
                  </p>
                </div>
              </div>

              {/* FEATURE CARD */}
              <div className="mt-10 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 p-6 shadow-2xl border border-white/10">
                <h4 className="text-2xl font-semibold text-white">
                  Future-Ready Leadership
                </h4>

                <p className="mt-3 text-white/85 leading-7 text-sm">
                  Prepare professionals and organizations for sustainable,
                  resilient, and globally aligned project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= OUR EXPERTISE ================= */}
      <div
        id="our-expertise"
        className="relative py-24 lg:py-32 overflow-hidden scroll-mt-32"
      >
        {/* PREMIUM BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950" />

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 blur-3xl rounded-full" />

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto">
            {/* LABEL */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm tracking-wide text-white/90">
                Enterprise Capability & Professional Excellence
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Our Expertise
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/75 leading-8">
              We support organizations across project delivery, agile
              transformation, PMO capability, risk management, scheduling,
              business analysis, AI-enabled project environments, and digital
              transformation through training, consulting, and scalable
              technology solutions.
            </p>
          </div>

          {/* EXPERTISE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {/* CARD 1 */}
            <div
              className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          p-8 sm:p-10
          hover:-translate-y-2
          hover:bg-white/15
          transition-all duration-500
        "
            >
              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-400/10 blur-3xl rounded-full" />

              {/* NUMBER */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">01</span>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Professional Training & Certification
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We deliver globally aligned project management and
                  certification preparation programs across project, program,
                  portfolio, agile, PMO, scheduling, risk, business analysis,
                  AI, and sustainability disciplines designed to strengthen
                  leadership capability and organizational execution
                  performance.
                </p>

                {/* FEATURE TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "PMP®",
                    "CAPM®",
                    "PMI-ACP®",
                    "PgMP®",
                    "AI Project Management",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          p-8 sm:p-10
          hover:-translate-y-2
          hover:bg-white/15
          transition-all duration-500
        "
            >
              {/* CARD GLOW */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full" />

              {/* NUMBER */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">02</span>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Consulting & Organizational Transformation
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We help organizations improve governance structures, PMO
                  maturity, agile capability, operational efficiency, leadership
                  performance, and strategic project execution through tailored
                  transformation initiatives and enterprise consulting services.
                </p>

                {/* FEATURE TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "PMO",
                    "Agile",
                    "Risk Management",
                    "Governance",
                    "Transformation",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          p-8 sm:p-10
          hover:-translate-y-2
          hover:bg-white/15
          transition-all duration-500
        "
            >
              {/* CARD GLOW */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-fuchsia-400/10 blur-3xl rounded-full" />

              {/* NUMBER */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">03</span>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Technology & Software Engineering Solutions
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We provide scalable software engineering teams and digital
                  transformation solutions that help organizations modernize
                  operations, improve delivery capability, automate workflows,
                  and strengthen business performance in rapidly evolving
                  environments.
                </p>

                {/* FEATURE TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Web Applications",
                    "Digital Transformation",
                    "Engineering Teams",
                    "Automation",
                    "Scalable Systems",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR CLIENTS */}
      <div id="our-clients" className="relative scroll-mt-28 overflow-hidden">
        {/* 🌈 BACKGROUND (UNCHANGED) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900" />

        {/* ✨ GLOW EFFECTS */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full" />

        {/* 🌓 OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          {/* ================= HEADER (EXPERTISE STYLE) ================= */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              Enterprise Partnerships & Client Success
            </h2>

            <h3 className="text-lg sm:text-xl text-white/80 font-medium mt-6 leading-8">
              We support organizations across banking, telecommunications,
              government, NGOs, technology, construction, and manufacturing
              through training, consulting, and digital transformation solutions
              that strengthen execution capability and deliver measurable
              impact.
            </h3>

            {/* INDUSTRIES / FEATURE TAGS */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Banking & Financial Services",
                "Telecommunications",
                "Government & Public Sector",
                "Information Technology",
                "Construction & Infrastructure",
                "NGOs & Development",
                "Manufacturing",
                "Education",
                "Supply Chain",
                "Healthcare",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ================= FLOWING COMPONENT STACK ================= */}
          <div className="flex flex-col">
            {/* CLIENT LOGOS */}
            <div className="relative -mt-4">
              <Clientslider />
            </div>

            {/* IMPACT STATS */}
            <div className="relative -mt-12">
              <CountUp />
            </div>

            {/* TESTIMONIALS */}
            <div className="relative -mt-20">
              <ClientReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
