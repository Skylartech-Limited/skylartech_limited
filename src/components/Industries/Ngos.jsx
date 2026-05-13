import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HeartHandshake,
  Globe,
  Link2,
  ShieldCheck,
  Users,
  BarChart3,
  Database,
  Network,
  FileText,
} from "lucide-react";

import NGO from "../../assets/Industries/NGO.jpg";

const Ngos = () => {
  return (
    <div className="w-full text-white bg-[#05060A] overflow-hidden sm:pt-24">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${NGO})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060A]/80 via-[#0B1024]/60 to-[#1A0F2E]/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-0 flex justify-start">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              max-w-3xl
              w-full
              text-left
              bg-black/30
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-6 sm:p-8 md:p-10 lg:p-14
              shadow-2xl
            "
          >
            <h2 className="flex items-center gap-2 text-amber-300 font-semibold text-sm sm:text-base">
              <HeartHandshake className="w-5 h-5" />
              NGO & Social Impact Project Management
            </h2>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05]">
              Delivering Sustainable Social Impact Through Structured Project Management
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              NGOs rely on structured project delivery frameworks to ensure transparency,
              donor compliance, and measurable community outcomes across the entire project lifecycle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                  Start a Project
                </button>
              </Link>

              <a href="#digital" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
                  Explore Digital Transformation
                </button>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= CORE ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#0A1020] to-[#120A2A]">

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Core Components of NGO Project Management
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Structured frameworks ensure accountability, sustainability, and measurable impact.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">

          {[
            {
              icon: FileText,
              title: "Project Cycle Management (PCM)",
              desc: "End-to-end lifecycle management from identification to evaluation ensuring structured delivery.",
            },
            {
              icon: ShieldCheck,
              title: "Donor Compliance & Reporting",
              desc: "Ensures transparency, financial accountability, and adherence to funding requirements.",
            },
            {
              icon: BarChart3,
              title: "Monitoring, Evaluation & Learning (MEAL)",
              desc: "Tracks outcomes, measures impact, and improves future project performance.",
            },
            {
              icon: Users,
              title: "Stakeholder Engagement",
              desc: "Aligns communities, donors, and governments for inclusive impact delivery.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                backdrop-blur-xl
                hover:bg-white/[0.07]
                transition
              "
            >
              <item.icon className="text-amber-300 w-6 h-6 mb-4" />

              <h3 className="font-semibold text-lg sm:text-xl">
                {item.title}
              </h3>

              <p className="text-white/60 mt-3 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DIGITAL TRANSFORMATION ================= */}
      <section id="digital" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#081427] to-[#0A1C33]">

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Digital Transformation for Social Good
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Technology enables NGOs to scale impact, improve transparency, and optimize resources.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">

          {[
            {
              icon: Network,
              title: "Integrated NGO Platforms",
              desc: "Unified systems connecting operations, finance, donors, and reporting.",
            },
            {
              icon: Database,
              title: "Impact Analytics",
              desc: "Data-driven dashboards measuring real-world social outcomes.",
            },
            {
              icon: Globe,
              title: "Global Outreach Systems",
              desc: "Digital platforms expanding reach to underserved communities.",
            },
            {
              icon: Link2,
              title: "System Integration",
              desc: "Seamless integration across all NGO operational systems.",
            },
            {
              icon: Users,
              title: "Community Engagement",
              desc: "Real-time engagement tools between NGOs and beneficiaries.",
            },
            {
              icon: BarChart3,
              title: "Transparency Systems",
              desc: "Automated reporting for donors and stakeholders.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                backdrop-blur-xl
                hover:bg-white/[0.07]
                transition
              "
            >
              <item.icon className="text-amber-300 w-6 h-6 mb-3" />

              <h3 className="font-semibold text-lg sm:text-xl">
                {item.title}
              </h3>

              <p className="text-white/60 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#0B1024] to-[#120A2A]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Need Support Building Your NGO Digital Systems?
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you're managing donor programs, field operations, or large-scale humanitarian initiatives,
            we help NGOs implement structured systems that improve transparency and impact.
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/contact-us">
              <button className="bg-amber-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto">
                Contact Support
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Ngos;