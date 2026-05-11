import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Wallet,
  BrainCircuit,
  LineChart,
  Smartphone,
} from "lucide-react";

import Rel from "../../assets/Industries/release.png";
import Money from "../../assets/Industries/mobile-payment.png";
import App from "../../assets/Industries/mobile-app.png";
import Intelli from "../../assets/Industries/machine-learning.png";
import Background from "../../assets/Industries/tele.jpg";

const Fintech = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Custom Fintech Software",
      img: Rel,
      text: "Tailored fintech platforms with secure architecture.",
    },
    {
      icon: Wallet,
      title: "Digital Payments",
      img: Money,
      text: "Wallets, banking apps, and payment gateways.",
    },
    {
      icon: BrainCircuit,
      title: "AI CRM Systems",
      img: Intelli,
      text: "Smart financial intelligence and automation.",
    },
    {
      icon: Smartphone,
      title: "Fintech Apps",
      img: App,
      text: "Mobile-first financial applications.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg">
            <h2 className="text-amber-500 font-semibold flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              Fintech
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Financial Software Development Services
            </h1>

            <p className="text-gray-600 mt-4">
              Modern fintech solutions built for speed, security, and scale.
            </p>

            <Link to="/contact-us">
              <button className="mt-6 bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
                Let’s Talk →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Reliable{" "}
          <span className="text-amber-500">Fintech Development</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Secure, scalable, and modern financial systems for digital transformation.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >
              {/* IMAGE (prevents blur) */}
              <div className="flex justify-center mb-4">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex justify-center mb-2 text-amber-500">
                <s.icon className="w-6 h-6" />
              </div>

              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Build Your Fintech Future Today
          </h2>

          <p className="text-gray-600 mt-3">
            Secure, scalable financial platforms tailored for growth.
          </p>

          <Link to="/contact-us">
            <button className="mt-6 bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Get Started →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Fintech;