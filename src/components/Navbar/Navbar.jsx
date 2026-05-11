import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
    useState(false);

  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img
                src={Logo}
                alt="Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
         <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-auto">
            {/* HOME */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              Home
            </Link>

            {/* ABOUT */}
            <a
              href="#about-skylartech"
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              About Skylartech
            </a>

            {/* CERTIFICATIONS */}
            <a
              href="#certification-programs"
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              Certifications
            </a>

            {/* EXPERTISE */}
            <a
              href="#our-expertise"
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              Expertise
            </a>

            {/* CLIENTS */}
            <a
              href="#our-clients"
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              Clients
            </a>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300">
                Services
                <i className="fa-solid fa-angle-down ml-2 text-xs"></i>
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-amber-50 py-3">
                      {[
                        {
                          name: "PMP® Certification Training",
                          path: "/services/pmp-training",
                        },
                        {
                          name: "Project Management Consulting",
                          path: "/services/consulting",
                        },
                        {
                          name: "Corporate Project Management Training",
                          path: "/services/corporate-training",
                        },
                        {
                          name: "Web and App Development",
                          path: "/services/web-and-app-development",
                        },
                        {
                          name: "Agile and Scrum Training",
                          path: "/services/agile-and-scrum",
                        },
                        {
                          name: "CAPM® Certification Training",
                          path: "/services/capm-training",
                        },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-amber-100 hover:text-amber-600 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIsIndustriesDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300">
                Industries
                <i className="fa-solid fa-angle-down ml-2 text-xs"></i>
              </button>

              <AnimatePresence>
                {isIndustriesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-amber-50 py-3">
                      {[
                        {
                          name: "Health Care",
                          path: "/industries/health-care",
                        },
                        {
                          name: "Fintech",
                          path: "/industries/fintech",
                        },
                        {
                          name: "Insurance",
                          path: "/industries/insurance",
                        },
                        {
                          name: "Telecom",
                          path: "/industries/telecom",
                        },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-amber-100 hover:text-amber-600 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONTACT */}
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-amber-500 text-sm xl:text-base font-medium transition duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-amber-500 p-2 rounded-lg transition"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <i className="fa-solid fa-xmark text-2xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-2xl border-t border-gray-200"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-5 space-y-4">
              <Link
                to="/"
                onClick={() => {
                  toggleMobileMenu();
                  scrollToTop();
                }}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                Home
              </Link>

              <a
                href="#about-skylartech"
                onClick={toggleMobileMenu}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                About Skylartech
              </a>

              <a
                href="#certification-programs"
                onClick={toggleMobileMenu}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                Certification Programs
              </a>

              <a
                href="#our-expertise"
                onClick={toggleMobileMenu}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                Our Expertise
              </a>

              <a
                href="#our-clients"
                onClick={toggleMobileMenu}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                Our Clients
              </a>

              {/* MOBILE SERVICES */}
              <div>
                <p className="text-gray-900 font-semibold mb-2">Services</p>

                <div className="pl-4 space-y-2">
                  <Link
                    to="/services/ui-ux-design"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    UI & UX Design
                  </Link>

                  <Link
                    to="/services/discovery-workshop"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Discovery Workshop
                  </Link>

                  <Link
                    to="/services/iot-development"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    IOT Development
                  </Link>

                  <Link
                    to="/services/web-and-app-development"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Web & App Development
                  </Link>
                </div>
              </div>

              {/* MOBILE INDUSTRIES */}
              <div>
                <p className="text-gray-900 font-semibold mb-2">
                  Industries
                </p>

                <div className="pl-4 space-y-2">
                  <Link
                    to="/industries/health-care"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Health Care
                  </Link>

                  <Link
                    to="/industries/fintech"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Fintech
                  </Link>

                  <Link
                    to="/industries/insurance"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Insurance
                  </Link>

                  <Link
                    to="/industries/telecom"
                    className="block text-gray-600 hover:text-amber-500"
                    onClick={toggleMobileMenu}
                  >
                    Telecom
                  </Link>
                </div>
              </div>

              <Link
                to="/contact-us"
                onClick={toggleMobileMenu}
                className="block text-gray-700 hover:text-amber-500 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;