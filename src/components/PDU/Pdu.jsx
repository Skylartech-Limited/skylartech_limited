import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock3,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/**
 * Animation presets with reduced-motion awareness
 */
const useFadeUp = () => {
  const reduce = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.2 }
        : { duration: 0.6, ease: "easeOut" },
    },
  };
};

const hoverLift = (reduce) =>
  reduce ? {} : { y: -6, transition: { duration: 0.2 } };

/**
 * Common small label chip
 */
const SectionLabel = ({ children }) => (
  <div
    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
    aria-label="section-label"
  >
    <Sparkles className="h-4 w-4" aria-hidden="true" />
    {children}
  </div>
);

const maintenanceRows = [
  { cert: "CAPM®", cycle: "5 years", pdu: "No PDUs (Re-exam required)" },
  { cert: "PMP®", cycle: "3 years", pdu: "60 PDUs" },
  { cert: "PgMP®", cycle: "3 years", pdu: "60 PDUs" },
  { cert: "PfMP®", cycle: "3 years", pdu: "60 PDUs (Portfolio focus)" },
  { cert: "PMI-ACP®", cycle: "3 years", pdu: "30 PDUs (Agile focus)" },
  { cert: "PMI-PBA®", cycle: "3 years", pdu: "60 PDUs (BA focus)" },
  { cert: "PMI-RMP®", cycle: "3 years", pdu: "30 PDUs (Risk focus)" },
  { cert: "PMI-SP®", cycle: "3 years", pdu: "30 PDUs (Scheduling focus)" },
];

const courses = [
  {
    course: "How to Measure Project Performance",
    wow: "3.0 hrs",
    power: "3.0 hrs",
    business: "1.0 hrs",
    total: "7.0 hrs",
  },
  {
    course: "Scrum Immersion for Agile PMs",
    wow: "5.0 hrs",
    power: "5.0 hrs",
    business: "5.0 hrs",
    total: "14.0 hrs",
  },
  {
    course: "Modern Leadership Techniques",
    wow: "5.0 hrs",
    power: "5.0 hrs",
    business: "4.0 hrs",
    total: "14.0 hrs",
  },
  {
    course: "Project Management Foundations",
    wow: "9.0 hrs",
    power: "9.0 hrs",
    business: "7.0 hrs",
    total: "25.0 hrs",
  },
];

const features = [
  "Earn all 60 PDUs in one bundle",
  "PMI-approved credits for easy renewal",
  "100% money-back guarantee",
  "180-day online access, start instantly",
  "Renew your PMP® with confidence",
  "Save more with the full bundle",
];

