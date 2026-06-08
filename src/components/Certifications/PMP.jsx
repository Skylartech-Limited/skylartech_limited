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

const PMP = () => {
  const pmpFocus = [
    "Lead and direct cross-functional project teams",
    "Manage time, cost, scope, and quality constraints",
    "Deliver complex projects across industries",
    "Apply global project management standards",
  ];

  const eligibility = [
    "Bachelor's degree: 3 years (4,500 hrs) project leadership experience or High school diploma: 5 years (7,500 hrs) project leadership experience",
    "35 hours of project management education",
  ];

  const examDetails = [
    "4-hour examination",
    "200 multiple-choice questions",
    "Globally recognized PMI® certification",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">

        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs sm:text-sm text-orange-200 backdrop-blur-md">
              <Award size={15} />
              PMI® Professional Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-white">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PMP® certification recognizes competence in leading and
              directing projects across industries using globally recognized
              project management standards.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pmpFocus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 hover:border-orange-400/40 transition-all"
                >
                  <CheckCircle2 className="text-orange-300 mt-0.5" size={20} />
                  <p className="text-sm sm:text-[15px] text-white/80 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - WHO SHOULD APPLY (CAPM STYLE) */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)]">

              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    PMP® target professionals
                  </p>
                </div>
              </div>

              {/* CAPM-STYLE GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.05]">
                  <CheckCircle2 className="text-orange-300 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    Are responsible for all aspects of a project for the life of a project
                  </p>
                </div>

                <div className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.05]">
                  <CheckCircle2 className="text-orange-300 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    Lead and direct cross-functional teams to deliver projects within time, budget, and scope constraints
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
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                <BookOpen className="text-orange-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Experience & education requirements
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5"
                >
                  <CheckCircle2 className="text-orange-300 mt-1" size={20} />
                  <p className="text-sm sm:text-base text-white/75 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-xl p-5 sm:p-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Clock3 className="text-orange-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMP® examination details
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
            <div className="mt-8 sm:mt-10 rounded-2xl border border-orange-400/20 bg-orange-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-orange-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">
                  Exam Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">PMI® Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-orange-200">
                    US $405
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€340</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">Non-Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    US $555
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€465</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Advance Your Project Management Career
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Become a certified PMP® professional and lead complex projects
                with global recognition and strategic impact.
              </p>

              <Link
                to="/book-training"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.35)]"
              >
                Enroll for PMP® Training
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PMP;