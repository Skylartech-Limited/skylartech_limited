import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-50 shadow-lg">
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
            <div className="hidden sm:flex">
              <Link
                to="/"
                className="text-amber-500 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Services
              </Link>
              <Link
                to="/technologies"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Technologies
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex items-center ml-4">
              <p className="text-md sm:text-md hidden sm:inline">
                <i
                  className="fa-solid fa-envelope fa-xl"
                  style={{
                    color: "#FFA000",
                    paddingRight: "3px",
                    paddingLeft: "4px",
                  }}
                ></i>
                <span className="hidden sm:inline">info@skylartech.co.ke</span>
              </p>
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
                <div className="absolute top-16 right-0 bg-white rounded-md shadow-md mt-2 mr-2">
                  <Link
                    to="/"
                    className="block text-amber-500 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Services
                  </Link>
                  <Link
                    to="/technologies"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Technologies
                  </Link>
                  <Link
                    to="/portfolio"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block text-gray-700 hover:text-amber-500 px-4 py-2 font-medium transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                    onClick={toggleMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
