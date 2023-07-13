import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsIndustriesDropdownOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-50 shadow-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-16 w-auto mr-2"
              />
              <div className="text-gray-700 text-lg sm:text-xl md:text-2xl font-sans">
                <span className="font-semibold tracking-widest">
                  Skylartech
                </span>{" "}
                <span className="mb-1 font-semibold tracking-widest">
                  Limited
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:flex space-x-4">
              <Link
                to="/"
                className="text-amber-500 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              >
                Home
              </Link>
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
              >
                <button className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 focus:outline-none">
                  <Link to="/services" className="flex items-center">
                    Services <i className="fa-solid fa-angle-down ml-2 mt-2"></i>
                  </Link>
                </button>
                {isServicesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/services/ui-ux-design"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        UI & UX Design
                      </Link>
                      <Link
                        to="/services/discovery-workshop"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Discovery Workshop
                      </Link>
                      <Link
                        to="/services/iot-development"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        IOT Development
                      </Link>
                      <Link
                        to="/services/web-and-app-development"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Web and App Development
                      </Link>
                      <Link
                        to="/services/custom-software-development"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Custom Software Development
                      </Link>
                      <Link
                        to="/services/support-and-maintenance"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Support and Maintenance
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
              <Link
                to="/technologies"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 ml-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              >
                Technologies
              </Link>
              <div
                className="relative inline-block text-left ml-3"
                onMouseEnter={toggleIndustriesDropdown}
                onMouseLeave={toggleIndustriesDropdown}
              >
                <button className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 focus:outline-none">
                  <Link to="/industries" className="flex items-center">
                    Industries <i className="fa-solid fa-angle-down ml-2 mt-2"></i>
                  </Link>
                </button>
                {isIndustriesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/industries/health-care"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Health Care
                      </Link>
                      <Link
                        to="/industries/fintech"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Fintech
                      </Link>
                      <Link
                        to="/industries/insurance"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Insurance
                      </Link>
                      <Link
                        to="/industries/telecom"
                        className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                        role="menuitem"
                      >
                        Telecom
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              >
                Portfolio
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex items-center ml-4 space-x-4">
              <Link
                to="/quote"
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-md font-medium ml-2 hidden sm:block hover:bg-amber-500 transition ease-in-out delay-75 hover:-translate-y-0 hover:-translate-x-1  hover:scale-90 duration-300"
              >
                Get a Quote
              </Link>
            </div>
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
                  ></path>
                </svg>
              </button>
              {isMobileMenuOpen && (
                <motion.div
                  className="absolute top-16 right-0 bg-amber-50 rounded-md shadow-lg mt-2 mr-2 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "1rem 0.5rem",
                    "@media (min-width: 640px)": {
                      top: "8rem",
                      right: 0,
                    },
                    "@media (min-width: 768px)": {
                      top: "6rem",
                      right: 0,
                    },
                    "@media (min-width: 1024px)": {
                      top: "5rem",
                      right: 0,
                    },
                    "@media (min-width: 1280px)": {
                      top: "4rem",
                      right: "2rem",
                    },
                    "@media (min-width: 1536px)": {
                      top: "4rem",
                      right: "4rem",
                    },
                  }}
                >
                  <Link
                    to="/"
                    className="block text-amber-500 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                  <div
                    className="relative inline-block text-left"
                    onClick={toggleServicesDropdown}
                  >
                    <button className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 focus:outline-none">
                      <Link to="/services" className="flex items-center">
                        Services <i className="fa-solid fa-angle-down ml-2 mt-2"></i>
                      </Link>
                    </button>
                    {isServicesDropdownOpen && (
                      <motion.div
                        className="absolute top-full -left-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/services/ui-ux-design"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            UI & UX Design
                          </Link>
                          <Link
                            to="/services/discovery-workshop"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Discovery Workshop
                          </Link>
                          <Link
                            to="/services/iot-development"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            IOT Development
                          </Link>
                          <Link
                            to="/services/web-and-app-development"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Web and App Development
                          </Link>
                          <Link
                            to="/services/custom-software-development"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Custom Software Development
                          </Link>
                          <Link
                            to="/services/support-and-maintenance"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Support and Maintenance
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Link
                    to="/technologies"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    Technologies
                  </Link>
                  <div
                    className="relative inline-block text-left"
                    onClick={toggleIndustriesDropdown}
                  >
                  <button className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 focus:outline-none">
                  <Link to="/industries" className="flex items-center">
                    Industries <i className="fa-solid fa-angle-down ml-2 mt-2"></i>
                  </Link>
                </button>
                    {isIndustriesDropdownOpen && (
                      <motion.div
                        className="absolute top-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/industries/health-care"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Health Care
                          </Link>
                          <Link
                            to="/industries/fintech"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Fintech
                          </Link>
                          <Link
                            to="/industries/insurance"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Insurance
                          </Link>
                          <Link
                            to="/industries/telecom"
                            className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500"
                            role="menuitem"
                            onClick={toggleMobileMenu}
                          >
                            Telecom
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <Link
                    to="/portfolio"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                    onClick={toggleMobileMenu}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
