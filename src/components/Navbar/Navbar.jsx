import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "../../assets/Logo.png";

const navLink =
  "relative text-slate-700 hover:text-violet-700 transition-all duration-300 font-medium tracking-wide text-[15px] lg:text-base after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-violet-500 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full";

const dropdownItem =
  "flex items-center min-h-[44px] w-full px-4 py-2.5 text-[14px] leading-snug text-left text-slate-600 hover:bg-violet-50/80 hover:text-violet-800 transition-colors duration-200";

const dropdownItemLabel = "flex-1 min-w-0";

const dropdownPanel =
  "absolute left-0 top-full mt-0.5 rounded-2xl border border-violet-100 bg-white shadow-[0_20px_60px_rgba(91,44,255,0.14)] overflow-hidden opacity-0 invisible translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50";

const flyoutPanel =
  "absolute left-full top-0 ml-0.5 w-56 rounded-2xl border border-violet-100 bg-white shadow-[0_20px_60px_rgba(91,44,255,0.14)] overflow-hidden opacity-0 invisible pointer-events-none group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:pointer-events-auto transition-all duration-200 z-[60]";

const companyLinks = [
  { label: "About Skylartech", href: "/#about-skylartech" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Certifications", href: "/#certification-programs" },
  { label: "Expertise", href: "/#our-expertise" },
  { label: "Clients", href: "/#clients" },
  { label: "Success Stories", href: "/#testimonials" },
];

const certifications = [
  { name: "CAPM®", link: "/certifications/capm" },
  { name: "PMP®", link: "/certifications/pmp" },
  { name: "PgMP®", link: "/certifications/pgmp" },
  { name: "PfMP®", link: "/certifications/pfmp" },
  { name: "PMI-ACP®", link: "/certifications/pmi-acp" },
  { name: "PMI-RMP®", link: "/certifications/pmi-rmp" },
  { name: "PMI-PBA®", link: "/certifications/pmi-pba" },
  { name: "PMI-SP®", link: "/certifications/pmi-sp" },
  { name: "GPM-b®", link: "/certifications/gpm-b" },
  { name: "PMI-PMOCP®", link: "/certifications/pmi-pmocp" },
  { name: "PMI-CPMAI®", link: "/certifications/pmi-cpmai" },
  { name: "PMI-CP®", link: "/certifications/pmi-cp" },
];

const otherOfferings = [
  {
    name: "Consulting & Organizational Transformation",
    link: "/offerings/consulting-and-organizational-transformation",
  },
  {
    name: "Portfolio, PMO & Governance Excellence",
    link: "/offerings/portfolio-pmo-and-governance-excellence",
  },
  {
    name: "Agile & Adaptive Delivery Excellence",
    link: "/offerings/agile-and-adaptive-delivery-excellence",
  },
  {
    name: "Risk, Compliance & Assurance",
    link: "/offerings/risk-compliance-and-assurance",
  },
  {
    name: "Business Analysis & Requirements Engineering",
    link: "/offerings/business-analysis-and-requirements-gathering",
  },
];

const industries = [
  { name: "Banking & Finance", link: "/who-we-serve/banking-and-finance" },
  { name: "Telecommunications", link: "/who-we-serve/telecommunications" },
  { name: "Government & Public Sector", link: "/who-we-serve/government" },
  { name: "NGOs & Development", link: "/who-we-serve/ngos" },
  { name: "Healthcare", link: "/who-we-serve/healthcare" },
];

const DropdownAccent = () => (
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
);

const MobileDropdown = ({ title, children, nested = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${nested ? "w-full" : "border-b border-violet-100/50"} py-1`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-center items-center gap-2 py-3 font-medium transition-colors duration-200 ${
          nested ? "text-sm text-slate-600" : "text-slate-800"
        }`}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 text-violet-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-center text-center gap-2 pb-4 text-slate-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const closeMenus = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(91,44,255,0.08)] border-b border-violet-100/50"
          : "bg-white/60 backdrop-blur-xl border-b border-violet-100/30 shadow-sm shadow-black/5"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/40 via-white/50 to-indigo-50/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-300/60 via-indigo-300/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-20" : "h-24 lg:h-28"
          }`}
        >
          <Link to="/" onClick={scrollToTop} className="flex items-center shrink-0 group">
            <img
              src={Logo}
              alt="SkylarTech"
              className={`object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                scrolled ? "w-[160px] lg:w-[190px]" : "w-[180px] lg:w-[210px]"
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12 flex-1 justify-center">
            <Link to="/" onClick={scrollToTop} className={navLink}>
              Home
            </Link>

            {/* COMPANY */}
            <div className="relative py-2 group">
              <Link
                to="/about"
                onClick={scrollToTop}
                className={`${navLink} flex items-center gap-1.5`}
              >
                Company
                <ChevronDown className="w-3.5 h-3.5 text-violet-500 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              <div className={`${dropdownPanel} w-72`}>
                <DropdownAccent />
                {companyLinks.map((item) => (
                  <a key={item.href} href={item.href} className={dropdownItem}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* OFFERINGS */}
            <div className="relative py-2 group">
              <Link to="/offerings" className={`${navLink} flex items-center gap-1`}>
                Offerings
                <ChevronDown className="w-3.5 h-3.5 text-violet-500 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              <div className={`${dropdownPanel} w-80 !overflow-visible py-1.5`}>
                <DropdownAccent />

                <div className="relative group/sub">
                  <Link
                    to="/offerings/professional-training-and-certification"
                    className={`${dropdownItem} justify-between gap-3`}
                  >
                    <span className={dropdownItemLabel}>
                      Professional Training & Certification
                    </span>
                    <ChevronDown className="w-4 h-4 text-violet-500 -rotate-90 shrink-0" />
                  </Link>

                  <div className="absolute left-full top-0 h-full w-2 pointer-events-none" aria-hidden="true" />

                  <div className={`${flyoutPanel} py-1`}>
                    <DropdownAccent />
                    {certifications.map((cert) => (
                      <Link key={cert.link} to={cert.link} className={dropdownItem}>
                        <span className={dropdownItemLabel}>{cert.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mx-4 my-1 border-t border-violet-100/70" />

                {otherOfferings.map((item) => (
                  <Link key={item.link} to={item.link} className={dropdownItem}>
                    <span className={dropdownItemLabel}>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* WHO WE SERVE */}
            <div className="relative py-2 group">
              <Link to="/who-we-serve" className={`${navLink} flex items-center gap-1.5`}>
                Who We Serve
                <ChevronDown className="w-3.5 h-3.5 text-violet-500 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              <div className={`${dropdownPanel} w-72`}>
                <DropdownAccent />
                {industries.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={scrollToTop}
                    className={dropdownItem}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-training"
              onClick={scrollToTop}
              className="hidden lg:inline-flex group items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Book Training
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-violet-100/60 bg-white/60 text-slate-700 hover:bg-violet-50 hover:border-violet-200 transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-violet-100/50 bg-white/90 backdrop-blur-2xl"
          >
            <div className="px-6 py-6 space-y-1 text-center max-h-[75vh] overflow-y-auto">
              <Link
                to="/"
                onClick={closeMenus}
                className="block py-3 font-medium text-slate-800 hover:text-violet-700 transition-colors"
              >
                Home
              </Link>

              <MobileDropdown title="Company">
                <Link to="/about" onClick={closeMenus} className="hover:text-violet-700 transition-colors">
                  Overview
                </Link>
                {companyLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="hover:text-violet-700 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </MobileDropdown>

              <MobileDropdown title="Offerings">
                <Link
                  to="/offerings"
                  onClick={closeMenus}
                  className="font-semibold text-violet-700"
                >
                  All Offerings
                </Link>

                <MobileDropdown title="Professional Training & Certification" nested>
                  <Link
                    to="/offerings/professional-training-and-certification"
                    onClick={closeMenus}
                    className="font-semibold text-violet-700"
                  >
                    Certifications Overview
                  </Link>
                  <div className="mt-1 flex flex-col gap-2 text-sm">
                    {certifications.map((cert) => (
                      <Link
                        key={cert.link}
                        to={cert.link}
                        onClick={closeMenus}
                        className="hover:text-violet-700 transition-colors"
                      >
                        {cert.name}
                      </Link>
                    ))}
                  </div>
                </MobileDropdown>

                {otherOfferings.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={closeMenus}
                    className="hover:text-violet-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </MobileDropdown>

              <MobileDropdown title="Who We Serve">
                <Link
                  to="/who-we-serve"
                  onClick={closeMenus}
                  className="font-semibold text-violet-700"
                >
                  All Industries
                </Link>
                {industries.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={closeMenus}
                    className="hover:text-violet-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </MobileDropdown>

              <Link
                to="/book-training"
                onClick={closeMenus}
                className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                Book Your Training
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
