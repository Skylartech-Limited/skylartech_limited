import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  Award,
} from "lucide-react";

const PMIRP = () => {
  const riskFocus = [
    "Identifying and assessing project risks",
    "Planning risk responses and mitigation strategies",
    "Exploiting opportunities for project success",
    "Continuous risk monitoring and control",
  ];

  const eligibility = [
    "Minimum 30 hours of project risk management education (Bachelor’s degree or global equivalent) OR Minimum 40 hours of project risk management education (High school diploma or global equivalent)",
    "3,000 hours of project risk management experience within the last 5 years (Bachelor’s degree holders) OR 4,500 hours of project risk management experience within the last 5 years (High school diploma holders)",
  ];

  const examDetails = [
    "3.5-hour examination",
    "170 multiple-choice questions",
    "Globally recognized PMI-RMP® certification",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* SLATE BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-slate-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-slate-700/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/30 bg-slate-500/10 px-4 py-2 text-xs sm:text-sm text-slate-200 backdrop-blur-md">
              <Shield size={15} />
              PMI® Risk Management Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMI-RMP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-200 to-white">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PMI-RMP® certification recognizes expertise in identifying,
              assessing, and managing project risks while maximizing
              opportunities and minimizing threats.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {riskFocus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 hover:border-slate-400/40 transition-all"
                >
                  <CheckCircle2 className="text-slate-300 mt-0.5" size={20} />
                  <p className="text-sm sm:text-[15px] text-white/80 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - WHO SHOULD APPLY */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-500 to-slate-700">
                  <Award size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Risk management professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Project managers responsible for risk planning and control",
                  "Risk analysts and consultants in project environments",
                  "Professionals managing project uncertainties and threats",
                  "Team members involved in project risk mitigation strategies",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-300 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-white/75 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ELIGIBILITY + EXAM */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ELIGIBILITY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-500/10 border border-slate-500/20">
                <BookOpen className="text-slate-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Education and experience in risk management
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5"
                >
                  <CheckCircle2 className="text-slate-300 mt-1" size={20} />
                  <p className="text-sm sm:text-base text-white/75 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-500/10 to-slate-700/5 backdrop-blur-xl p-5 sm:p-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-500/10 border border-slate-500/20">
                <Clock3 className="text-slate-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMI-RMP® examination details
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
            <div className="mt-8 sm:mt-10 rounded-2xl border border-slate-400/20 bg-slate-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-slate-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">Exam Fees</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">PMI® Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-slate-200">
                    US $520
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€430</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">Non-Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    US $670
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€555</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-400/20 bg-gradient-to-r from-slate-500/10 via-slate-600/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Master Project Risk Management
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Become a PMI-RMP® certified professional and strengthen your
                ability to manage uncertainty and project risks effectively.
              </p>

              <Link
                to="/contact-us"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-slate-400 to-slate-600 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(100,116,139,0.35)]"
              >
                Enroll for PMI-RMP® Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMIRP;
