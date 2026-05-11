import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HeartPulse,
  FileText,
  ShieldCheck,
  Activity,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

import Tele from "../../assets/Industries/layout.png";
import Ehealth from "../../assets/Industries/medical-record.png";
import Insure from "../../assets/Industries/health-insurance.png";
import Exercise from "../../assets/Industries/exercise.png";
import Serv from "../../assets/Services image/custom-software-1-1.png";
import Background from "../../assets/Industries/healthbann.jpg";
import Carehealth from "../../assets/Industries/healthcr1.jpg";

const Health = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 w-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl w-full"
          >
            <h2 className="text-amber-500 font-semibold flex items-center gap-2">
              <HeartPulse className="w-5 h-5" />
              Healthcare
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Healthcare Software Development Services
            </h1>

            <p className="text-gray-600 mt-4">
              Smart healthcare solutions that improve patient care, efficiency,
              and digital transformation.
            </p>

            <Link to="/contact-us">
              <button className="mt-6 bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
                Let’s Talk →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Healthcare Software Solutions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {[
            {
              img: Tele,
              title: "Telehealth",
              icon: Stethoscope,
              text: "Remote care solutions.",
            },
            {
              img: Ehealth,
              title: "EHR Systems",
              icon: FileText,
              text: "Digital patient records.",
            },
            {
              img: Insure,
              title: "Insurance",
              icon: ShieldCheck,
              text: "Automated claims processing.",
            },
            {
              img: Exercise,
              title: "Tracking Apps",
              icon: Activity,
              text: "Health monitoring tools.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm text-center hover:shadow-xl transition"
            >
              <img src={item.img} className="w-12 mx-auto mb-4" alt="" />

              <div className="flex justify-center items-center gap-2 mb-2">
                <item.icon className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>

              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODERN HEALTHCARE SYSTEMS */}
      <section className="relative py-24 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Carehealth})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center text-white text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modern Healthcare Systems
            </h2>

            <p className="text-gray-200">
              Intelligent platforms for patient management, scheduling, and
              AI-assisted workflows.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-center md:justify-start items-center gap-2">
                <ClipboardList className="text-amber-400 w-5 h-5" />
                Workflow automation
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2">
                <Activity className="text-amber-400 w-5 h-5" />
                Real-time monitoring
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2">
                <ShieldCheck className="text-amber-400 w-5 h-5" />
                Secure medical systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Automate Your Clinic Today</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <img src={Serv} className="mx-auto w-56 mb-6" alt="" />

          <p className="text-gray-600">
            ClinicConnect streamlines patient management, records, and clinic
            operations.
          </p>

          <Link to="/contact-us">
            <button className="mt-6 bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Get Started →
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Health;
