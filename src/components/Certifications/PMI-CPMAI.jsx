import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
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

const PMICPMAI = () => {
  const cpmaiFocus = [
    "Turning AI ideas into structured project delivery plans",
    "Bridging business, data, and technical teams",
    "Applying AI governance and ethical decision-making",
    "Delivering measurable AI-driven business outcomes",
  ];

  const eligibility = [
    "Be at least 18 years old",
    "Complete the PMI-CPMAI™ Exam Preparation Course",
  ];

  const examDetails = [
    "120 multiple-choice questions",
    "160 minutes examination duration",
    "Computer-based exam delivered online",
    "Internationally recognized PMI® credential",
  ];

  const careerBenefits = [
    {
      icon: TrendingUp,
      title: "AI Career Growth",
      description:
        "Position yourself for emerging AI leadership and transformation roles.",
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description:
        "Lead collaboration between business, technical, and data teams.",
    },
    {
      icon: Target,
      title: "Practical AI Delivery",
      description:
        "Learn proven frameworks for managing successful AI initiatives.",
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description:
        "Stand out with a globally recognized AI project management certification.",
    },
  ];

  const learningOutcomes = [
    "Translate AI concepts into executable project plans",
    "Apply AI governance, ethics, and responsible AI practices",
    "Manage AI project lifecycles from ideation to deployment",
    "Align AI initiatives with organizational strategy",
    "Identify risks and challenges unique to AI projects",
    "Measure and communicate AI business value effectively",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060607] text-white">
      {/* ENHANCED BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-orange-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-14 xl:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* HERO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm text-amber-200 backdrop-blur-md shadow-lg">
              <Brain size={15} />
              PMI® Artificial Intelligence Certification
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]">
              PMI-CPMAI®
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200">
                Certification
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-2xl">
              PMI Certified Professional in Managing AI (CPMAI™) equips
              professionals with practical frameworks, governance principles,
              and delivery methodologies required to successfully execute
              AI-driven initiatives and transform innovation into measurable
              business value.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cpmaiFocus.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.05] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                >
                  <CheckCircle2
                    className="text-amber-300 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <p className="text-sm sm:text-[15px] leading-6 text-white/80">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_80px_rgba(245,158,11,0.2)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                  <Award size={26} />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Who Should Apply?
                  </h2>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Designed for AI and transformation professionals
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Project Managers leading AI initiatives",
                  "AI Engineers, Data Scientists, and Analysts",
                  "Business leaders driving digital transformation",
                  "Consultants and innovation professionals",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 hover:bg-black/30 hover:border-amber-400/20 transition-all duration-300"
                  >
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-300 flex-shrink-0 shadow-[0_0_10px_rgba(252,211,77,0.5)]" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm text-amber-200 backdrop-blur-md mb-4">
              <Star size={15} className="fill-amber-300" />
              Premium Benefits
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Why Choose PMI-CPMAI®?
            </h2>

            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Build the skills needed to lead successful AI initiatives and
              drive organizational transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-6 hover:border-amber-400/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon
                      className="text-amber-300"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/5 to-orange-500/5 backdrop-blur-xl p-6 sm:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                <Target size={28} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Learning Outcomes
                </h2>

                <p className="text-white/60 text-sm sm:text-base mt-1">
                  Skills you'll gain during this certification journey
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 hover:border-amber-400/30 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-amber-300 flex-shrink-0 mt-0.5"
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                <BookOpen className="text-amber-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Eligibility Requirements
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Entry requirements for certification
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5 hover:bg-black/30 hover:border-amber-400/20 transition-all duration-300"
                >
                  <CheckCircle2
                    className="text-amber-300 flex-shrink-0 mt-1"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-orange-500/5 backdrop-blur-xl p-5 sm:p-8 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Clock3 className="text-amber-300" size={22} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exam Information
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  PMI-CPMAI® examination details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {examDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:bg-black/30 hover:border-amber-400/20 transition-all duration-300"
                >
                  <p className="text-sm sm:text-lg text-white/80">{item}</p>
                </div>
              ))}
            </div>

            {/* FEES */}
            <div className="mt-8 sm:mt-10 rounded-2xl border border-amber-400/20 bg-amber-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-amber-300" size={22} />
                <h4 className="text-lg sm:text-xl font-semibold">
                  Exam Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 hover:border-amber-400/30 hover:scale-105 transition-all duration-300">
                  <p className="text-white/50 text-sm mb-2">PMI® Member</p>

                  <h5 className="text-2xl sm:text-3xl font-black text-amber-200">
                    $490
                  </h5>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 hover:border-amber-400/30 hover:scale-105 transition-all duration-300">
                  <p className="text-white/50 text-sm mb-2">Non-Member</p>

                  <h5 className="text-2xl sm:text-3xl font-black text-white">
                    $630
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(245,158,11,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-orange-500/10 to-amber-500/0 animate-pulse" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-xs sm:text-sm text-yellow-200 backdrop-blur-md mb-6">
                <Sparkles size={15} />
                Future-Ready AI Leadership
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Lead the Future of AI Projects
              </h2>

              <p className="mt-5 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-7 sm:leading-8">
                Gain the knowledge, tools, and confidence needed to
                successfully manage AI initiatives and deliver measurable
                business transformation.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/book-training"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enroll for CPMAI™ Training
                    <Zap
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </span>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  AI Expert Trainers
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  Practical Case Studies
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  Exam Preparation Support
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  Career Development Guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMICPMAI;