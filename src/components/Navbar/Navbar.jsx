import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsIndustriesDropdownOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
    setIsServicesDropdownOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen((prev) => !prev);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-50 shadow-lg relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 sm:h-10 md:h-12 w-auto mr-2"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex flex-1 items-center justify-between ml-10">
            <div className="flex flex-1 items-center justify-between max-w-5xl">
              {/* Home Dropdown */}
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleHomeDropdown}
                onMouseLeave={toggleHomeDropdown}
              >
                <Link
                  to="/"
                  className="flex items-center text-gray-700 hover:text-amber-500 px-4 py-2 text-md font-medium transition ease-in-out hover:-translate-y-1 hover:scale-105"
                >
                  Home
                  <i className="fa-solid fa-angle-down ml-2 mt-1"></i>
                </Link>

                {isHomeDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl">
                      <HashLink
                        smooth
                        to="/#about-us"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        About Us
                      </HashLink>
                      <Link
                        to="/#leadership-culture"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Leadership & Culture
                      </Link>
                      <HashLink
                        smooth
                        to="/#contact-us"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Contact Us
                      </HashLink>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
              >
                <button className="flex items-center text-gray-700 hover:text-amber-500 px-4 py-2 text-md font-medium transition ease-in-out hover:-translate-y-1 hover:scale-105 focus:outline-none">
                  Services
                  <i className="fa-solid fa-angle-down ml-2 mt-1"></i>
                </button>

                {isServicesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl">
                      <Link
                        to="/services/training-and-certifications"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Professional Training & Certifications
                      </Link>
                      <Link
                        to="/services/software-engineering"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Software Engineering
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                to="/projects"
                className="px-4 py-2 text-gray-700 hover:text-amber-500 font-medium transition hover:-translate-y-1 hover:scale-105"
              >
                Our Projects
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleIndustriesDropdown}
                onMouseLeave={toggleIndustriesDropdown}
              >
                <button className="flex items-center text-gray-700 hover:text-amber-500 px-4 py-2 text-md font-medium transition ease-in-out hover:-translate-y-1 hover:scale-105 focus:outline-none">
                  Industries
                  <i className="fa-solid fa-angle-down ml-2 mt-1"></i>
                </button>

                {isIndustriesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl">
                      <Link
                        to="/industries/health-care"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Health Care
                      </Link>
                      <Link
                        to="/industries/fintech"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Fintech
                      </Link>
                      <Link
                        to="/industries/insurance"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Insurance
                      </Link>
                      <Link
                        to="/industries/telecom"
                        className="block px-4 py-2 hover:text-amber-500"
                      >
                        Telecom
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="px-4 py-2 text-gray-700 hover:text-amber-500 font-medium transition hover:-translate-y-1 hover:scale-105"
              >
                Portfolio
              </Link>
            </div>

            <div className="ml-8">
              <Link
                to="/quote"
                className="bg-gray-800 text-white px-5 py-2 rounded-md font-medium hover:bg-amber-500 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-amber-500 p-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-16 right-0 bg-amber-50 rounded-md shadow-lg mt-2 mr-2 z-20 p-2 w-64"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Home Dropdown */}
          <div className="relative w-full">
            <button
              onClick={toggleHomeDropdown}
              className="flex items-center justify-center w-full px-4 py-2 text-gray-700 hover:text-amber-500 font-medium"
            >
              Home
            </button>
            {isHomeDropdownOpen && (
              <div className="pl-4">
                <HashLink
                  smooth
                  to="/#about-us"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </HashLink>
                <Link
                  to="/#leadership-culture"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Leadership & Culture
                </Link>
                <HashLink
                  smooth
                  to="/#contact-us"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </HashLink>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative w-full">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center justify-center w-full px-4 py-2 text-gray-700 hover:text-amber-500 font-medium"
            >
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/services/ui-ux-design"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Professional Training & Certifications
                </Link>
                <Link
                  to="/services/discovery-workshop"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Software Engineering
                </Link>
              </div>
            )}
          </div>

          {/* Our Projects Link */}
          <Link
            to="/projects"
            className="block px-4 py-2 text-gray-700 hover:text-amber-500 text-center font-medium"
            onClick={toggleMobileMenu}
          >
            Our Projects
          </Link>

          {/* Industries Dropdown */}
          <div className="relative w-full">
            <button
              onClick={toggleIndustriesDropdown}
              className="flex items-center justify-center w-full px-4 py-2 text-gray-700 hover:text-amber-500 font-medium"
            >
              Industries
            </button>
            {isIndustriesDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/industries/health-care"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Health Care
                </Link>
                <Link
                  to="/industries/fintech"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Fintech
                </Link>
                <Link
                  to="/industries/insurance"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Insurance
                </Link>
                <Link
                  to="/industries/telecom"
                  className="block px-4 py-2 hover:text-amber-500"
                  onClick={toggleMobileMenu}
                >
                  Telecom
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Link */}
          <Link
            to="/portfolio"
            className="block px-4 py-2 text-gray-700 hover:text-amber-500 text-center font-medium"
            onClick={toggleMobileMenu}
          >
            Portfolio
          </Link>

          {/* Get a Quote Link */}
          <Link
            to="/quote"
            className="block px-4 py-2 text-gray-700 hover:text-amber-500 text-center font-medium"
            onClick={toggleMobileMenu}
          >
            Get a Quote
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
