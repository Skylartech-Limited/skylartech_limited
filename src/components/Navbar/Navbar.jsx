import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
    
    {/* CHANGED justify-between TO justify-center */}
    <div className="flex items-center justify-center h-20 w-full">
      
      {/* DESKTOP NAV */}
      <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
        
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
          About
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
            Offerings
            <i className="fa-solid fa-angle-down ml-2 text-xs"></i>
          </button>

          <AnimatePresence>
            {isServicesDropdownOpen && (
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-amber-50 py-3">
                  {[
                    {
                      name: "PMP® Certification Training",
                      path: "/offerings/pmp-training",
                    },
                    {
                      name: "Project Management Consulting",
                      path: "/offerings/consulting",
                    },
                    {
                      name: "Corporate Project Management Training",
                      path: "/offerings/corporate-training",
                    },
                    {
                      name: "Web and App Development",
                      path: "/offerings/web-and-app-development",
                    },
                    {
                      name: "Agile and Scrum Training",
                      path: "/offerings/agile-and-scrum",
                    },
                    {
                      name: "CAPM® Certification Training",
                      path: "/offerings/capm-training",
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
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden"
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
      <div className="lg:hidden absolute right-4 flex items-center">
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
</nav>
  );
};

export default Navbar;
