import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Building2,
  Landmark,
  Globe2,
  HeartPulse,
  Users,
} from "lucide-react";

import HeroImage from "../../assets/Industries/Industries.jpg";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "We help financial institutions modernize governance, strengthen compliance, and improve project delivery efficiency.",
    icon: Landmark,
    link: "/who-we-serve/banking-and-finance",
  },
  {
    title: "Telecommunications",
    description:
      "Supporting telcos with agile transformation, infrastructure delivery, and enterprise-scale project execution.",
    icon: Globe2,
    link: "/who-we-serve/telecommunications",
  },
  {
    title: "Government & Public Sector",
    description:
      "Enabling digital transformation, policy-driven delivery, and PMO maturity across public institutions.",
    icon: Building2,
    link: "/who-we-serve/government",
  },
  {
    title: "NGOs & Development",
    description:
      "Helping NGOs improve accountability, funding efficiency, and impact-driven program delivery.",
    icon: Users,
    link: "/who-we-serve/ngos",
  },
  {
    title: "Healthcare",
    description:
      "Improving healthcare systems through structured project governance and digital transformation delivery.",
    icon: HeartPulse,
    link: "/who-we-serve/healthcare",
  },
];

const WhoWeServe = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#050b1e] via-[#07142b] to-[#050b1e]">
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

        <link rel="canonical" href="https://skylartech.co.ke/who-we-serve" />
      </Helmet>
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute top-0 left-0 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-blue-600/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-sky-500/10 blur-[200px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-[600px] md:w-[700px] h-[600px] md:h-[700px] bg-indigo-500/10 blur-[220px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* ================= HERO ================= */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#050b1e]/80 to-[#07142b]/90" />

        {/* GLOW */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-blue-500/20 blur-[160px] rounded-full" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-sky-300 text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Industries We Empower
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.15] sm:leading-[1.1] md:leading-[1.05]">
            We Help Organizations Deliver
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Project Excellence at Scale
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            From financial institutions to public sector organizations, we
            partner with teams to strengthen governance, improve delivery
            capability, and drive successful transformation programs.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-training"
              className="px-6 sm:px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Talk to an Expert
            </Link>

            <Link
              to="/about"
              className="px-6 sm:px-8 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIES GRID ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* SECTION HEADER / CONTEXT */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sky-300 text-xs sm:text-sm uppercase tracking-[0.25em]">
            Industries We Work With
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
            Specialized Support Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Critical Sectors
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            We partner with organizations across regulated and high-impact
            industries to improve governance maturity, project delivery
            performance, and digital transformation success.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <Link
                key={i}
                to={item.link}
                className="group relative rounded-3xl p-6 sm:p-7 md:p-8
          border border-white/10 bg-white/5 backdrop-blur-xl
          hover:bg-white/10 hover:border-blue-400/40
          transition-all duration-500 ease-out
          hover:-translate-y-2 overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-transparent" />

                {/* ICON */}
                <div
                  className="relative z-10 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl
            flex items-center justify-center bg-blue-500/10 border border-white/10 mb-5 sm:mb-6"
                >
                  <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-sky-300" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-lg sm:text-xl font-semibold leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="relative z-10 mt-6 flex items-center gap-2 text-sky-300 text-sm font-medium group-hover:gap-3 transition-all">
                  Explore Sector
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="relative py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 sm:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15]">
              Ready to Transform Your
              <span className="block text-sky-300">Organization?</span>
            </h2>

            <p className="mt-6 text-gray-300">
              Let’s build stronger governance, better delivery, and sustainable
              transformation outcomes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book-training"
                className="px-6 sm:px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