const statCards = [
  { icon: Award, value: "8+", label: "PMI Certifications" },
  { icon: Clock3, value: "60", label: "Maximum PDUs" },
  { icon: TrendingUp, value: "100%", label: "Online Access" },
];
const PDU = () => {
  const fadeUp = useFadeUp();
  const reduce = useReducedMotion();

  const handleScrollToMaintenance = (e) => {
    e.preventDefault();
    const el = document.getElementById("maintenance");
    if (el) {
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      aria-label="PMI Certification Renewal and PDU Maintenance"
      className="relative overflow-hidden pt-28 lg:pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#06111f] to-slate-950" />
      {/* Premium soft glows */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/5 blur-[180px]" />

      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative flex min-h-[90vh] items-center pb-16 lg:min-h-screen lg:pb-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* LEFT */}
          <div>
            <SectionLabel>PMI® Certification Renewal</SectionLabel>
            <h1 className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.75rem,3.5vw,3.5rem)]">
              Earn Your Required{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                PDUs
              </span>{" "}
              and Maintain Your Certification
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Keep your PMI® certification active through continuous
              professional development. Access PMI-approved training, earn the
              required PDUs, and renew your certification with confidence.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="#maintenance"
                onClick={handleScrollToMaintenance}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 hover:scale-[1.02]"
                aria-label="View maintenance requirements"
              >
                Maintenance Requirements
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/book-training"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-4 font-semibold text-white backdrop-blur-xl transition-colors duration-200 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label="Talk to an advisor"
              >
                Talk to an Advisor
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {statCards.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={hoverLift(reduce)}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <item.icon
                    className="h-8 w-8 text-cyan-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-2xl">
              {/* Glow */}
              <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-500/20 blur-[90px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    className="h-10 w-10 text-cyan-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      PMP® Renewal Bundle
                    </h2>
                    <p className="text-slate-400">Complete all required PDUs</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "Earn all required 60 PDUs",
                    "PMI-approved learning content",
                    "Study anytime, anywhere",
                    "Instant online access",
                    "Renew with confidence",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <CheckCircle2
                        className="h-5 w-5 text-cyan-300 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-5 sm:p-6">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-cyan-300">
                    Recommended
                  </p>
                  <h3 className="mt-1 text-3xl sm:text-4xl font-bold text-white">
                    60 PDUs
                  </h3>
                  <p className="mt-2 text-slate-300">
                    Complete your certification renewal in one convenient
                    package.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div
        id="maintenance"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20"
      >
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <SectionLabel>Stay Current</SectionLabel>

          <h2 className="mt-6 text-balance font-bold leading-tight text-white [font-size:clamp(1.875rem,3.6vw,3.5rem)]">
            Certification Maintenance{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Requirements
            </span>
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-pretty text-base sm:text-lg text-slate-300 leading-relaxed">
            Keep your PMI® certification active through continuous professional
            development and stay ahead in today&apos;s evolving project
            management landscape.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12 hidden md:block"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-cyan-950/20">
            <div className="grid grid-cols-[1.1fr_0.8fr_1.2fr] gap-4 p-5 sm:p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 text-cyan-200 font-semibold">
              <div>Certification</div>
              <div>Cycle</div>
              <div>PDUs Required</div>
            </div>

            {maintenanceRows.map((row, i) => (
              <motion.div
                key={row.cert}
                initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.04 }}
                className={`grid grid-cols-[1.1fr_0.8fr_1.2fr] gap-4 p-5 sm:p-6 border-t border-white/5 transition-all duration-300 ${
                  i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                } hover:bg-white/[0.04]`}
              >
                <div className="font-medium text-cyan-200 break-words">
                  {row.cert}
                </div>
                <div className="text-slate-300 break-words">{row.cycle}</div>
                <div className="text-slate-300 break-words">{row.pdu}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="mt-8 space-y-4 md:hidden">
          {maintenanceRows.map((row, i) => (
            <motion.div
              key={row.cert}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              whileHover={hoverLift(reduce)}
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5"
            >
              <h3 className="text-lg font-semibold text-cyan-200">
                {row.cert}
              </h3>
              <div className="mt-4 space-y-3 text-slate-300">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-cyan-300/80">Cycle</span>
                  <span className="text-right">{row.cycle}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-cyan-300/80">PDUs</span>
                  <span className="text-right">{row.pdu}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Renewal Bundle */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={fadeUp}
  className="mt-16 sm:mt-20 mb-0 pb-0"
>
  <div
    className="
      relative overflow-hidden
      rounded-[28px] sm:rounded-[32px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-5 sm:p-8 lg:p-12
      w-full
    "
  >
    {/* Background Glows */}
    <div className="pointer-events-none absolute -top-16 -right-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
    <div className="pointer-events-none absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

    <div className="relative z-10 flex flex-col items-center text-center">
      <SectionLabel>Renew & Maintain</SectionLabel>

      <h3 className="mt-6 max-w-4xl text-balance font-bold leading-tight text-white [font-size:clamp(1.75rem,3.2vw,3rem)]">
        Maintain Your{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
          PMP® Certification
        </span>
      </h3>

      <p className="mt-4 max-w-4xl text-pretty text-base sm:text-lg leading-relaxed text-slate-300">
        Complete your PMP® renewal quickly and confidently with our
        <span className="text-cyan-200 font-semibold">
          {" "}
          PMP Renewal Bundle (60 PDUs)
        </span>
        . Earn all required PDUs in one package with no guesswork—just
        continuous professional growth.
      </p>

      {/* Features */}
      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <motion.div
            key={feature}
            whileHover={hoverLift(reduce)}
            className="
              group flex h-full flex-col items-center justify-center
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-5
              text-center
              hover:border-cyan-400/30
              hover:bg-white/[0.05]
              transition-all duration-300
            "
          >
            <CheckCircle2
              className="mb-3 h-7 w-7 text-cyan-300"
              aria-hidden="true"
            />
            <p className="text-slate-300">{feature}</p>
          </motion.div>
        ))}
      </div>

      {/* ATP Badge */}
      <div className="mt-10 w-full rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <ShieldCheck
            className="h-10 w-10 shrink-0 text-cyan-300"
            aria-hidden="true"
          />

          <div className="max-w-3xl">
            <h4 className="text-2xl font-semibold text-cyan-200">
              Premier Authorized Training Partner (ATP)
            </h4>

            <p className="mt-3 text-slate-300 leading-relaxed">
              All courses included in this bundle are approved by the
              Project Management Institute® and qualify for certification
              renewal requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Course Table */}
      <div className="mt-12 hidden w-full xl:block">
        <div className="mx-auto max-w-6xl overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="min-w-[1000px]">
            {/* Header */}
            <div className="grid grid-cols-5 p-5 sm:p-6 text-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 text-cyan-200 font-semibold">
              <div>Course</div>
              <div>Ways of Working</div>
              <div>Power Skills</div>
              <div>Business Acumen</div>
              <div>Total Hours</div>
            </div>

            {/* Rows */}
            {courses.map((course, i) => (
              <div
                key={course.course}
                className={`grid grid-cols-5 p-5 sm:p-6 text-center border-t border-white/5 transition-colors duration-300 hover:bg-white/[0.04] ${
                  i % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <div className="font-medium text-cyan-200">
                  {course.course}
                </div>
                <div className="text-slate-300">{course.wow}</div>
                <div className="text-slate-300">{course.power}</div>
                <div className="text-slate-300">{course.business}</div>
                <div className="font-medium text-slate-200">
                  {course.total}
                </div>
              </div>
            ))}

            {/* Totals */}
            <div className="grid grid-cols-5 p-5 sm:p-6 text-center bg-cyan-500/10 border-t border-cyan-400/20">
              <div className="font-bold text-cyan-200">Grand Total</div>
              <div className="font-semibold text-white">22 hrs</div>
              <div className="font-semibold text-white">22 hrs</div>
              <div className="font-semibold text-white">17 hrs</div>
              <div className="font-bold text-white">61 hrs*</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Course Cards */}
      <div className="mt-8 w-full max-w-3xl space-y-4 xl:hidden">
        {courses.map((course) => (
          <motion.div
            key={course.course}
            whileHover={hoverLift(reduce)}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl"
          >
            <h4 className="text-lg font-semibold text-cyan-200">
              {course.course}
            </h4>

            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex justify-between gap-4">
                <span>Ways of Working</span>
                <span>{course.wow}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Power Skills</span>
                <span>{course.power}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span>Business Acumen</span>
                <span>{course.business}</span>
              </div>

              <div className="flex justify-between gap-4 border-t border-white/10 pt-3 font-semibold text-cyan-200">
                <span>Total</span>
                <span>{course.total}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Mobile Total Card */}
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-center">
          <h4 className="text-xl font-bold text-cyan-200">
            Grand Total: 61 PDUs*
          </h4>

          <p className="mt-2 text-slate-300">
            Ways of Working: 22 hrs • Power Skills: 22 hrs •
            Business Acumen: 17 hrs
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default PDU;
