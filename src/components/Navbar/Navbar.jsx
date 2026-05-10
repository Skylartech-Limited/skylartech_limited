import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  // ✅ NEW: scroll to top function
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


  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);

   
    setIsIndustriesDropdownOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);

  
    setIsServicesDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/95 backdrop-blur-md shadow-lg z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center h-20">

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img src={Logo} alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="flex items-center justify-center flex-1">
            <div className="hidden sm:flex items-center space-x-10">

              {/* HOME */}
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-gray-700 hover:text-amber-500 px-2 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Home
              </Link>

              {/* ABOUT */}
              <a href="#about-skylartech" className="text-gray-700 hover:text-amber-500 px-2 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105">
                About Skylartech
              </a>

              {/* CERTIFICATIONS */}
              <a href="#certification-programs" className="text-gray-700 hover:text-amber-500 px-2 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105">
                Certification Programs
              </a>

              {/* EXPERTISE */}
              <a href="#our-expertise" className="text-gray-700 hover:text-amber-500 px-2 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105">
                Our Expertise
              </a>

              {/* CLIENTS */}
              <a href="#our-clients" className="text-gray-700 hover:text-amber-500 px-2 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105">
                Our Clients
              </a>

              {/* SERVICES */}
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
              >
                <button className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none">
                  <Link to="/services" className="flex items-center">
                    Services
                    <i className="fa-solid fa-angle-down ml-2 mt-1"></i>
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
                    <div className="py-1 bg-amber-50 rounded-xl drop-shadow-2xl">
                      <Link to="/services/ui-ux-design" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        UI & UX Design
                      </Link>

                      <Link to="/services/discovery-workshop" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Discovery Workshop
                      </Link>

                      <Link to="/services/iot-development" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        IOT Development
                      </Link>

                      <Link to="/services/web-and-app-development" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Web and App Development
                      </Link>

                      <Link to="/services/custom-software-development" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Custom Software Development
                      </Link>

                      <Link to="/services/support-and-maintenance" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Support and Maintenance
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div
                className="relative inline-block text-left"
                onMouseEnter={toggleIndustriesDropdown}
                onMouseLeave={toggleIndustriesDropdown}
              >
                <button className="flex items-center text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none">
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
                      <Link to="/industries/health-care" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Health Care
                      </Link>

                      <Link to="/industries/fintech" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Fintech
                      </Link>

                      <Link to="/industries/insurance" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Insurance
                      </Link>

                      <Link to="/industries/telecom" className="block px-4 py-2 text-md text-gray-700 hover:text-amber-500">
                        Telecom
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CONTACT */}
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="flex sm:hidden ml-auto">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {isMobileMenuOpen && (
              <motion.div
                className="absolute top-16 right-4 bg-amber-50 rounded-xl shadow-xl mt-2 z-20 p-4 w-72"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/"
                  onClick={() => {
                    toggleMobileMenu();
                    scrollToTop();
                  }}
                  className="block py-2 text-gray-700 hover:text-amber-500"
                >
                  Home
                </Link>

                <a href="#about-skylartech" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  About Skylartech
                </a>

                <a href="#certification-programs" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  Certification Programs
                </a>

                <a href="#our-expertise" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  Our Expertise
                </a>

                <a href="#our-clients" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  Our Clients
                </a>

                <Link to="/services" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  Services
                </Link>

                <Link to="/contact-us" onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-amber-500">
                  Contact Us
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;