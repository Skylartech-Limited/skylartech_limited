import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Shield,
  FileCheck,
  Settings,
  Link2,
} from "lucide-react";

import Talk from "../../assets/Industries/talk.png";
import Digi from "../../assets/Industries/currency.png";
import Grow from "../../assets/Industries/growth.png";
import Api from "../../assets/Industries/api (1).png";
import Background from "../../assets/Industries/insurethsi.jpg";

const Insurance = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="flex items-center gap-2 text-amber-500 font-semibold">
              <Shield className="w-5 h-5" />
              Insurance
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Insurance solutions that modernize your business
            </h1>

            <p className="text-gray-600 mt-4">
              Transform your insurance operations with scalable, secure and
              digital-first software solutions.
            </p>

            <Link to="/contact-us">
              <motion.button
                className="mt-6 bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let’s Talk →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Insurance <span className="text-amber-500">Software Development</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We design modern insurance platforms that improve efficiency, reduce
          manual processes and enhance customer experience.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: FileCheck,
            img: Talk,
            title: "Insurtech Consulting",
            text: "Improve workflows with modern digital transformation strategies.",
          },
          {
            icon: Settings,
            img: Digi,
            title: "Custom Insurance Software",
            text: "Tailored platforms for claims, policies and underwriting.",
          },
          {
            icon: Shield,
            img: Grow,
            title: "System Customization",
            text: "Upgrade and enhance your existing insurance systems.",
          },
          {
            icon: Link2,
            img: Api,
            title: "API Integration",
            text: "Connect systems for seamless insurance data exchange.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition text-center"
          >
            <img src={item.img} className="w-10 mx-auto mb-4" alt="" />
            <item.icon className="mx-auto text-amber-500 mb-2" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* WHY SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our Insurance Solutions?
          </h2>
          <p className="text-gray-600">
            We help insurers modernize legacy systems, improve automation, and
            build scalable digital platforms for future growth.
          </p>
        </div>
      </section>
    </>
  );
};

export default Insurance;