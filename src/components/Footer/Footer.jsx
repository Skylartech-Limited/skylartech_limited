import React from "react";
import { Link } from "react-router-dom";
import { useNewsletter } from "../Newsletter/Newslettercontext";

const Footer = () => {
  const { openNewsletter } = useNewsletter();
  return (
    <footer className="relative bg-gradient-to-br from-black via-slate-950 to-[#05070f] text-white overflow-hidden">
      {/* PREMIUM ANIMATED BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl rounded-full animate-pulse delay-2000" />

      {/* PREMIUM GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* PREMIUM CTA SECTION */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12">
            {/* Decorative Glows */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6">
                <i className="fas fa-graduation-cap"></i>
                Transform Your Career Today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Ready to Advance Your Career?
                </span>
              </h2>

              <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                Join professionals and organizations transforming their
                capabilities through globally recognized certifications,
                consulting services, and world-class training programs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/book-training"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 hover:from-indigo-500 hover:via-purple-500 hover:to-emerald-500 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
                >
                  Book Your Training
                  <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </div>

              {/* Optional Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-400"></i>
                  PMI Authorized Training Partner
                </div>

                <div className="flex items-center gap-2">
                  <i className="fas fa-users text-indigo-400"></i>
                  Corporate & Individual Training
                </div>

                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-purple-400"></i>
                  Global Best Practices
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* PREMIUM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center justify-items-center">
          {/* QUICK LINKS */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-slate-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-emerald-400"></span>
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base flex flex-col items-center">
              {[
                ["Home", "/"],
                ["About Skylartech", "/about"],
                ["Offerings", "/offerings"],
                ["PDU", "/pdu"],
                ["Who We Serve", "/who-we-serve"],
                ["Book Your Training", "/book-training"],
                ["Newsletter", "newsletter"],
              ].map(([label, path], i) => (
                <li key={i} className="group w-full flex justify-center">
                  {path === "newsletter" ? (
                    <button
                      onClick={openNewsletter}
                      className="flex items-center gap-2 hover:text-emerald-300 transition-all duration-300"
                    >
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{label}</span>
                    </button>
                  ) : (
                    <Link
                      to={path}
                      className="flex items-center gap-2 hover:text-emerald-300 transition-all duration-300"
                    >
                      <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-300 via-slate-300 to-emerald-300 bg-clip-text text-transparent relative inline-block">
              Certifications
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></span>
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base flex flex-col items-center">
              {[
                ["PMP®", "/certifications/pmp"],
                ["CAPM®", "/certifications/capm"],
                ["PMI-ACP®", "/certifications/pmi-acp"],
                ["PMI-RMP®", "/certifications/pmi-rmp"],
                ["PMI-PBA®", "/certifications/pmi-pba"],
                ["PMI-SP®", "/certifications/pmi-sp"],
                ["PMI-CPMAI®", "/certifications/pmi-cpmai"],
                ["PMI-CP®", "/certifications/pmi-cp"],
              ].map(([label, path], i) => (
                <li key={i} className="group w-full flex justify-center">
                  <Link
                    to={path}
                    className="flex items-center gap-2 hover:text-indigo-300 transition-all duration-300"
                  >
                    <i className="fas fa-certificate text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFERINGS */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-300 via-slate-300 to-indigo-300 bg-clip-text text-transparent relative inline-block">
              Offerings
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-indigo-400"></span>
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base flex flex-col items-center">
              {[
                [
                  "Professional Training & Certification",
                  "/offerings/professional-training-and-certification",
                ],
                [
                  "Consulting & Transformation",
                  "/offerings/consulting-and-organizational-transformation",
                ],
                [
                  "Portfolio & PMO Excellence",
                  "/offerings/portfolio-pmo-and-governance-excellence",
                ],
                [
                  "Agile Delivery Excellence",
                  "/offerings/agile-and-adaptive-delivery-excellence",
                ],
                [
                  "Risk & Compliance Assurance",
                  "/offerings/risk-compliance-and-assurance",
                ],
                [
                  "Business Analysis",
                  "/offerings/business-analysis-and-requirements-gathering",
                ],
              ].map(([label, path], i) => (
                <li key={i} className="group w-full flex justify-center">
                  <Link
                    to={path}
                    className="flex items-center gap-2 hover:text-emerald-300 transition-all duration-300"
                  >
                    <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="max-w-[250px]">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PREMIUM MAP & STATS */}
          <div className="w-full sm:col-span-2 lg:col-span-2 flex flex-col items-center space-y-6">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-slate-300 via-indigo-300 to-emerald-300 bg-clip-text text-transparent relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-emerald-400"></span>
            </h3>

            <div className="w-full max-w-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.687315766158!2d36.90754313880569!3d-1.3642799955893665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d07e950699d%3A0xdd6f2a4334473290!2sGateway%20Mall%2C%204th%20Floor%20Airport%20Road%2C%20North!5e0!3m2!1sen!2ske!4v1782310091062!5m2!1sen!2ske"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-[350px]"
                title="SkylarTech Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* PREMIUM SOCIALS */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            [
              "twitter",
              "https://twitter.com/skylartechke",
              "hover:bg-blue-500",
            ],
            [
              "linkedin",
              "https://www.linkedin.com/company/skylartechlimited/?viewAsMember=true",
              "hover:bg-blue-600",
            ],
            [
              "facebook",
              "https://www.facebook.com/SkylartechKE/",
              "hover:bg-blue-700",
            ],
            [
              "instagram",
              "https://www.instagram.com/skylartechlife/",
              "hover:bg-pink-600",
            ],
          ].map(([icon, url, hoverColor], i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/5 border border-white/10 ${hoverColor} hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-xl group`}
            >
              <i
                className={`fab fa-${icon} text-base sm:text-lg text-white/70 group-hover:text-white transition-colors`}
              />
            </a>
          ))}
        </div>

        {/* PREMIUM DIVIDER */}
        <div className="my-8 sm:my-12 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-white/10">
              <i className="fas fa-star text-emerald-400 text-xs"></i>
            </span>
          </div>
        </div>

        {/* PREMIUM FOOTER NOTE */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="text-xs text-white/50 leading-5 sm:leading-6 max-w-4xl mx-auto px-4">
            <p className="mb-3 sm:mb-4">
              PMI®, PMP®, CAPM®, PMI-ACP®, PgMP®, PfMP®, PMI-RMP®, PMI-PBA®,
              PMI-SP®, PMI-CPMAI®, PMI-CP®, PMI-PMOCP® are registered marks of
              Project Management Institute, Inc.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/60">
              <span className="text-center">
                © {new Date().getFullYear()} Skylartech Limited. All rights
                reserved.
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                Empowering Excellence
              </span>
            </div>
          </div>

          {/* PREMIUM BADGE */}
          <div className="pt-4 sm:pt-6">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-full">
              <i className="fas fa-shield-alt text-emerald-400 text-sm"></i>
              <span className="text-xs text-white/70">
                PMI Authorized Training Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
