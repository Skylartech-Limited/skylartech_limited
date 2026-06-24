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

const PMIACP = () => {
  const agileFeatures = [
    "Agile principles, practices, and tools across multiple frameworks",
    "Scrum, Kanban, Lean, XP, and hybrid approaches",
    "Adaptive planning and iterative delivery techniques",
    "Globally recognized agile project management certification",
  ];

  const eligibility = [
    "Minimum 21 contact hours of training in agile practices",
    "2,000 hours working on project teams within the last five years AND 1,500 hours working on agile project teams or with agile methodologies within the last three years",
  ];

  const examDetails = [
    "3-hour examination",
    "120 multiple-choice questions",
    "Globally recognized PMI-ACP® certification",
  ];

  const careerBenefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Accelerate your transition into agile leadership and delivery roles.",
    },
    {
      icon: Users,
      title: "Global Recognition",
      description:
        "Join a worldwide community of agile-certified professionals.",
    },
    {
      icon: Target,
      title: "Multi-Framework Expertise",
      description:
        "Validate skills across Scrum, Kanban, Lean, and hybrid practices.",
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description:
        "Stand out in rapidly evolving agile and digital transformation environments.",
    },
  ];

  const learningOutcomes = [
    "Master agile principles, values, and mindset",
    "Apply Scrum, Kanban, Lean, and XP practices effectively",
    "Facilitate agile teams and stakeholder collaboration",
    "Improve adaptive planning and continuous delivery",
    "Lead high-performing agile teams confidently",
    "Prepare successfully for the PMI-ACP® certification exam",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />

        <div
          className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-amber-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs sm:text-sm text-yellow-200 backdrop-blur-md shadow-lg">
              <Award size={15} />
              PMI® Agile Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMI-ACP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-white">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PMI-ACP® certification recognizes expertise in agile
              principles, practices, tools, and techniques across multiple
              agile methodologies including Scrum, Kanban, Lean, and hybrid
              approaches.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agileFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.05] hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                >
                  <CheckCircle2
                    className="text-yellow-300 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    size={20}
                  />

                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_80px_rgba(250,204,21,0.2)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>

                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Agile practitioners and delivery professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Professionals working in agile project environments",
                  "Scrum Masters, Agile Coaches, and Product Owners",
                  "Project Managers transitioning to agile delivery",
                  "Team members using Scrum, Kanban, Lean, or hybrid methods",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 hover:bg-black/30 hover:border-yellow-400/20 transition-all duration-300"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-yellow-300 flex-shrink-0 shadow-[0_0_10px_rgba(253,224,71,0.5)]" />

                    <p className="text-sm sm:text-base text-white/75 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm text-amber-200 backdrop-blur-md mb-4">
              <Star size={15} className="fill-amber-300" />
              Agile Benefits
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Why Choose PMI-ACP®?
            </h2>

            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Become an agile leader capable of delivering value faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-6 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:to-amber-500/5 transition-all duration-500" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon
                      className="text-yellow-300"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 backdrop-blur-xl p-6 sm:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
                <Target size={28} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Learning Outcomes
                </h2>

                <p className="text-white/60 text-sm sm:text-base mt-1">
                  Skills and competencies you'll gain
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 hover:border-yellow-400/30 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-yellow-300 flex-shrink-0 mt-0.5"
                    size={20}
                  />

                  <p className="text-sm text-white/75 leading-6">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ELIGIBILITY + EXAM */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ELIGIBILITY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <BookOpen className="text-yellow-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Agile experience and education prerequisites
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5 hover:bg-black/30 hover:border-yellow-400/20 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-yellow-300 flex-shrink-0 mt-1"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/10 to-amber-500/5 backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <Clock3 className="text-yellow-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMI-ACP® examination details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {examDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:bg-black/30 hover:border-yellow-400/20 transition-all duration-300"
                >
                  <p className="text-sm sm:text-lg text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="mt-8 sm:mt-10 rounded-2xl border border-yellow-400/20 bg-yellow-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-yellow-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">
                  Exam Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:scale-105 transition-all">
                  <p className="text-white/50 text-sm mb-2">
                    PMI® Member
                  </p>

                  <h5 className="text-2xl sm:text-3xl font-black text-yellow-200">
                    US $435
                  </h5>

                  <p className="text-white/40 text-sm mt-1">€365</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:scale-105 transition-all">
                  <p className="text-white/50 text-sm mb-2">
                    Non-Member
                  </p>

                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    US $495
                  </h5>

                  <p className="text-white/40 text-sm mt-1">€415</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(250,204,21,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-xs sm:text-sm text-yellow-200 backdrop-blur-md mb-6">
                <Sparkles size={15} />
                Agile Excellence Starts Here
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Master Agile Delivery Excellence
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Gain globally recognized agile certification and lead adaptive,
                high-performing teams capable of delivering business value
                continuously.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/book-training"
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                >
                  <span className="flex items-center gap-2">
                    Enroll for PMI-ACP® Training
                    <Zap
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMIACP;