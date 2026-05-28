import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  Award,
} from "lucide-react";

const PMIMPOC = () => {
  const pocFocus = [
    "Leading and shaping Project Management Offices (PMOs)",
    "Driving strategic value through PMO structures",
    "Adapting PMO frameworks to organizational culture",
    "Ensuring consistent project governance and delivery",
  ];

  const eligibility = [
    "Secondary degree (High school diploma, GED, or global equivalent)",
    "3 years of project-related experience within the last 8 years OR PMP in good standing",
    "10 hours of PMO-specific education (can be met via PMI-PMOCP Exam Prep Course)",
  ];

  const examDetails = [
    "120 multiple-choice questions",
    "165 minutes exam duration",
    "Computer-based exam via Pearson VUE",
    "Available in multiple global languages",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">

      {/* NEON MAROON BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">

        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-xs sm:text-sm text-red-200 backdrop-blur-md">
              <Building2 size={15} />
              PMI® PMO Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMI-PMOCP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300 to-pink-300">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PMI-PMOCP™ certification validates expertise in leading PMOs,
              shaping organizational project governance, and driving strategic
              value through effective PMO structures.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pocFocus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 hover:border-red-400/40 transition-all"
                >
                  <CheckCircle2 className="text-red-300 mt-0.5" size={20} />
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
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 via-rose-500 to-pink-500">
                  <Award size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    PMO & governance professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "PMO Leaders and Directors",
                  "Project Managers and Coordinators",
                  "PMO Analysts and Support Staff",
                  "Enterprise governance professionals",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-300 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-white/75 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ELIGIBILITY */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8">

            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                <BookOpen className="text-red-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMO experience requirements
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5"
                >
                  <CheckCircle2 className="text-red-300 mt-1" size={20} />
                  <p className="text-sm sm:text-base text-white/75 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/10 via-rose-500/5 to-pink-500/5 backdrop-blur-xl p-5 sm:p-8">

            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                <Clock3 className="text-red-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMI-PMOCP™ exam details
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
            <div className="mt-8 sm:mt-10 rounded-2xl border border-red-400/20 bg-red-500/5 p-5 sm:p-6">

              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-red-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">
                  Exam Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">Member</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-red-300">
                    $333
                  </h5>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/50 text-sm mb-2">Full Price</p>
                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    $459
                  </h5>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">

          <div className="relative overflow-hidden rounded-[2rem] border border-red-400/20 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10 p-6 sm:p-10 backdrop-blur-2xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Lead the Future of PMOs
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Become PMI-PMOCP™ certified and drive strategic PMO excellence in your organization.
              </p>

              <Link
                to="/contact-us"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-red-400 via-rose-500 to-pink-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
              >
                Enroll for PMOCP Training
              </Link>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PMIMPOC;