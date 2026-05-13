import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Users,
  Landmark,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

import Govt from "../../assets/Industries/Government.jpg";

const Government = () => {
  return (
    <div className="w-full text-white bg-[#05060A] overflow-hidden sm:pt-24">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Govt})` }}
        />

        {/* PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A]/80 via-[#07101F]/60 to-[#0B1630]/50" />

        {/* SUBTLE GLOW */}
        <div className="absolute inset-0 bg-blue-500/5" />

        {/* CONTENT WRAPPER */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              max-w-3xl
              text-left
              bg-black/30
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-5 sm:p-7 md:p-10 lg:p-14
              shadow-2xl
            "
          >
            <h2 className="flex items-center gap-2 text-blue-300 font-semibold text-sm sm:text-base">
              <Landmark className="w-5 h-5" />
              Government Project Management
            </h2>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 leading-[1.05] tracking-tight">
              Delivering Public Sector Projects with Accountability & Precision
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
              Government project management involves planning, executing, and
              monitoring public sector initiatives such as infrastructure, IT
              systems, and policy reforms within strict frameworks of
              accountability, regulatory compliance, and budget control.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                  Discuss a Project
                </button>
              </Link>

              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300">
                  Explore Framework
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section
        id="overview"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#060913]"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Key Aspects of Government Project Management
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Public sector projects operate under strict governance frameworks
            that prioritize transparency, efficiency, and public value delivery.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Compliance & Accountability",
              desc: "Ensures adherence to procurement laws, financial regulations, and audit standards.",
            },
            {
              icon: ClipboardCheck,
              title: "Monitoring & Evaluation (M&E)",
              desc: "Tracks progress through structured reporting cycles and performance measurement.",
            },
            {
              icon: Users,
              title: "Stakeholder Engagement",
              desc: "Manages citizens, government bodies, contractors, and institutions effectively.",
            },
            {
              icon: AlertTriangle,
              title: "Risk & Governance Challenges",
              desc: "Handles bureaucratic delays, political changes, and resource constraints.",
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
                hover:border-blue-400/20
                transition-all
                duration-300
              "
            >
              <item.icon className="text-blue-300 w-6 h-6 mb-3" />

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-white/60 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRACTICES ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#081426] to-[#0A1C33]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Trends & Best Practices in Government Projects
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Modern governments are shifting toward structured delivery models
            that improve efficiency and transparency.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {[
            {
              title: "Project Management Offices (PMOs)",
              desc: "Improve coordination, governance, and standardization.",
            },
            {
              title: "Digital Transformation",
              desc: "Enhances transparency and reporting accuracy.",
            },
            {
              title: "National Alignment",
              desc: "Aligns projects with national development goals.",
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
                hover:border-blue-400/20
                transition-all
                duration-300
              "
            >
              <h3 className="text-blue-300 font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= SUPPORT SECTION ================= */}
        <div className="max-w-4xl mx-auto text-center mt-20 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Strengthen Your Public Sector Project Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Implement structured governance frameworks that improve transparency,
            accountability, and efficiency across government projects.
          </p>

          <Link to="/contact-us">
            <button className="mt-8 bg-blue-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 w-full sm:w-auto">
              Get Expert Support →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Government;