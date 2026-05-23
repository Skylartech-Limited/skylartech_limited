import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Globe, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import Certified from "../../assets/Services image/Certified.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  // ================= CORE CERTIFICATIONS =================
  {
    group: "Core Certifications",
    items: [
      {
        name: "CAPM®",
        link: "/certifications/capm",
        description:
          "Build foundational project management knowledge and prepare for entry-level project leadership roles.",
      },
      {
        name: "PMP®",
        link: "/certifications/pmp",
        description:
          "Advance your career with the world’s leading certification for experienced project managers.",
      },
      {
        name: "PgMP®",
        link: "/certifications/pgmp",
        description:
          "Develop advanced capability in managing multiple strategic programs.",
      },
      {
        name: "PfMP®",
        link: "/certifications/pfmp",
        description:
          "Lead enterprise-wide portfolio governance and strategic execution.",
      },
    ],
  },

  // ================= SPECIALIZED =================
  {
    group: "Specialized Certifications",
    items: [
      {
        name: "PMI-ACP®",
        link: "/certifications/pmi-acp",
        description:
          "Master agile principles, Scrum, Kanban, Lean, and adaptive delivery approaches.",
      },
      {
        name: "PMI-RMP®",
        link: "/certifications/pmi-rmp",
        description:
          "Strengthen advanced project risk identification, analysis, and response capability.",
      },
      {
        name: "PMI-PBA®",
        link: "/certifications/pmi-pba",
        description:
          "Develop business analysis expertise and stakeholder requirements management skills.",
      },
      {
        name: "PMI-SP®",
        link: "/certifications/pmi-sp",
        description:
          "Enhance scheduling capability for complex project environments.",
      },
      {
        name: "PMI-CP™",
        link: "/certifications/pmi-cp",
        description:
          "Build specialized capability for construction project environments.",
      },
      {
        name: "PMI-PMOCP™",
        link: "/certifications/pmi-pmocp",
        description:
          "Develop modern PMO leadership and organizational transformation capability.",
      },
      {
        name: "PMI-CPMAI™",
        link: "/certifications/pmi-cpmai",
        description:
          "Learn how to manage AI-enabled project and organizational environments.",
      },
    ],
  },

  // ================= SUSTAINABILITY =================
  {
    group: "Sustainability Certifications",
    items: [
      {
        name: "GPM-b™",
        link: "/certifications/gpm-b",
        description:
          "Integrate sustainability practices into modern project delivery.",
      },
    ],
  },
];
const ProfessionalTraining = () => {
  return (
    <div className="relative text-white overflow-hidden bg-[#060607]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[110px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${Certified})` }}
        />

        {/* Improved visibility overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />

        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center">
            {/* ================= LEFT CARD ================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div
                className="
          relative bg-[#1A0B0C]/80
          border border-red-300/15
          backdrop-blur-2xl
          rounded-3xl
          p-5 sm:p-7 md:p-9 lg:p-10
          shadow-2xl
          overflow-hidden
        "
              >
                {/* soft layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />

                {/* glow */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-400/10 blur-[140px] rounded-full" />

                <div className="relative z-10">
                  {/* TITLE */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                    You. <span className="text-red-300">Certified.</span>
                  </h1>

                  {/* TYPEWRITER */}
                  <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-red-200 min-h-[40px]">
                    <Typewriter
                      words={[
                        "Globally Recognized Credentials",
                        "Advance Your Career",
                        "Lead with Confidence",
                        "Master Project Excellence",
                      ]}
                      loop={0}
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={1500}
                    />
                    <span className="text-red-300">
                      <Cursor cursorStyle="|" />
                    </span>
                  </h2>

                  <p className="text-red-50 mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl leading-relaxed">
                    Demonstrate your expertise. Strengthen your credibility.
                    Advance your career with globally recognized PMI®
                    certifications.
                  </p>

                  <p className="text-red-100/80 mt-4 sm:mt-5 text-xs sm:text-base md:text-lg">
                    It’s your future. It’s your standard. It’s you. Certified.
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link to="#certifications-pathways">
                      <button className="px-6 py-3 rounded-2xl font-semibold bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/10 transition">
                        Certification Pathways
                      </button>
                    </Link>

                    <Link to="#maintenance">
                      <button className="px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/20 hover:scale-[1.03] transition">
                        Maintenance Requirements
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT CARD (RESTORED FULL VERSION) ================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex justify-center order-1 lg:order-2 mt-14 sm:mt-20 lg:mt-0"
            >
              <div
                className="
          w-full max-w-md sm:max-w-lg
          bg-[#0B1220]/70
          border border-white/10
          backdrop-blur-2xl
          rounded-3xl
          p-4 sm:p-6 md:p-7 lg:p-8
          shadow-2xl
          relative
          overflow-hidden
        "
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-rose-500/10 blur-[120px] rounded-full" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Why PMI Certification Matters
                  </h2>

                  <p className="text-red-50/80 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
                    Globally recognized credentials that validate your skills
                    and accelerate your professional growth.
                  </p>

                  {/* FEATURES RESTORED */}
                  <div className="mt-5 sm:mt-6 space-y-3 w-full">
                    {[
                      {
                        icon: Globe,
                        title: "Global Recognition",
                        text: "Trusted in 185+ countries as a global standard.",
                      },
                      {
                        icon: TrendingUp,
                        title: "Career Growth",
                        text: "Improves salary potential and advancement opportunities.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Professional Credibility",
                        text: "Proves your expertise through rigorous certification standards.",
                      },
                      {
                        icon: BookOpen,
                        title: "Advanced Knowledge",
                        text: "Built on PMBOK® and industry best practices.",
                      },
                      {
                        icon: Award,
                        title: "Competitive Advantage",
                        text: "Helps you stand out in the global job market.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-left bg-white/[0.03] border border-white/5 rounded-xl p-3 sm:p-4"
                      >
                        <div className="bg-red-500/10 p-2 rounded-xl border border-red-300/10 flex-shrink-0">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-red-100/60 text-xs sm:text-sm mt-1">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= PMI CERTIFICATION ECOSYSTEM ================= */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#060607] via-[#0D0708] to-[#060607] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* ================= INTRO ================= */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white leading-tight"
          >
            PMI certification works hard for you
          </motion.h2>

          <p className="text-red-100/60 mt-5 sm:mt-6 text-center max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            PMI certification validates your knowledge, experience, and
            education to contribute to strategic and organizational success.
          </p>

          {/* ================= VALUE GRID ================= */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
            <div className="md:col-span-4 bg-[#13090A]/65 border border-red-400/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl text-center">
              <h3 className="text-red-300 font-semibold text-lg">
                Credibility
              </h3>
              <p className="text-red-50/75 mt-3 leading-relaxed max-w-md mx-auto">
                Validate your professional expertise with globally recognized
                standards backed by 30+ years of leadership.
              </p>
            </div>

            <div className="md:col-span-2 bg-[#13090A]/60 border border-red-400/10 rounded-3xl p-6 backdrop-blur-xl text-center">
              <h3 className="text-red-300 font-semibold text-lg">
                Transferability
              </h3>
              <p className="text-red-100/60 mt-2 text-sm">
                Works across industries, regions, and methodologies.
              </p>
            </div>

            <div className="md:col-span-2 bg-[#13090A]/60 border border-red-400/10 rounded-3xl p-6 backdrop-blur-xl text-center">
              <h3 className="text-red-300 font-semibold text-lg">
                Competitive Advantage
              </h3>
              <p className="text-red-100/60 mt-2 text-sm">
                Improves career growth and salary potential.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#13090A]/65 border border-red-400/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl text-center">
              <h3 className="text-red-300 font-semibold text-lg">Commitment</h3>
              <p className="text-red-50/75 mt-3 leading-relaxed max-w-md mx-auto">
                Demonstrates lifelong learning and professional growth.
              </p>
            </div>

            <div className="md:col-span-6 bg-gradient-to-r from-[#13090A] via-[#1A0B0C] to-[#13090A] border border-red-400/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl text-center">
              <h3 className="text-red-300 font-semibold text-lg">Relevance</h3>
              <p className="text-red-50/75 mt-3 max-w-3xl mx-auto">
                Built by practitioners and continuously updated to reflect
                real-world industry demands.
              </p>
            </div>
          </div>

          {/* ================= CERTIFICATIONS PATHWAYS ================= */}
          <div
            id="certifications-pathways"
            className="scroll-mt-28 mt-20 sm:mt-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
              Certifications Pathways
            </h2>

            <p className="text-red-100/60 mt-4 sm:mt-6 text-center max-w-3xl mx-auto text-sm sm:text-base">
              Structured global certifications across foundational, specialized,
              and sustainability pathways.
            </p>

            <div className="mt-14 space-y-16">
  {certifications.map((group, i) => (
    <div key={i} className="flex flex-col items-center">
      <h3 className="text-red-300 text-xl sm:text-2xl font-bold mb-8 text-center">
        {group.group}
      </h3>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
        {group.items.map((cert, idx) => (
          <Link key={idx} to={cert.link || "#"} className="w-full">
            <div
              className="
                h-full flex flex-col justify-between
                bg-[#13090A]/60
                border border-red-400/10
                rounded-3xl p-6 sm:p-7
                text-center backdrop-blur-xl
                hover:border-red-400/40
                hover:scale-[1.02]
                hover:shadow-lg hover:shadow-red-500/10
                transition-all duration-300
                cursor-pointer
                group
              "
            >
              {/* TOP CONTENT (fixed area) */}
              <div>
                <h4 className="text-red-300 font-bold text-lg sm:text-xl group-hover:text-red-200 transition">
                  {cert.name}
                </h4>

                <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* BOTTOM CTA (always aligned) */}
              <div className="mt-6">
                <p className="text-xs text-red-300/60 opacity-0 group-hover:opacity-100 transition">
                  View certification →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>
          </div>

          {/* ================= MAINTENANCE ================= */}
          <div id="maintenance" className="scroll-mt-28 mt-20 sm:mt-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
              Certification Maintenance Requirements
            </h2>

            <p className="text-red-100/60 mt-4 sm:mt-6 text-center max-w-3xl mx-auto text-sm sm:text-base">
              Keep your PMI® certification active through continuous
              professional development
            </p>

            {/* DESKTOP TABLE */}
            <div className="mt-14 hidden md:block">
              <div className="bg-[#13090A]/50 border border-red-400/10 rounded-3xl backdrop-blur-xl overflow-hidden">
                <div className="grid grid-cols-3 p-5 text-red-300 font-semibold border-b border-red-400/10">
                  <div>Certification</div>
                  <div>Cycle</div>
                  <div>PDUs Required</div>
                </div>

                {[
                  {
                    cert: "CAPM®",
                    cycle: "5 years",
                    pdu: "No PDUs (Re-exam required)",
                  },
                  { cert: "PMP®", cycle: "3 years", pdu: "60 PDUs" },
                  { cert: "PgMP®", cycle: "3 years", pdu: "60 PDUs" },
                  {
                    cert: "PfMP®",
                    cycle: "3 years",
                    pdu: "60 PDUs (Portfolio focus)",
                  },
                  {
                    cert: "PMI-ACP®",
                    cycle: "3 years",
                    pdu: "30 PDUs (Agile focus)",
                  },
                  {
                    cert: "PMI-PBA®",
                    cycle: "3 years",
                    pdu: "60 PDUs (BA focus)",
                  },
                  {
                    cert: "PMI-RMP®",
                    cycle: "3 years",
                    pdu: "30 PDUs (Risk focus)",
                  },
                  {
                    cert: "PMI-SP®",
                    cycle: "3 years",
                    pdu: "30 PDUs (Scheduling focus)",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 p-5 text-white/70 border-b border-white/5 hover:bg-white/5"
                  >
                    <div className="text-red-200 font-medium">{row.cert}</div>
                    <div>{row.cycle}</div>
                    <div>{row.pdu}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="mt-10 md:hidden space-y-4">
              {[
                {
                  cert: "CAPM®",
                  cycle: "5 years",
                  pdu: "No PDUs (Re-exam required)",
                },
                { cert: "PMP®", cycle: "3 years", pdu: "60 PDUs" },
                { cert: "PgMP®", cycle: "3 years", pdu: "60 PDUs" },
                {
                  cert: "PfMP®",
                  cycle: "3 years",
                  pdu: "60 PDUs (Portfolio focus)",
                },
                {
                  cert: "PMI-ACP®",
                  cycle: "3 years",
                  pdu: "30 PDUs (Agile focus)",
                },
                {
                  cert: "PMI-PBA®",
                  cycle: "3 years",
                  pdu: "60 PDUs (BA focus)",
                },
                {
                  cert: "PMI-RMP®",
                  cycle: "3 years",
                  pdu: "30 PDUs (Risk focus)",
                },
                {
                  cert: "PMI-SP®",
                  cycle: "3 years",
                  pdu: "30 PDUs (Scheduling focus)",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="bg-[#13090A]/50 border border-red-400/10 rounded-2xl p-5 backdrop-blur-xl"
                >
                  <h3 className="text-red-200 font-semibold text-lg">
                    {row.cert}
                  </h3>

                  <div className="mt-3 text-white/70 text-sm space-y-1">
                    <p>
                      <span className="text-red-300">Cycle:</span> {row.cycle}
                    </p>
                    <p>
                      <span className="text-red-300">PDUs:</span> {row.pdu}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= PREMIUM PMI CTA ================= */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden">
        {/* ambient red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-2xl" />

        {/* glass container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl">
            {/* Small label */}
            <p className="text-red-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase">
              PMI Certification Journey
            </p>

            {/* Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Your future isn’t waiting —
              <span className="text-red-300"> it’s being built.</span>
            </h2>

            {/* Subtext */}
            <p className="text-red-100/60 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Become globally certified, unlock leadership opportunities, and
              position yourself among top-performing professionals worldwide.
            </p>

            {/* Divider glow line */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-400/60 to-transparent mx-auto my-8" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="#certifications-pathways">
                <button
                  className="
              px-8 py-4 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-red-500 to-rose-500
              shadow-lg shadow-red-500/25
              hover:shadow-red-500/40
              hover:scale-[1.03]
              transition-all duration-300
            "
                >
                  Get Certified
                </button>
              </Link>
            </div>

            {/* Micro trust line */}
            <p className="mt-8 text-xs text-white/40">
              Trusted globally across 185+ countries • PMI® Standards Driven
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTraining;
