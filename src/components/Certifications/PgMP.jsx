import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  GraduationCap,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Star,
  Zap,
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

  const careerBenefits = [
    {
      icon: TrendingUp,
      title: "Executive Leadership",
      description:
        "Develop strategic leadership capabilities for managing enterprise-wide programs.",
    },
    {
      icon: Users,
      title: "Global Recognition",
      description:
        "Gain recognition as a senior program management professional worldwide.",
    },
    {
      icon: Target,
      title: "Strategic Alignment",
      description:
        "Ensure programs consistently deliver measurable business value.",
    },
    {
      icon: Zap,
      title: "Career Growth",
      description:
        "Unlock executive-level opportunities and increase your leadership impact.",
    },
  ];

  const learningOutcomes = [
    "Manage multiple related projects within strategic program frameworks",
    "Align program execution with organizational goals and objectives",
    "Lead cross-functional and geographically dispersed teams effectively",
    "Optimize benefits realization and stakeholder engagement",
    "Implement governance structures for large enterprise programs",
    "Prepare confidently for the PgMP® panel review and examination process",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />

        <div
          className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] sm:h-[380px] sm:w-[380px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">

        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm text-emerald-200 backdrop-blur-md shadow-lg">
              <Award size={15} />
              PMI® Program Management Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PgMP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-white">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PgMP® certification recognizes advanced experience, skill,
              and performance in managing multiple related projects aligned to
              organizational objectives.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pgmpFocus.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.05] hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                >
                  <CheckCircle2
                    className="text-emerald-300 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_80px_rgba(16,185,129,0.2)] transition-all duration-500">

              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-lg">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>

                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Advanced program leadership professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Manage programs containing multiple complex, related projects across functions or regions",
                  "Drive strategic alignment between projects and organizational objectives",
                  "Lead enterprise-wide transformation initiatives",
                  "Senior project managers transitioning into program leadership roles",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 hover:bg-black/30 hover:border-emerald-400/20 transition-all duration-300"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300 flex-shrink-0 shadow-[0_0_10px_rgba(110,231,183,0.5)]" />

                    <p className="text-sm sm:text-base text-white/75 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CAREER BENEFITS */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24">

          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm text-emerald-200 backdrop-blur-md mb-4">
              <Star size={15} className="fill-emerald-300" />
              Premium Benefits
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Why Choose PgMP®?
            </h2>

            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Become an enterprise leader capable of managing strategic programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-6 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-green-500/20 border border-emerald-400/30 mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon
                      className="text-emerald-300"
                      size={24}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-6">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING OUTCOMES */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/5 to-green-500/5 backdrop-blur-xl p-6 sm:p-10">

            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-lg">
                <Target size={28} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Learning Outcomes
                </h2>

                <p className="text-white/60 text-sm sm:text-base mt-1">
                  What you'll master during PgMP® preparation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningOutcomes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 hover:border-emerald-400/30 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-emerald-300 flex-shrink-0 mt-0.5"
                    size={20}
                  />

                  <p className="text-sm text-white/75 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ELIGIBILITY + EXAM */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* ELIGIBILITY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500">

            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <BookOpen className="text-emerald-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Program management experience requirements
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5 hover:bg-black/30 hover:border-emerald-400/20 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-emerald-300 flex-shrink-0 mt-1"
                    size={20}
                  />

                  <p className="text-sm sm:text-base text-white/75 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500">

            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Clock3 className="text-emerald-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PgMP® evaluation process details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {examDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:bg-black/30 hover:border-emerald-400/20 transition-all duration-300"
                >
                  <p className="text-sm sm:text-lg text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="mt-8 sm:mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5 sm:p-6">

              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-emerald-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">
                  Exam Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 hover:border-emerald-400/30 hover:scale-105 transition-all duration-300">
                  <p className="text-white/50 text-sm mb-2">
                    PMI® Member
                  </p>

                  <h5 className="text-2xl sm:text-3xl font-black text-emerald-200">
                    US $800
                  </h5>

                  <p className="text-white/40 text-sm mt-1">€655</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 hover:border-emerald-400/30 hover:scale-105 transition-all duration-300">
                  <p className="text-white/50 text-sm mb-2">
                    Non-Member
                  </p>

                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    US $1,000
                  </h5>

                  <p className="text-white/40 text-sm mt-1">€815</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">

          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(16,185,129,0.2)]">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-green-500/10 to-emerald-500/0 animate-pulse" />

            <div className="relative z-10 text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-xs sm:text-sm text-yellow-200 backdrop-blur-md mb-6">
                <Sparkles size={15} />
                Executive Leadership Credential
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Elevate Your Program Leadership Career
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Become a PgMP® certified professional and lead enterprise-level
                programs with strategic impact.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/book-training"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enroll for PgMP® Training
                    <Zap
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Expert Mentors
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Flexible Learning
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Exam Preparation
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Leadership Coaching
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PgMP;