import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import {
  Briefcase,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Building2,
  Award,
  Globe,
  Users,
  Laptop,
} from "lucide-react";

import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";
import PMI from "../../assets/Homepage images/PMI.png";
import PMI2 from "../../assets/Homepage images/PMI2.png";
import Logo from "../../assets/Logo.png";

import ClientReview from "./ClientReview";
import Client from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
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
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 pt-28 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* MOBILE LOGO */}
          <div className="lg:hidden flex justify-center mb-8">
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={Logo}
              alt="SkylarTech Logo"
              className="
      w-[260px]
      sm:w-[320px]
      md:w-[380px]
      object-contain
    "
            />
          </div>

          {/* DESKTOP TOP RIGHT LOGO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block absolute top-0 right-0"
          >
            <img
              src={Logo}
              alt="SkylarTech Logo"
              className="
      w-[320px]
      xl:w-[420px]
      2xl:w-[500px]
      object-contain
    "
            />
          </motion.div>
          {/* HERO CONTENT */}
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            {/* TOP CONTENT AREA */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT SIDE - PMI LOGOS */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative flex items-center justify-center">
                  <motion.img
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={PMI}
                    alt="PMI 1"
                    className="
        h-[100px]
        sm:h-[120px]
        md:h-[150px]
        lg:h-[180px]
        xl:h-[200px]
        w-auto object-contain z-10
        -mr-5 sm:-mr-7
      "
                  />

                  <motion.img
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={PMI2}
                    alt="PMI 2"
                    className="
        h-[100px]
        sm:h-[120px]
        md:h-[150px]
        lg:h-[180px]
        xl:h-[200px]
        w-auto object-contain
        -ml-5 sm:-ml-1
      "
                  />
                </div>
              </div>

              {/* RIGHT SIDE EMPTY SPACE FOR LOGO */}
              <div className="hidden lg:block"></div>
            </div>

            {/* CENTER CONTENT */}
            <div className="mt-10 text-center max-w-4xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight">
                Developing World-Class{" "}
                <span
                  className="font-semibold"
                  style={{
                    background:
                      "linear-gradient(to right, violet, indigo, blue, green, #f1c40f, orange, red)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <Typewriter
                    words={[" Project Leaders"]}
                    loop={1}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <Cursor cursorStyle="" />
              </h2>

              {/* WHY CHOOSE US CARD */}
              <div className="mt-8 bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-7 max-w-2xl mx-auto">
                  As a Premier PMI Authorized Training Partner, we deliver
                  globally recognized PMI-accredited learning experiences
                  designed for real-world success.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    ✓ Official PMI course content
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    ✓ Globally trusted training partner
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    ✓ Certification-ready alignment
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    ✓ Expert-led practical learning
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-8 flex justify-center">
                <Link to="/contact-us">
                  <motion.button
                    className="
                border-2 border-purple-500
                bg-white
                hover:bg-violet-500
                hover:text-white
                transition-all duration-300
                text-black
                px-8 sm:px-10
                py-3 sm:py-4
                rounded-2xl
                text-base sm:text-lg
                font-medium
                shadow-lg
              "
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Let's Talk
                    <span className="ml-2 text-xl">→</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT SKYLARTECH */}
      <div id="about-skylartech" className="bg-amber-50 py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <Building2 className="w-10 h-10 text-amber-500" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Who we are
            </h1>

            <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto mt-6">
              PMI® Premier Authorized Training Partner delivering globally
              recognized project management training, leadership development,
              consulting, and scalable technology solutions.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 flex gap-4">
                <Award className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">PMI® Premier ATP</h2>
                  <p className="text-gray-700 leading-7">
                    Skylartech Limited is a Premier Authorized Training Partner
                    (ATP) of PMI, delivering globally recognized certification
                    training.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 flex gap-4">
                <Globe className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    Global Training & Consulting Excellence
                  </h2>
                  <p className="text-gray-700 leading-7">
                    We support banking, telecom, IT, procurement, and public
                    sector organizations through training and consulting.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 flex gap-4">
                <Users className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    Empowering Organizations
                  </h2>
                  <p className="text-gray-700 leading-7">
                    We equip professionals with skills and certification for
                    global success.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 flex gap-4">
                <Laptop className="w-6 h-6 text-violet-500 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    Technology & Software Engineering
                  </h2>
                  <p className="text-gray-700 leading-7">
                    We deliver scalable software solutions and engineering teams
                    for organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE - CURVED VERTICAL LINE */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-[550px] flex items-center justify-center overflow-hidden"
            >
              {/* soft glow background */}
              <div className="absolute w-[85%] h-[85%] bg-amber-200/30 blur-3xl rounded-full" />

              <div className="relative w-full h-full flex items-center justify-center">
                {images.map((img, i) => {
                  const total = images.length;

                  // distance from active image
                  let offset = i - activeIndex;

                  // wrap for infinite loop feel
                  if (offset > total / 2) offset -= total;
                  if (offset < -total / 2) offset += total;

                  const isActive = i === activeIndex;

                  return (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`slide-${i}`}
                      className="
            absolute
            w-[92%]   /* 🔥 wider images */
            h-[90%]
            object-cover
            rounded-3xl
            shadow-2xl
            border border-white/30
          "
                      animate={{
                        // 🔥 CURVED BENT LINE EFFECT
                        y: offset * 110, // vertical spacing
                        x: offset * offset * 18, // 🔥 creates the bend curve
                        rotateZ: offset * 3, // slight tilt for depth
                        scale: isActive ? 1 : 0.78, // focus center image
                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                        zIndex: isActive ? 10 : 1,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROFESSIONAL CERTIFICATION PROGRAMS */}
      <div
        id="certification-programs"
        className="py-20 bg-gray-50 scroll-mt-28"
      >
        <div className="px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-black text-center">
            Professional Certification Programs
          </h1>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mt-6 text-lg leading-8">
            PMI® certification pathways designed to build globally competitive
            project leaders, agile professionals, and high-performing
            organizations.
          </p>
        </div>

        {/* GRID (unchanged structure, only responsive spacing improved) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1.35fr_1fr] gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-10 mt-16 max-w-[2200px] mx-auto">
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                <Briefcase className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-amber-500 leading-tight">
                Core Certifications
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Certified Associate in Project Management (CAPM)®",
                "Project Management Professional (PMP)®",
                "Program Management Professional (PgMP)®",
                "Portfolio Management Professional (PfMP)®",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-amber-500 leading-tight">
                Specialized Certifications
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "PMI Construction Professional (PMI-CP)™",
                "PMI Agile Certified Practitioner (PMI-ACP)®",
                "PMI Risk Management Professional (PMI-RMP)®",
                "PMI PMO Certified Professional (PMI-PMOCP)™",
                "PMI Professional in Business Analysis (PMI-PBA)®",
                "PMI Scheduling Professional (PMI-SP)®",
                "PMI Certified Professional in Managing AI (PMI-CPMAI)™",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center shrink-0">
                <Leaf className="w-7 h-7 text-violet-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-amber-500 leading-tight">
                Sustainability & Green Project Management
              </h3>
            </div>

            <ul className="space-y-4">
              {["Green Project Manager–Basic (GPM-b)™"].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* OUR EXPERTISE */}
      <div id="our-expertise" className="bg-amber-50 py-20 scroll-mt-28">
        <div className="flex flex-col justify-center items-center px-6">
          <h1 className="text-4xl lg:text-5xl text-black text-center font-bold">
            Our Expertise
          </h1>

          <h3 className="text-lg text-gray-700 text-center max-w-4xl font-medium py-6 leading-8">
            We support organizations across project delivery, agile
            transformation, risk management, PMO capability, scheduling,
            business analysis, and AI-enabled project environments through
            training, consulting, and technology solutions.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mt-10">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-red-600">01</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Professional Training & Certification
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We deliver project management and certification preparation
              programs across project, program, portfolio, agile, risk, PMO,
              scheduling, business analysis, AI, and sustainability-focused
              disciplines designed to strengthen execution capability and
              leadership performance.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-slate-600">02</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Consulting & Organizational Transformation
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We help organizations improve governance, PMO capability,
              operational efficiency, leadership effectiveness, and strategic
              execution through tailored consulting and transformation
              initiatives.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-amber-600">03</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Technology & Software Engineering Solutions
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We provide dedicated software engineering teams and scalable
              technology solutions that support digital transformation,
              strengthen delivery capability, and improve business performance
              globally.
            </p>
          </div>
        </div>
      </div>

      {/* OUR CLIENTS */}
      <div id="our-clients" className="scroll-mt-28">
        <Client />
        <CountUp />
        <ClientReview />
      </div>
    </>
  );
};

export default Home;
