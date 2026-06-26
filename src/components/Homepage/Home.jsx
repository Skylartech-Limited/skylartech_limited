import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Building2,
  Globe,
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
  Award,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Membership from "../../assets/Membership.jpg";
import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";
import PMI from "../../assets/Homepage images/PMI.png";
import PMI2 from "../../assets/Homepage images/PMI2.png";
import Project from "../../assets/Homepage images/Project.jpg";
import Planning from "../../assets/Homepage images/Planning.jpg";
import ClientReview from "./ClientReview";
import Clientslider from "./ClientSlider";
import CountupSection from "../Homepage/CountUp";
import PromoImage from "../../assets/Homepage images/Promo.jpeg";
import PromoImage2 from "../../assets/Homepage images/Promo2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80">
    {children}
  </div>
);

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
        <title>
          Skylartech Limited | PMI® Premier Authorized Training Partner
        </title>

        <meta
          name="description"
          content="Skylartech Limited is a PMI® Authorized Training Partner in Nairobi, Kenya offering PMP training, Agile certification, and PMO consulting. Advance your project management career with expert-led courses."
        />

        <meta
          name="keywords"
          content="
          PMP training,
      PMP training Kenya,
      PMI Authorized Training Partner Kenya,
      project management courses Nairobi,
      PMP exam preparation Nairobi,
      Agile certification Kenya,
      PMO consulting Kenya,
      project management training Kenya,
      Skylartech Limited
    "
        />

        {/* Canonical (VERY IMPORTANT for SEO) */}
        <link rel="canonical" href="https://skylartech.co.ke/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="PMP Training Kenya | Skylartech Limited"
        />
        <meta
          property="og:description"
          content="Skylartech Limited is a PMI® Premier Authorized Training Partner based in Nairobi, Kenya. We provide PMP certification training, Agile courses, and PMO consulting services to help professionals advance their project management careers."
        />
        <meta property="og:type" content="website" />

        <meta name="author" content="Skylartech Limited" />
        <meta name="robots" content="index, follow" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PMP Training Kenya | Skylartech Limited"
        />
        <meta
          name="twitter:description"
          content="PMI® Authorized Training Partner offering PMP, Agile certification, and PMO consulting in Nairobi, Kenya."
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
            sameAs: [
              "https://www.linkedin.com/company/skylartech",
              "https://twitter.com/skylartech",
            ],
          })}
        </script>
      </Helmet>
      {/* ================= HERO ================= */}
      <div
        className="relative min-h-[100svh] flex items-center overflow-hidden
