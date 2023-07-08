import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-800">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="text-gray-300">
              <li className="mb-4">
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li className="mb-4">
                <Link to="/technologies" className="hover:text-white">Technologies</Link>
              </li>
              <li className="mb-4">
                <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Feature Services</h3>
            <ul className="text-gray-300">
              <li className="mb-4">
                <Link to="/" className="hover:text-white">Custom Software Development</Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:text-white">Discovery Workshop</Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:text-white">Web and App Development</Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:text-white">UI/UX Design</Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <ul className="text-gray-300">
              <li className="mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span className="hover:text-white">Bustani Villas, Palm 2nd Lane #75 - Nairobi</span>
              </li>
              <li className="mb-4">
                <i className="fas fa-phone-alt mr-2"></i>
                <span className="hover:text-white">Phone: +254 718-257-293</span>
              </li>
              <li className="mb-4">
                <i className="far fa-envelope mr-2"></i>
                <span className="hover:text-white">Email: info@skylartech.co.ke</span>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3437157405365!2d36.9105043384525!3d-1.3642101996557172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d07e7b8c09b%3A0x8fb76d56e37a9a8a!2sGateway%20Mall!5e0!3m2!1sen!2ske!4v1688819712737!5m2!1sen!2ske"
            style={{ width: "100%", height: "20rem", border: "transparent" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://twitter.com/skylartechke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 mr-4"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/skylartechlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 mr-4"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com/SkylartechKE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>

        {/* Horizontal rule */}
        <hr className="my-8 border-purple-200" />

        {/* Copyright */}
        <p className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Skylartech Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
