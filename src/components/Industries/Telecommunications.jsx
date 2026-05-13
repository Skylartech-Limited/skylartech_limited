import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Network,
  ShieldCheck,
  Activity,
  BarChart3,
  Zap,
} from "lucide-react";

import Telecom from "../../assets/Industries/telecommunication.jpg";

const Telecommunications = () => {
  return (
    <div className="w-full text-white bg-[#05060D] overflow-x-hidden">

      {/* ================= HERO ================= */}
     <section className="relative min-h-[100svh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-0">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Telecom})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060D]/85 via-[#0B1020]/65 to-[#120A2A]/55" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">

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
              p-6 sm:p-8 md:p-12 lg:p-14
              shadow-2xl
            "
          >
            <h2 className="flex items-center gap-2 text-amber-300 font-semibold text-sm sm:text-base">
              <Network className="w-5 h-5" />
              Telecommunications Project Management
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Delivering Telecom Infrastructure with Speed & Precision
            </h1>

            <p className="text-white/80 mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
              Telecom project management enables large-scale network rollouts,
              5G deployment, infrastructure upgrades, and digital transformation
              initiatives in fast-paced, high-pressure environments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us">
                <button className="bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto">
                  Start a Project
                </button>
              </Link>

              <a href="#overview">
                <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition w-full sm:w-auto">
                  Explore Framework
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section id="overview" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070A14]">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Telecom Project Management Matters
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Telecom projects require coordination across infrastructure, vendors,
            engineering teams, and digital systems to ensure reliable and scalable connectivity.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              icon: ShieldCheck,
              title: "System Integration Complexity",
              desc: "Ensures seamless coordination between network systems, vendors, and platforms.",
            },
            {
              icon: Zap,
              title: "Rapid Infrastructure Deployment",
              desc: "Supports fast rollout of 4G/5G networks and telecom upgrades.",
            },
            {
              icon: Activity,
              title: "Operational Risk Control",
              desc: "Minimizes downtime during upgrades, migrations, and system changes.",
            },
            {
              icon: BarChart3,
              title: "Cost & Performance Efficiency",
              desc: "Improves delivery speed, cost control, and operational performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <item.icon className="text-amber-300 w-6 h-6 mb-3" />

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-white/60 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DELIVERY ================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05060D] via-[#0B1020] to-[#120A2A]">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Structured Telecom Project Delivery
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Structured delivery ensures telecom projects are executed with clarity,
            reduced risk, and predictable outcomes across complex infrastructure environments.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Network Rollout Planning",
              desc: "Structured planning of telecom infrastructure including towers, fiber, and core networks.",
            },
            {
              title: "Vendor Coordination",
              desc: "Aligns multiple suppliers and partners to ensure timely and quality delivery.",
            },
            {
              title: "Hybrid Delivery Models",
              desc: "Combines Agile and traditional methods for faster and controlled execution.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-amber-300 font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#05060D]">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Key Benefits for Telecom Organizations
          </h2>
        </div>

        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Faster network deployment",
            "Reduced operational risk",
            "Improved budget control",
            "Better vendor alignment",
            "Higher delivery success rate",
            "Stronger governance models",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <p className="text-white/80 font-medium">✔ {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#05060D] text-center">

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Telecom Delivery?
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Apply structured project management to deliver faster, safer, and more efficient telecom infrastructure programs.
          </p>

          <Link to="/contact-us">
            <button className="mt-8 bg-amber-500 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto">
              Get Expert Support →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Telecommunications;