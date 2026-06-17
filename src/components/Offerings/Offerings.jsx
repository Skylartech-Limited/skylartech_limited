import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Workflow,
  BarChart3,
  Building2,
  CheckCircle2,
} from "lucide-react";

import HeroImage from "../../assets/Services image/Offerings.jpg";

const offerings = [
  {
    title: "Professional Training & Certification",
    icon: GraduationCap,
    link: "/offerings/professional-training-and-certification",
    description:
      "Globally recognized certification programs designed to build leadership and project management excellence.",
  },
  {
    title: "Consulting & Organizational Transformation",
    icon: Briefcase,
    link: "/offerings/consulting-and-organizational-transformation",
    description:
      "Strategic consulting that enables transformation, operational efficiency, and sustainable growth.",
  },
  {
    title: "Portfolio, PMO & Governance Excellence",
    icon: Building2,
    link: "/offerings/portfolio-pmo-and-governance-excellence",
    description:
      "Enterprise governance and PMO frameworks that maximize value delivery and strategic alignment.",
  },
  {
    title: "Agile & Adaptive Delivery Excellence",
    icon: Workflow,
    link: "/offerings/agile-and-adaptive-delivery-excellence",
    description:
      "Agile transformation and adaptive delivery approaches that improve speed and business agility.",
  },
  {
    title: "Risk, Compliance & Assurance",
    icon: ShieldCheck,
    link: "/offerings/risk-compliance-and-assurance",
    description:
      "Structured risk and compliance frameworks that strengthen organizational resilience.",
  },
  {
    title: "Business Analysis & Requirements Engineering",
    icon: BarChart3,
    link: "/offerings/business-analysis-and-requirements-gathering",
    description:
      "Transform business needs into clear requirements that drive successful delivery outcomes.",
  },
];

const Offerings = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#040b08] via-[#071a12] to-black text-white">
      {/* SEO */}
      <Helmet>
        <title>
         Our Offerings |
          Skylartech
        </title>
        <meta
          name="description"
          content="Skylartech offers professional training, consulting, governance frameworks, and transformation services to help organizations achieve project excellence at scale."
        />
        <meta
          name="keywords"
          content="project management training, PMO consulting, agile transformation, governance frameworks, enterprise consulting, Skylartech"
        />
        <link rel="canonical" href="https://skylartech.co.ke/offerings" />
      </Helmet>
      {/* PREMIUM BACKGROUND LAYERS */}
      <div className="hidden md:block absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />
      <div className="hidden md:block absolute top-1/3 right-0 w-[700px] h-[700px] bg-green-500/10 blur-[200px] rounded-full" />
      <div className="hidden md:block absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-lime-500/5 blur-[220px] rounded-full" />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#04130e]/80 to-black/95" />

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-emerald-200">
              Enterprise Project Management Solutions
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
              Building World-Class
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 leading-[1.25]">
                Project Excellence
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              We empower organizations with training, consulting, governance
              frameworks, and transformation expertise to deliver successful
              projects at scale.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book-training"
                className="px-7 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-semibold transition"
              >
                Book Training
              </Link>
              <Link
                to="/about"
                className="px-7 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + OFFERINGS (MERGED PREMIUM SECTION) */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[160px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* INTRO */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
              Built For Modern
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-400 leading-[1.2]">
                Organizations
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              Modern organizations require strategic leadership, governance
              maturity, and adaptive delivery capabilities. Our solutions are
              designed to build long-term project management excellence.
            </p>
          </div>

          {/* SECTION TITLE */}
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-400">
                Offerings
              </span>
            </h3>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  to={item.link}
                  className="group relative rounded-3xl border border-white/10
            bg-white/[0.04] backdrop-blur-xl p-6 sm:p-7 md:p-8
            hover:bg-white/[0.07] hover:-translate-y-2
            transition-all duration-500 ease-out
            shadow-lg shadow-black/30
            flex flex-col justify-between min-h-[230px]"
                >
                  {/* ICON */}
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-300" />
                  </div>

                  {/* TITLE */}
                  <h4 className="text-lg sm:text-xl font-semibold leading-snug">
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 text-emerald-300 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Explore Offering
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (RESTORED + PREMIUM) */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Organizations Choose{" "}
            <span className="text-emerald-300">Skylartech</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            We combine global best practices with deep industry expertise.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6 text-left">
            {[
              "Globally recognized certification pathways",
              "Experienced transformation consultants",
              "Industry-focused delivery expertise",
              "Agile & adaptive delivery frameworks",
              "Strong governance & compliance models",
              "Proven enterprise transformation results",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl
                bg-white/5 border border-white/10 backdrop-blur-xl
                hover:bg-white/10 transition"
              >
                <CheckCircle2 className="text-emerald-300 w-5 h-5 mt-1" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (PREMIUM + RESPONSIVE) */}
      <section className="py-20 sm:py-24 md:py-28 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[320px] sm:w-[450px] md:w-[600px] h-[320px] sm:h-[450px] md:h-[600px] bg-emerald-500/10 blur-[120px] sm:blur-[160px] md:blur-[180px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div
            className="p-6 sm:p-10 md:p-16 lg:p-20 rounded-2xl sm:rounded-3xl border border-white/10
      bg-white/[0.04] backdrop-blur-2xl shadow-xl shadow-black/20"
          >
            {/* heading */}
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-[1.2] sm:leading-[1.15]">
              Ready To Elevate
              <span className="block mt-1 sm:mt-2 text-emerald-300 leading-[1.2]">
                Your Organization?
              </span>
            </h2>

            {/* paragraph */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Partner with Skylartech to accelerate transformation and build
              long-term capability.
            </p>

            {/* button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                to="/book-training"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl
          bg-emerald-600 hover:bg-emerald-500 active:scale-95
          font-semibold text-white
          shadow-lg shadow-emerald-500/20
          transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;
