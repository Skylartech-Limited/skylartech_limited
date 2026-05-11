import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
} from "lucide-react";

import City from "../../assets/Contact Images/City.jpeg";

const Contact = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* SEO */}
      <Helmet>
        <title>Contact Skylartech | PMP Training & Certification</title>
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${City})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Get in{" "}
              <span className="text-amber-400">
                <Typewriter words={["Touch"]} loop={1} />
              </span>
              <Cursor cursorStyle="|" />
            </h2>

            <p className="mt-5 text-gray-200 max-w-md mx-auto md:mx-0">
              We build modern software solutions, apps, and digital systems.
              Let’s turn your idea into a product.
            </p>

            <div className="mt-6 flex gap-3 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Phone className="w-4 h-4 text-amber-400" />
                Fast Response
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Mail className="w-4 h-4 text-amber-400" />
                24/7 Support
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* INFO SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Build Something Great
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us about your project and we’ll get back to you quickly with a solution.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <div className="flex items-center gap-3">
                <MapPin className="text-amber-500 w-5 h-5" />
                Nairobi, Kenya
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-amber-500 w-5 h-5" />
                +254 718 257 293
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-amber-500 w-5 h-5" />
                info@skylartech.co.ke
              </div>

            </div>
          </div>

          {/* FORM CARD */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-2xl p-8 space-y-5"
          >

            <h3 className="text-xl font-semibold text-center mb-4">
              Contact Form
            </h3>

            {/* NAME */}
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Your Email"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Phone Number"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                rows="5"
                className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Your Message"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-600 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>

          </motion.form>

        </div>
      </section>

      {/* FOOTER LOCATION STRIP */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <MapPin className="mx-auto text-amber-400 w-8 h-8" />

        <h2 className="text-2xl font-bold mt-3">Nairobi, Kenya</h2>
        <p className="text-gray-300 mt-2">
          The Waterfront, Karen
        </p>

        <p className="mt-4 text-gray-400">
          info@skylartech.co.ke | +254 718 257 293
        </p>
      </section>

    </div>
  );
};

export default Contact;