import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  Award,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const PMISP = () => {
  const spFocus = [
    "Developing and maintaining project schedules",
    "Advanced project timeline management",
    "Resource and activity sequencing control",
    "Schedule optimization and performance tracking",
  ];

  const eligibility = [
    "Minimum 30 hours in project scheduling training (Bachelor’s degree or global equivalent)",
    "Minimum 40 hours in project scheduling training (High school diploma or global equivalent)",
    "3,500 hours of project scheduling experience within the last 5 years (Bachelor’s degree holders)",
    "5,000 hours of project scheduling experience within the last 5 years (High school diploma holders)",
  ];

  const examDetails = [
    "3.5-hour examination",
    "170 multiple-choice questions",
    "Globally recognized PMI-SP® certification",
  ];

  const careerBenefits = [
    {
      icon: TrendingUp,
      title: "Scheduling Expertise",
      description:
        "Develop advanced scheduling capabilities to manage complex projects effectively.",
    },
    {
      icon: Users,
      title: "Global Recognition",
      description:
        "Join a global network of certified scheduling professionals trusted worldwide.",
    },
    {
      icon: Target,
      title: "Project Precision",
      description:
        "Improve project delivery through accurate planning, tracking, and forecasting.",
    },
    {
      icon: Zap,
      title: "Career Growth",
      description:
        "Enhance your professional credibility and unlock new career opportunities.",
    },
  ];

  const learningOutcomes = [
    "Create and maintain integrated project schedules",
    "Develop activity sequencing and critical path analysis skills",
    "Apply schedule performance measurement techniques",
    "Manage resource allocation and schedule optimization",
    "Monitor schedule risks and corrective actions",
    "Master advanced scheduling tools and methodologies",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-200 backdrop-blur-md shadow-lg">
              <Calendar size={15} />
              PMI® Scheduling Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMI-SP®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-blue-300">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              The PMI-SP® certification recognizes expertise in project
              scheduling, including the development, maintenance, and control
              of project timelines for successful delivery.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {spFocus.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  <CheckCircle2
                    className="text-cyan-300 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_80px_rgba(34,211,238,0.2)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-500 shadow-lg">
                  <Award size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Project scheduling professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Project schedulers managing timelines and milestones",
                  "Planning engineers responsible for project execution schedules",
                  "Project managers overseeing time-critical deliverables",
                  "Professionals involved in schedule development and control",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 hover:bg-black/30 hover:border-cyan-400/20 transition-all duration-300"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
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
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-200 backdrop-blur-md mb-4">
              <Star size={15} className="fill-cyan-300" />
              Certification Benefits
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Why Choose PMI-SP®?
            </h2>

            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Become an expert in scheduling and project timeline excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 border border-cyan-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-cyan-300" size={24} />
                </div>

                <h3 className="text-lg font-bold mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-white/60 leading-6">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING OUTCOMES */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/5 via-fuchsia-500/5 to-blue-500/5 backdrop-blur-xl p-6 sm:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-500 shadow-lg">
                <Target size={28} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Learning Outcomes
                </h2>
                <p className="text-white/60 text-sm sm:text-base mt-1">
                  Skills you'll gain from PMI-SP® training
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningOutcomes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-cyan-300 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <p className="text-sm text-white/75 leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ELIGIBILITY + EXAM */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ELIGIBILITY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <BookOpen className="text-cyan-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>
                <p className="text-white/60 text-sm">
                  Education and scheduling experience
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-5 hover:bg-black/30 hover:border-cyan-400/20 transition-all"
                >
                  <CheckCircle2 className="text-cyan-300 mt-1" size={20} />
                  <p className="text-white/75 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXAM INFO */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-blue-500/5 backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Clock3 className="text-cyan-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>
                <p className="text-white/60 text-sm">
                  PMI-SP® examination details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {examDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 hover:border-cyan-400/20 transition-all"
                >
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-cyan-300" size={22} />
                <h4 className="text-xl font-semibold">Exam Fees</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:scale-105 transition-all">
                  <p className="text-white/50 text-sm">PMI® Member</p>
                  <h5 className="text-3xl font-black text-cyan-200">
                    US $520
                  </h5>
                  <p className="text-white/40 text-sm mt-1">€430</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:scale-105 transition-all">
                  <p className="text-white/50 text-sm">Non-Member</p>
                  <h5 className="text-3xl font-black text-white">
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
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-xs sm:text-sm text-cyan-200 backdrop-blur-md mb-6">
                <Sparkles size={15} />
                Premium Training Experience
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                Master Project Scheduling Excellence
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-8">
                Become a PMI-SP® certified professional and master the art of
                planning, controlling, and optimizing project schedules.
              </p>

              <Link
                to="/book-training"
                className="group mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                <span className="flex items-center gap-2">
                  Enroll for PMI-SP® Training
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
  );
};

export default PMISP;