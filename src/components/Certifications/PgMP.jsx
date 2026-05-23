import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  GraduationCap,
} from "lucide-react";

const PgMP = () => {
  const pgmpFocus = [
    "Oversee multiple related projects aligned to organizational strategy",
    "Ensure program outcomes deliver business value",
    "Manage complex cross-functional initiatives",
    "Align execution with enterprise objectives",
  ];

  const eligibility = [
    "With bachelor’s degree or global equivalent: minimum 4 years (6,000 hrs) project management AND 4 years (6,000 hrs) program management experience within the last 15 years OR With high school diploma or global equivalent: minimum 4 years (6,000 hrs) project management AND 7 years (10,500 hrs) program management experience within the last 15 years",
  ];

  const examDetails = [
    "4-hour evaluation process",
    "170 multiple-choice questions",
    "Panel review + PMI® certification exam",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* EMERALD BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm text-emerald-200 backdrop-blur-md">
              <Award size={15} />
              PMI® Program Management Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] tracking-tight">
              PgMP®
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-white">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PgMP® certification recognizes advanced experience, skill, and
              performance in managing multiple related projects aligned to
              organizational objectives.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pgmpFocus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 hover:border-emerald-400/40 transition-all"
                >
                  <CheckCircle2 className="text-emerald-300 mt-0.5" size={20} />
                  <p className="text-sm sm:text-[15px] text-white/80 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - WHO SHOULD APPLY (CAPM STYLE GRID) */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Advanced program leadership roles
                  </p>
                </div>
              </div>

              {/* CAPM-STYLE GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.05]">
                  <CheckCircle2
                    className="text-emerald-300 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    Manage programs containing multiple complex, related
                    projects across functions or regions
                  </p>
                </div>

                <div className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.05]">
                  <CheckCircle2
                    className="text-emerald-300 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    Drive strategic alignment between projects and
                    organizational objectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ELIGIBILITY + EXAM */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ELIGIBILITY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <BookOpen className="text-emerald-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Program management experience
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.05]"
                >
                  <CheckCircle2
                    className="text-emerald-300 mt-0.5 flex-shrink-0"
                    size={20}
                  />

                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-xl p-5 sm:p-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Clock3 className="text-emerald-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PgMP® evaluation process
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {examDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5"
                >
                  <p className="text-sm sm:text-lg text-white/80">{item}</p>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="mt-8 sm:mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-emerald-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">Exam Fees</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">PMI® Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-emerald-200">
                    US $800
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€655</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">Non-Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    US $1,000
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€815</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Elevate Your Program Leadership Career
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Become a PgMP® certified professional and lead enterprise-level
                programs with strategic impact.
              </p>

              <Link
                to="/contact-us"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
              >
                Enroll for PgMP® Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgMP;
