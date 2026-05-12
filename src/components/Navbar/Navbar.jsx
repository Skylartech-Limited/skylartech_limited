import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLink =
    "text-gray-700 hover:text-purple-700 transition font-medium text-sm tracking-wide";

  const dropdownItem =
    "block px-5 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-purple-100 shadow-sm">
      {/* subtle gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* LOGO */}
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <img
              src={Logo}
              alt="SkylarTech"
              className="w-[150px] sm:w-[180px] lg:w-[220px] object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {/* HOME */}
            <Link to="/" onClick={scrollToTop} className={navLink}>
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink + " flex items-center gap-1"}>
                About
                <i className="fa-solid fa-chevron-down text-[10px] text-purple-500"></i>
              </button>

              <AnimatePresence>
                {openDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-100 overflow-hidden"
                  >
                    <a href="/#about-skylartech" className={dropdownItem}>
                      About Skylartech
                    </a>

                    <a href="/#why-choose-us" className={dropdownItem}>
                      Why Choose Us
                    </a>

                    <div className="border-t border-purple-100 my-1" />

                    <a href="/#certification-programs" className={dropdownItem}>
                      Certifications
                    </a>

                    <a href="/#our-expertise" className={dropdownItem}>
                      Expertise
                    </a>

                    <a href="/#our-clients" className={dropdownItem}>
                      Clients & Success Stories
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OFFERINGS */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("offerings")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink + " flex items-center gap-1"}>
                Offerings
                <i className="fa-solid fa-chevron-down text-[10px] text-purple-500"></i>
              </button>

              <AnimatePresence>
                {openDropdown === "offerings" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-100 overflow-hidden"
                  >
                    {[
                      { name: "PMP Training", link: "/offerings/pmp-training" },
                      {
                        name: "Corporate Training",
                        link: "/offerings/corporate-training",
                      },
                      { name: "Consulting", link: "/offerings/consulting" },
                      {
                        name: "Agile Transformation",
                        link: "/offerings/agile-and-scrum",
                      },
                      {
                        name: "Software Engineering",
                        link: "/offerings/web-and-app-development",
                      },
                    ].map((item, i) => (
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
                )}
              </AnimatePresence>
            </div>

            {/* CONTACT */}
            <Link to="/contact-us" className={navLink}>
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 text-2xl"
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
            className="lg:hidden bg-white border-t border-purple-100 px-6 py-6 space-y-4"
          >
            <Link to="/" className="block text-gray-700">
              Home
            </Link>

            <a href="#about-skylartech" className="block text-gray-700">
              About
            </a>
            <a href="#certification-programs" className="block text-gray-700">
              Certifications
            </a>
            <a href="#our-expertise" className="block text-gray-700">
              Expertise
            </a>
            <a href="#our-clients" className="block text-gray-700">
              Clients
            </a>

            <Link to="/contact-us" className="block text-gray-700">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
