import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BadgeCheck } from "lucide-react";
import Logo from "../../assets/Logo.png";
import Membership from "../../assets/Membership.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
  };

  /* ================= PREMIUM PURPLE NAV STYLE ================= */
  const navLink =
    "text-gray-700 hover:text-purple-700 transition-all duration-200 font-medium tracking-[0.3px] text-base lg:text-[17px]";

  const dropdownItem =
    "block px-6 py-3 text-[15px] text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-all duration-200";

  const industries = [
    { name: "Banking & Finance", link: "/industries/banking-and-finance" },
    { name: "Telecommunications", link: "/industries/telecommunications" },
    { name: "Government & Public Sector", link: "/industries/government" },
    { name: "NGOs & Development", link: "/industries/ngos" },
    { name: "Healthcare", link: "/industries/healthcare" },
  ];

  const MobileDropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b border-purple-100/40 py-2 text-center">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-center items-center gap-2 py-2 font-medium text-gray-800"
        >
          {title}
          <span className="text-purple-500">{open ? "−" : "+"}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col items-center text-center gap-2 pb-3 text-gray-600"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const [isCertOpen, setIsCertOpen] = useState(false);
  useEffect(() => {
    if (!isCertOpen) return;

    // lock scroll
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") setIsCertOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isCertOpen]);
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 
      bg-white/60 backdrop-blur-2xl 
      bg-gradient-to-r from-purple-50/30 via-white/70 to-indigo-50/20
      border-b border-purple-100/40 
      shadow-sm shadow-black/5"
      >
        {/* bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* LOGO */}
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <img
                src={Logo}
                alt="SkylarTech"
                className="w-[180px] lg:w-[210px] object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-14 xl:gap-16 flex-1 justify-center">
              <Link
                to="/"
                onClick={scrollToTop}
                className={
                  navLink + " transition-all duration-200 hover:-translate-y-1"
                }
              >
                Home
              </Link>

              {/* ABOUT */}
              <div className="relative py-4 group">
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className={
                    navLink +
                    " flex items-center gap-1 transition-all duration-300 ease-out hover:-translate-y-1 hover:text-purple-600"
                  }
                >
                  Company <ChevronDown className="w-3 h-3 text-purple-500" />
                </Link>

                <motion.div className="absolute left-0 top-full -mt-1 w-80 bg-white rounded-2xl shadow-xl shadow-purple-100/20 border border-purple-100/40 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="/#about-skylartech" className={dropdownItem}>
                    About Skylartech
                  </a>
                  <a href="/#why-choose-us" className={dropdownItem}>
                    Why Choose Us
                  </a>
                  <a href="/#certification-programs" className={dropdownItem}>
                    Certifications
                  </a>
                  <a href="/#our-expertise" className={dropdownItem}>
                    Expertise
                  </a>
                  <a href="/#clients" className={dropdownItem}>
                    Clients
                  </a>

                  <a href="/#testimonials" className={dropdownItem}>
                    Success Stories
                  </a>
                </motion.div>
              </div>
              {/* OFFERINGS */}
              <div className="relative py-4 group">
                <button
                  className={
                    navLink +
                    " flex items-center gap-1 transition-all duration-300 ease-out hover:-translate-y-1 hover:text-purple-600"
                  }
                >
                  Offerings <ChevronDown className="w-3 h-3 text-purple-500" />
                </button>

                {/* MAIN DROPDOWN */}
                <motion.div
                  className="
      absolute left-0 top-full -mt-1 w-80
      bg-white rounded-2xl shadow-xl
      border border-purple-100/40
      overflow-visible
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
      z-50
    "
                >
                  {/* PROFESSIONAL TRAINING WRAPPER */}
                  <div className="relative group/sub">
                    {/* MAIN LINK */}
                    <Link
                      to="/offerings/professional-training-and-certification"
                      className="px-6 py-3 flex justify-between items-center hover:bg-purple-50 text-gray-700"
                    >
                      Professional Training & Certification
                      <ChevronDown className="w-4 h-4 text-purple-500 rotate-[-90deg]" />
                    </Link>

                    {/* SIDE FLYOUT (RESPONSIVE + STABLE HOVER BRIDGE) */}
                    <div
                      className="
          hidden lg:block
          absolute left-full top-[-4px] ml-1 pt-2
          w-72
          bg-white border border-purple-100/40 rounded-2xl shadow-xl
          opacity-0 invisible
          group-hover/sub:opacity-100 group-hover/sub:visible
          transition-all duration-200
          z-[60]
        "
                    >
                      <Link to="/certifications/capm" className={dropdownItem}>
                        CAPM®
                      </Link>
                      <Link to="/certifications/pmp" className={dropdownItem}>
                        PMP®
                      </Link>
                      <Link to="/certifications/pgmp" className={dropdownItem}>
                        PgMP®
                      </Link>
                      <Link to="/certifications/pfmp" className={dropdownItem}>
                        PfMP®
                      </Link>
                      <Link
                        to="/certifications/pmi-acp"
                        className={dropdownItem}
                      >
                        PMI-ACP®
                      </Link>
                      <Link
                        to="/certifications/pmi-rmp"
                        className={dropdownItem}
                      >
                        PMI-RMP®
                      </Link>
                      <Link
                        to="/certifications/pmi-pba"
                        className={dropdownItem}
                      >
                        PMI-PBA®
                      </Link>
                      <Link
                        to="/certifications/pmi-sp"
                        className={dropdownItem}
                      >
                        PMI-SP®
                      </Link>
                      <Link to="/certifications/gpm-b" className={dropdownItem}>
                        GPM-b®
                      </Link>
                      <Link
                        to="/certifications/pmi-pmocp"
                        className={dropdownItem}
                      >
                        PMI-PMOCP®
                      </Link>
                      <Link
                        to="/certifications/pmi-cpmai"
                        className={dropdownItem}
                      >
                        PMI-CPMAI®
                      </Link>
                      <Link
                        to="/certifications/pmi-cp"
                        className={dropdownItem}
                      >
                        PMI-CP®
                      </Link>
                    </div>
                  </div>

                  {/* OTHER OFFERINGS */}
                  <Link
                    to="/offerings/consulting-and-organizational-transformation"
                    className={dropdownItem}
                  >
                    Consulting & Organizational Transformation
                  </Link>

                  <Link
                    to="/offerings/portfolio-pmo-and-governance-excellence"
                    className={dropdownItem}
                  >
                    Portfolio, PMO & Governance Excellence
                  </Link>

                  <Link
                    to="/offerings/agile-and-adaptive-delivery-excellence"
                    className={dropdownItem}
                  >
                    Agile & Adaptive Delivery Excellence
                  </Link>

                  <Link
                    to="/offerings/risk-compliance-and-assurance"
                    className={dropdownItem}
                  >
                    Risk, Compliance & Assurance
                  </Link>

                  <Link
                    to="/offerings/business-analysis-and-requirements-gathering"
                    className={dropdownItem}
                  >
                    Business Analysis & Requirements Engineering
                  </Link>
                </motion.div>
              </div>

              {/* INDUSTRIES */}
              <div className="relative py-4 group">
                <button className={navLink + " flex items-center gap-1 group"}>
                  <span className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:text-purple-600">
                    Who We Serve
                  </span>

                  <ChevronDown className="w-3 h-3 text-purple-500 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <motion.div className="absolute left-0 top-full -mt-1 w-80 bg-white rounded-2xl shadow-xl shadow-purple-100/20 border border-purple-100/40 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {industries.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      onClick={scrollToTop}
                      className={dropdownItem}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              </div>
              {/* CONTACT */}
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                className={
                  navLink +
                  " transition-all duration-300 ease-out hover:-translate-y-1 hover:text-purple-600"
                }
              >
                Contact
              </Link>

              {/* {CERTIFICATE OF MEMBERSHIP - DESKTOP ONLY} */}
              <button
                onClick={() => setIsCertOpen(true)}
                className="
    flex items-center gap-1
    text-purple-800
    font-medium
    tracking-wide
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:text-purple-500
    hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]
  "
              >
                <BadgeCheck
                  className="
      w-4 h-4 text-purple-800
      transition-all duration-300 ease-out
      group-hover:text-purple-500
    "
                />
                Certificate
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl text-gray-700"
              >
                {isMobileMenuOpen ? "✕" : "☰"}
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
              className="lg:hidden bg-white border-t border-purple-100/40 px-6 py-6"
            >
              <div className="space-y-3 text-center">
                {/* HOME */}
                <Link to="/" onClick={closeMenus} className="block py-2">
                  Home
                </Link>

                {/* ABOUT */}
                <MobileDropdown title="Company">
                  <a href="/about" onClick={closeMenus}>
                    Overview
                  </a>

                  <a href="/#about-skylartech" onClick={closeMenus}>
                    About Skylartech
                  </a>

                  <a href="/#why-choose-us" onClick={closeMenus}>
                    Why Choose Us
                  </a>

                  <a href="/#certification-programs" onClick={closeMenus}>
                    Certifications
                  </a>

                  <a href="/#our-expertise" onClick={closeMenus}>
                    Expertise
                  </a>

                  <a href="/#clients" onClick={closeMenus}>
                    Clients
                  </a>

                  <a href="/#testimonials" onClick={closeMenus}>
                    Success Stories
                  </a>
                </MobileDropdown>

                {/* OFFERINGS (FULLY RESPONSIVE + NESTED) */}
                <MobileDropdown title="Offerings">
                  {/* PROFESSIONAL TRAINING DROPDOWN */}
                  <MobileDropdown title="Professional Training & Certification">
                    <Link
                      to="/offerings/professional-training-and-certification"
                      onClick={closeMenus}
                      className="font-semibold text-purple-700"
                    >
                      Certifications
                    </Link>

                    <div className="mt-2 flex flex-col gap-2 text-sm">
                      <Link to="/certifications/capm" onClick={closeMenus}>
                        CAPM®
                      </Link>
                      <Link to="/certifications/pmp" onClick={closeMenus}>
                        PMP®
                      </Link>
                      <Link to="/certifications/pgmp" onClick={closeMenus}>
                        PgMP®
                      </Link>
                      <Link to="/certifications/pfmp" onClick={closeMenus}>
                        PfMP®
                      </Link>
                      <Link to="/certifications/pmi-acp" onClick={closeMenus}>
                        PMI-ACP®
                      </Link>
                      <Link to="/certifications/pmi-rmp" onClick={closeMenus}>
                        PMI-RMP®
                      </Link>
                      <Link to="/certifications/pmi-pba" onClick={closeMenus}>
                        PMI-PBA®
                      </Link>
                      <Link to="/certifications/pmi-sp" onClick={closeMenus}>
                        PMI-SP®
                      </Link>
                      <Link to="/certifications/gpm-b" onClick={closeMenus}>
                        GPM-b®
                      </Link>
                      <Link to="/certifications/pmi-pmocp" onClick={closeMenus}>
                        PMI-PMOCP®
                      </Link>
                      <Link to="/certifications/pmi-cpmai" onClick={closeMenus}>
                        PMI-CPMAI®
                      </Link>
                      <Link to="/certifications/pmi-cp" onClick={closeMenus}>
                        PMI-CP®
                      </Link>
                    </div>
                  </MobileDropdown>

                  {/* OTHER OFFERINGS */}
                  <Link
                    to="/offerings/consulting-and-organizational-transformation"
                    onClick={closeMenus}
                  >
                    Consulting & Organizational Transformation
                  </Link>

                  <Link
                    to="/offerings/portfolio-pmo-and-governance-excellence"
                    onClick={closeMenus}
                  >
                    Portfolio, PMO & Governance Excellence
                  </Link>

                  <Link
                    to="/offerings/agile-and-adaptive-delivery-excellence"
                    onClick={closeMenus}
                  >
                    Agile & Adaptive Delivery Excellence
                  </Link>

                  <Link
                    to="/offerings/risk-compliance-and-assurance"
                    onClick={closeMenus}
                  >
                    Risk, Compliance & Assurance
                  </Link>

                  <Link
                    to="/offerings/business-analysis-and-requirements-gathering"
                    onClick={closeMenus}
                  >
                    Business Analysis & Requirements Engineering
                  </Link>
                </MobileDropdown>

                {/* INDUSTRIES */}
                <MobileDropdown title="Who We Serve">
                  {industries.map((item, i) => (
                    <Link key={i} to={item.link} onClick={closeMenus}>
                      {item.name}
                    </Link>
                  ))}
                </MobileDropdown>

                {/* {CONTACT} */}
                <Link
                  to="/contact-us"
                  onClick={closeMenus}
                  className="block py-2 mt-2"
                >
                  Contact
                </Link>

                {/* {CERTIFICATE OF MEMBERSHIP} */}
                <button
                  onClick={() => {
                    setIsCertOpen(true);
                    closeMenus();
                  }}
                  className="flex items-center justify-center gap-2 py-2 text-purple-700 font-medium w-full"
                >
                  <BadgeCheck className="w-4 h-4" />
                  Certificate
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* CERTIFICATE MODAL (OUTSIDE NAV - IMPORTANT) */}
      {isCertOpen &&
        createPortal(
          <AnimatePresence>
            <div className="fixed inset-0 z-[999999] flex items-center justify-center px-3 sm:px-6">
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCertOpen(false)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
                className="
            relative z-[1000000]
            bg-white
            rounded-2xl
            shadow-2xl
            w-full max-w-5xl
            max-h-[92vh]
            overflow-hidden
            flex flex-col
          "
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-purple-600" />
                    <h2 className="text-sm sm:text-base font-semibold text-gray-800">
                      Membership Certificate
                    </h2>
                  </div>

                  <button
                    onClick={() => setIsCertOpen(false)}
                    className="text-gray-500 hover:text-black text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="relative flex-1 flex items-center justify-center bg-gray-50 p-3 sm:p-6 overflow-auto">
                  {/* Certificate */}
                  <img
                    src={Membership}
                    alt="Membership Certificate"
                    className="
                w-full
                max-h-[75vh]
                object-contain
                rounded-lg
                shadow-md
                select-none
                pointer-events-none
              "
                    draggable="false"
                  />

                  {/* WATERMARK OVERLAY */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <span className="text-gray-400/20 text-3xl sm:text-5xl font-bold rotate-[-20deg] select-none">
                      SKYLARTECH • CONFIDENTIAL
                    </span>
                  </div>

                  {/* PRINT HINT */}
                  <div className="absolute bottom-2 right-3 text-[10px] sm:text-xs text-gray-400">
                    Viewing only — printing disabled
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default Navbar;
