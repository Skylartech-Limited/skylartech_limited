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

        {/* OVERLAY (PINK GRADIENT) */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-fuchsia-500/30 to-pink-600/40" />

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
            <h2 className="flex items-center gap-2 text-pink-300 font-semibold text-sm sm:text-base">
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
                <button className="w-full sm:w-auto bg-pink-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
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

      {/* ================= NGO INSIGHTS ================= */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060A] via-[#1A0A1F] to-[#2A0A3D]">

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            NGO Project Management & Digital Transformation
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Structured frameworks and digital systems enable NGOs to improve accountability, scale impact,
            and deliver measurable social outcomes efficiently.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Core Components of NGO Project Management
          </h3>

          <p className="text-white/60 mt-5 max-w-3xl mx-auto text-sm sm:text-base">
            Structured frameworks ensure accountability, sustainability, and measurable impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
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
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl hover:bg-white/[0.07] transition"
            >
              <item.icon className="text-pink-300 w-6 h-6 mb-4" />

              <h3 className="font-semibold text-lg sm:text-xl">
                {item.title}
              </h3>

              <p className="text-white/60 mt-3 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="digital" className="mt-20 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Digital Transformation for Social Good
          </h3>

          <p className="text-white/60 mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Technology enables NGOs to scale impact, improve transparency, and optimize resources.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
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
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl hover:bg-white/[0.07] transition"
            >
              <item.icon className="text-pink-300 w-6 h-6 mb-3" />

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
      <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#05060A] overflow-hidden text-center">

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-pink-400/20 via-fuchsia-500/20 to-pink-600/20 blur-[120px] rounded-full" />
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 rounded-3xl border border-pink-400/10 animate-pulse pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Empower NGO Impact with Structured Digital Systems
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            Whether you're managing donor programs, field operations, or large-scale
            humanitarian initiatives, we help NGOs implement structured systems that
            improve transparency, coordination, and measurable impact delivery.
          </p>

          <Link to="/contact-us" className="inline-block mt-10">
            <button className="px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-pink-400 to-fuchsia-500 shadow-lg hover:scale-105 transition duration-300">
              Contact NGO Support →
            </button>
          </Link>

          <p className="text-white/40 text-xs mt-6">
            Trusted for nonprofit digital transformation, donor systems & field operations
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Ngos;