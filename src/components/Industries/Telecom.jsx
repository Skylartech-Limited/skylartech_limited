import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  PhoneCall,
  Network,
  Radio,
  Activity,
} from "lucide-react";

import Code from "../../assets/Services image/coding.png";
import Tel from "../../assets/Industries/communication.png";
import Soft from "../../assets/Industries/coding (1).png";
import Perform from "../../assets/Industries/statistical.png";
import Background from "../../assets/Industries/finn.jpg";

const Telecom = () => {
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
              <Radio className="w-5 h-5" />
              Telecom
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Telecom Software Development Services
            </h1>

            <p className="text-gray-600 mt-4">
              We build scalable telecom systems that improve communication,
              monitoring, and network performance.
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
          Telecom <span className="text-amber-500">Software Solutions</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We help telecom companies modernize infrastructure with smart,
          scalable and efficient software systems.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: PhoneCall,
            img: Soft,
            title: "Call Accounting Software",
            text: "Track and manage all telecom call activities efficiently.",
          },
          {
            icon: Network,
            img: Code,
            title: "Telecom Software Systems",
            text: "OSS, BSS, SDN and NFV-based solutions for telecom networks.",
          },
          {
            icon: Radio,
            img: Tel,
            title: "Network Applications",
            text: "Real-time communication and network management systems.",
          },
          {
            icon: Activity,
            img: Perform,
            title: "Performance Monitoring",
            text: "Monitor network performance, faults and diagnostics.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
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
            Reliable Telecom Infrastructure Solutions
          </h2>
          <p className="text-gray-600">
            We build systems that ensure stable communication, optimized
            performance, and scalable telecom operations.
          </p>
        </div>
      </section>
    </>
  );
};

export default Telecom;