pt-40 sm:pt-44 md:pt-48 lg:pt-36 xl:pt-40
px-4 sm:px-6 lg:px-12
pb-14 sm:pb-20 lg:pb-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Project})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-[#060607]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />

        <div className="absolute top-0 left-0 w-[200px] sm:w-[350px] lg:w-[550px] h-[200px] sm:h-[350px] lg:h-[550px] bg-violet-500/12 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] lg:w-[550px] h-[200px] sm:h-[350px] lg:h-[550px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-6 lg:space-y-8"
          >
            <SectionLabel>
              <Award className="w-3.5 h-3.5 text-violet-300" />
              PMI® Premier Authorized Training Partner
            </SectionLabel>

            <h1 className="font-bold text-white leading-[1.1] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Empowering Professionals & Organizations
              <span className="block mt-3 text-white/75 font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                to deliver projects with
              </span>
              <span className="block mt-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 text-base sm:text-lg md:text-xl lg:text-2xl">
                Confidence · Agility · Global Standards
              </span>
            </h1>

            <p className="text-white/65 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
              Bridging certification knowledge with real-world execution through
              structured, practice-driven project management training.
            </p>

            <div>
              <CountupSection />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/about"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/offerings/professional-training-and-certification"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Explore Certifications
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-[10px] sm:text-xs text-white/40 tracking-wide">
              Trusted by PMP®, CAPM®, and PMI® certified professionals globally
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end w-full px-2 sm:px-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
              {/* ================= SLIDER ================= */}
              <div className="rounded-3xl overflow-hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4200,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                  }}
                  className="h-full [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
                >
                  {/* ================= SLIDE 1 ================= */}
                  <SwiperSlide className="h-auto">
                    <div
                      className="
              h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px]
              flex flex-col items-center justify-center text-center
              bg-[#0f172a]/80 backdrop-blur-2xl
              border border-white/10 rounded-3xl
              px-5 sm:px-6 md:px-8
              shadow-[0_25px_80px_rgba(0,0,0,0.65)]
              relative overflow-hidden
            "
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

                      <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-violet-200/90 bg-violet-500/15 border border-violet-300/20 px-3 sm:px-4 py-2 rounded-full">
                        Accreditation
                      </span>

                      {/* LOGOS */}
                      <div className="flex items-center justify-center mt-5">
                        <img
                          src={PMI}
                          alt="PMI"
                          className="h-16 sm:h-20 md:h-28 lg:h-36 object-contain"
                        />

                        <img
                          src={PMI2}
                          alt="PMI2"
                          className="h-16 sm:h-20 md:h-28 lg:h-36 object-contain -ml-4 sm:-ml-6 md:-ml-8"
                        />
                      </div>

                      <p className="text-white/80 text-xs sm:text-sm md:text-base mt-4 max-w-md">
                        Skylartech is a Premier Authorized Training Partner of
                        PMI
                      </p>
                    </div>
                  </SwiperSlide>

                  {/* ================= SLIDE 2 ================= */}
                  <SwiperSlide className="h-auto">
                    <div
                      className="
              h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px]
              flex items-stretch justify-center
              bg-[#0f172a]/80 backdrop-blur-2xl
              border border-white/10 rounded-3xl
              overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,0.65)]
              relative
            "
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent z-10" />

                      <img
                        src={Membership}
                        alt="Membership"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* ================= PAGINATION ================= */}
              <div className="custom-pagination flex justify-center mt-4 gap-2"></div>

              {/* ================= PREMIUM PROMOTIONAL CARD ================= */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group mt-6 relative overflow-hidden rounded-[24px] sm:rounded-[28px]
  border border-white/10
  bg-white/[0.03]
  shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
              >
                {/* Glow Effects */}
                <div className="absolute -top-20 -left-20 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-violet-500/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

                <div className="absolute -bottom-20 -right-20 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

                {/* ================= PROMO SLIDER ================= */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".promo-pagination",
                    clickable: true,
                  }}
                  className="relative z-10"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <img
                      src={PromoImage}
                      alt="Promotional Banner 1"
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <img
                      src={PromoImage2}
                      alt="Promotional Banner 2"
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </SwiperSlide>
                </Swiper>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent z-10" />

                {/* CTA */}
                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20">
                  <Link
                    to="/pdu"
                    className="group/btn inline-flex items-center gap-2
      rounded-xl sm:rounded-2xl
      bg-gradient-to-r from-violet-600 to-indigo-600
      px-4 py-2.5 sm:px-5 sm:py-3
      text-xs sm:text-sm font-semibold text-white
      shadow-lg shadow-violet-500/20
      transition-all duration-300
      hover:scale-105 hover:shadow-violet-500/40"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* ================= PROMO PAGINATION ================= */}
              <div className="custom-pagination flex justify-center mt-4 gap-2"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= ABOUT US ================= */}
      <div
        id="about-skylartech"
        className="relative py-28 overflow-hidden scroll-mt-28 border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/12 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8 text-white"
          >
            <SectionLabel>About Skylartech</SectionLabel>

            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Building Globally Competitive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300">
                  Project Leaders
                </span>
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { number: "PMI®", label: "Premier ATP" },
                { number: "Global", label: "Standards" },
                { number: "Enterprise", label: "Consulting" },
                { number: "Scalable", label: "Technology" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.number}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative flex justify-center items-center"
          >
            <div className="absolute w-[90%] h-[90%] bg-violet-500/20 blur-[100px] rounded-full" />
            <div className="absolute w-[105%] h-[105%] rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 via-fuchsia-400/15 to-cyan-400/20 blur-xl" />

            <div className="absolute -top-6 -left-4 sm:-left-8 z-20 bg-white/[0.06] backdrop-blur-2xl border border-white/15 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-white text-xs sm:text-sm font-semibold">
                PMI® Premier ATP
              </p>
              <p className="text-white/60 text-[11px] sm:text-xs">
                Globally trusted training partner
              </p>
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
              <h4 className="text-white text-lg font-bold">10+</h4>
              <p className="text-white/60 text-xs sm:text-sm">
                Certification pathways
              </p>
            </div>

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent z-10" />
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

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    Driving Project Excellence
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mt-2 leading-relaxed">
                    Empowering professionals and organizations through globally
                    recognized project management training, consulting, and
                    digital transformation solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div
        id="why-choose-us"
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden scroll-mt-28 border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#141008] to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_55%)]" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-orange-500/8 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8 text-white"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>
                Strategic Learning & Transformation Partner
              </SectionLabel>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Why Organizations</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
                  Choose Skylartech
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                We don't just deliver training — we build capability systems
                that improve how professionals think, execute, and lead across
                projects, teams, and enterprises.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  title: "PMI® Premier ATP Status",
                  desc: "Officially aligned with global PMI standards for certification excellence.",
                },
                {
                  title: "Real Project Leadership",
                  desc: "Training delivered by practitioners with hands-on delivery experience.",
                },
                {
                  title: "Africa + Global Perspective",
                  desc: "Programs shaped by local realities and international execution standards.",
                },
                {
                  title: "AI-Enabled Learning Systems",
                  desc: "Modern learning approaches enhanced with intelligent tools and insights.",
                },
                {
                  title: "Mentorship Beyond Exams",
                  desc: "Guidance that extends into career growth and professional development.",
                },
                {
                  title: "Execution-Focused Approach",
                  desc: "We emphasize real-world application over theoretical memorization.",
                },
                {
                  title: "Enterprise Transformation",
                  desc: "Helping organizations improve governance, delivery, and capability maturity.",
                },
                {
                  title: "Flexible Delivery Models",
                  desc: "Online, hybrid, and corporate training tailored to organizational needs.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] hover:border-amber-300/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/offerings/professional-training-and-certification"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book-training"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300 text-center"
              >
                Request a corporate proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CAROUSEL (UNCHANGED) ================= */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative h-[420px] sm:h-[520px] lg:h-[640px] flex items-center justify-center"
          >
            <div className="absolute w-[85%] h-[85%] bg-white/15 blur-3xl rounded-full" />
            <div className="absolute w-[92%] h-[92%] rounded-[3rem] bg-white/10 backdrop-blur-sm border border-white/10 shadow-2xl" />

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
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div className="relative w-[88%] h-[280px] sm:h-[380px] lg:h-[460px]">
                      <img
                        src={img}
                        alt={`slide-${i}`}
                        className="w-full h-full object-cover rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-white/20"
                      />
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
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden scroll-mt-28 border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-500/12 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-500/8 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-fuchsia-500/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionLabel>Professional Certification Programs</SectionLabel>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
              Build World-Class
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-fuchsia-200 to-orange-200">
                Project Leadership Capability
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-3xl mx-auto">
              PMI® certification pathways designed to build globally competitive
              project leaders, agile professionals, and high-performing
              organizations.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent mx-auto mt-8" />
          </motion.div>

          {/* ================= GRID ================= */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* ================= CORE CERTIFICATIONS ================= */}
            <div className="group relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-yellow-200">01</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Core Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Foundational and advanced project leadership certifications
                aligned with PMI® standards.
              </p>

              <div className="mt-8 space-y-4 flex-1">
                {[
                  {
                    title: "Certified Associate in Project Management (CAPM)®",
                    desc: "Build foundational project management knowledge and prepare for entry-level roles.",
                    link: "/certifications/capm",
                  },
                  {
                    title: "Project Management Professional (PMP)®",
                    desc: "Advance your career with the world’s leading certification.",
                    link: "/certifications/pmp",
                  },
                  {
                    title: "Program Management Professional (PgMP)®",
                    desc: "Manage multiple strategic programs.",
                    link: "/certifications/pgmp",
                  },
                  {
                    title: "Portfolio Management Professional (PfMP)®",
                    desc: "Lead enterprise portfolio governance.",
                    link: "/certifications/pfmp",
                  },
                ].map((item, i) => (
                  <Link key={i} to={item.link} className="block group">
                    <div className="border-l-2 border-yellow-300/70 pl-4 py-2 hover:pl-6 transition-all duration-300">
                      <h4 className="font-semibold text-white text-base group-hover:text-yellow-200">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-white/70">{item.desc}</p>

                      <span className="inline-flex items-center gap-1 text-xs text-yellow-200/70 opacity-0 group-hover:opacity-100 transition">
                        View certification
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= SPECIALIZED CERTIFICATIONS ================= */}
            <div className="group relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-orange-200">02</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Specialized Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Advanced capability across agile, risk, BA, PMO, scheduling, and
                AI.
              </p>

              <div className="mt-8 space-y-4 flex-1">
                {[
                  {
                    title: "PMI-ACP®",
                    desc: "Master agile principles and adaptive delivery.",
                    link: "/certifications/pmi-acp",
                  },
                  {
                    title: "PMI-RMP®",
                    desc: "Advanced project risk management.",
                    link: "/certifications/pmi-rmp",
                  },
                  {
                    title: "PMI-PBA®",
                    desc: "Business analysis expertise.",
                    link: "/certifications/pmi-pba",
                  },
                  {
                    title: "PMI-SP®",
                    desc: "Advanced scheduling capability.",
                    link: "/certifications/pmi-sp",
                  },
                  {
                    title: "PMI-CP®",
                    desc: "Construction project specialization.",
                    link: "/certifications/pmi-cp",
                  },
                  {
                    title: "PMI-PMOCP®",
                    desc: "PMO leadership excellence.",
                    link: "/certifications/pmi-pmocp",
                  },
                  {
                    title: "PMI-CPMAI®",
                    desc: "AI-driven project management.",
                    link: "/certifications/pmi-cpmai",
                  },
                ].map((item, i) => (
                  <Link key={i} to={item.link} className="block group">
                    <div className="border-l-2 border-orange-300/70 pl-4 py-2 hover:pl-6 transition-all duration-300">
                      <h4 className="font-semibold text-white group-hover:text-orange-200">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-white/70">{item.desc}</p>

                      <span className="inline-flex items-center gap-1 text-xs text-orange-200/70 opacity-0 group-hover:opacity-100 transition">
                        View certification
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= SUSTAINABILITY ================= */}
            <div className="group relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-black/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-200">03</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Sustainability Certifications
              </h3>

              <p className="mt-3 text-white/75 leading-7">
                Sustainability-focused project management pathways.
              </p>

              <div className="mt-8 flex-1">
                <Link to="/certifications/gpm-b" className="block group">
                  <div className="border-l-2 border-green-300/70 pl-4 py-2 hover:pl-6 transition-all duration-300">
                    <h4 className="font-semibold text-white group-hover:text-green-200">
                      GPM-b®
                    </h4>

                    <p className="mt-1 text-sm text-white/70">
                      Integrate sustainability into project delivery.
                    </p>

                    <span className="inline-flex items-center gap-1 text-xs text-green-200/70 opacity-0 group-hover:opacity-100 transition">
                      View certification
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= OUR EXPERTISE ================= */}
      <div
        id="our-expertise"
        className="relative py-24 lg:py-32 overflow-hidden scroll-mt-32 border-t border-white/5"
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionLabel>
              Enterprise Capability & Professional Excellence
            </SectionLabel>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-300 to-fuchsia-300">
                Expertise
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/65 leading-relaxed">
              We support organizations across project delivery, agile
              transformation, PMO capability, risk management, scheduling,
              business analysis, AI-enabled project environments, and digital
              transformation through training, consulting, and scalable
              technology solutions.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent mx-auto mt-8" />
          </motion.div>

          {/* EXPERTISE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {/* CARD 1 */}
            <div
              className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white/[0.04]
          border border-white/10
          backdrop-blur-2xl
          p-8 sm:p-10
          hover:-translate-y-2
          hover:bg-white/[0.07]
          hover:border-white/20
          transition-all duration-500
          shadow-lg shadow-black/20
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
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/professional-training-and-certification"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
          bg-white/[0.04]
          border border-white/10
          backdrop-blur-2xl
          p-8 sm:p-10
          hover:-translate-y-2
          hover:bg-white/[0.07]
          hover:border-white/20
          transition-all duration-500
          shadow-lg shadow-black/20
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
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/consulting-and-organizational-transformation"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
    bg-white/[0.04]
    border border-white/10
    backdrop-blur-2xl
    p-8 sm:p-10
    hover:-translate-y-2
    hover:bg-white/[0.07]
    hover:border-white/20
    transition-all duration-500
    shadow-lg shadow-black/20
  "
            >
              {/* CARD GLOW */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-400/10 blur-3xl rounded-full" />

              {/* NUMBER */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">03</span>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Portfolio, PMO & Governance Excellence
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We help organizations establish high-performing PMOs, improve
                  portfolio governance, and align strategic initiatives with
                  business outcomes using globally recognized PMI® frameworks
                  and maturity models.
                </p>

                {/* FEATURE TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "PMO Design",
                    "Portfolio Management",
                    "Governance Frameworks",
                    "Strategy Execution",
                    "Maturity Models",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/portfolio-pmo-and-governance-excellence"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div
              className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/[0.04]
    border border-white/10
    backdrop-blur-2xl
    p-8 sm:p-10
    hover:-translate-y-2
    hover:bg-white/[0.07]
    hover:border-white/20
    transition-all duration-500
    shadow-lg shadow-black/20
  "
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">04</span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Agile & Adaptive Delivery Excellence
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We enable organizations to adopt Agile frameworks such as
                  Scrum, Kanban, and SAFe to improve delivery speed,
                  flexibility, and customer value.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Scrum",
                    "Kanban",
                    "SAFe",
                    "Lean Thinking",
                    "Agile Coaching",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/agile-and-adaptive-delivery-excellence"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div
              className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/[0.04]
    border border-white/10
    backdrop-blur-2xl
    p-8 sm:p-10
    hover:-translate-y-2
    hover:bg-white/[0.07]
    hover:border-white/20
    transition-all duration-500
    shadow-lg shadow-black/20
  "
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">05</span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Risk, Compliance & Assurance
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We strengthen organizational resilience through structured
                  risk management, compliance frameworks, and governance
                  assurance models aligned with PMI® standards.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Risk Identification",
                    "Mitigation",
                    "Audits",
                    "Controls",
                    "Assurance",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/risk-compliance-and-assurance"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div
              className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/[0.04]
    border border-white/10
    backdrop-blur-2xl
    p-8 sm:p-10
    hover:-translate-y-2
    hover:bg-white/[0.07]
    hover:border-white/20
    transition-all duration-500
    shadow-lg shadow-black/20
  "
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-400/10 blur-3xl rounded-full" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">06</span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-semibold text-white leading-snug">
                  Business Analysis & Requirements Engineering
                </h3>

                <p className="mt-5 text-white/75 leading-8 text-base">
                  We help organizations define clear business requirements,
                  improve stakeholder alignment, and ensure project success
                  through structured analysis and documentation practices.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Requirements",
                    "Stakeholders",
                    "Analysis",
                    "Documentation",
                    "Value Delivery",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/offerings/business-analysis-and-requirements-gathering"
                    className="group/link inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR CLIENTS ================= */}
      <div
        id="clients"
        className="relative scroll-mt-28 overflow-hidden min-h-screen flex items-center border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#070A14] via-[#1B1035] to-[#2A1B3D]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <SectionLabel>Enterprise Partnerships</SectionLabel>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Trusted Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
                  Industries
                </span>
              </h2>

              <h3 className="text-base sm:text-lg lg:text-xl text-white/65 font-normal mt-6 leading-relaxed">
                We help organizations across banking, telecom, government, NGOs,
                and industry improve execution through training, project
                consulting, and digital transformation.
              </h3>

              <div className="mt-10 space-y-3">
                {[
                  {
                    icon: Building2,
                    text: "Trusted by enterprise institutions across Africa & global markets",
                  },
                  {
                    icon: Globe,
                    text: "Cross-industry delivery across banking, telecom, government & NGOs",
                  },
                  {
                    icon: Briefcase,
                    text: "Consulting-led approach focused on execution, not theory",
                  },
                  {
                    icon: Layers,
                    text: "End-to-end capability: training, transformation & advisory",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Proven impact in project delivery maturity & governance systems",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-white/75 bg-white/[0.03] border border-white/8 rounded-2xl p-4 hover:bg-white/[0.06] hover:border-violet-300/15 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-violet-300 mt-0.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-left">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* ================= INDUSTRY TAGS ================= */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
                {[
                  {
                    name: "Banking & Financial Services",
                    link: "/industries/banking-and-finance",
                  },
                  {
                    name: "Telecommunications",
                    link: "/industries/telecommunications",
                  },
                  {
                    name: "Government & Public Sector",
                    link: "/industries/government",
                  },
                  { name: "NGOs & Development", link: "/industries/ngos" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full
              bg-white/[0.04] border border-white/10 text-white/75 text-sm
              backdrop-blur-xl hover:bg-white/[0.08] hover:border-violet-300/20 hover:text-white transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* HEALTHCARE FIXED (separate, outside map) */}
                <div className="w-full flex justify-center lg:justify-start mt-2">
                  <Link
                    to="/industries/healthcare"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full
              bg-white/[0.04] border border-white/10 text-white/75 text-sm
              backdrop-blur-xl hover:bg-white/[0.08] hover:border-violet-300/20 hover:text-white transition-all duration-300"
                  >
                    Healthcare
                  </Link>
                </div>
              </div>

              <p className="mt-8 text-white/40 text-sm tracking-wide">
                Trusted by leading organizations across Africa and global
                markets
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
                <div className="text-white/80 text-sm mb-4 text-center lg:text-left">
                  Featured Client Network
                </div>

                <div className="min-h-[140px] sm:min-h-[180px] flex items-center justify-center">
                  <Clientslider />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div
        id="testimonials"
        className="relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/90 to-slate-950" />
        <div className="absolute top-[-180px] right-[-180px] w-[550px] h-[550px] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] left-[-180px] w-[550px] h-[550px] bg-fuchsia-500/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 px-6 lg:px-12 py-24 max-w-7xl mx-auto">
          {/* TESTIMONIALS */}
          <ClientReview />
        </div>
      </div>
    </>
  );
};

export default Home;
