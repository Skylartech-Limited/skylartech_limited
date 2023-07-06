import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="logo.png"
                alt="Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-black text-xl font-bold">Skylartech Limited</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>   
            <Link
              to="/technologies"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Technologies
            </Link>
            <Link
              to="/portfolio"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Portfolio
            </Link>
        
            <Link
              to="/contact-us"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
            <p><i class="fa-solid fa-envelope fa-xl" style={{"color": "#005eff",paddingRight: '3px',paddingLeft: '4px'}}></i>info@skylartech.co.ke</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
