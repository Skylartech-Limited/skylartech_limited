import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import Cert1 from "../../assets/Homepage images/Cert1.jpg";
import Cert2 from "../../assets/Homepage images/Cert2.jpg";
import Cert3 from "../../assets/Homepage images/Cert3.jpg";
import Cert4 from "../../assets/Homepage images/Cert4.jpg";
import GroupPhoto from "../../assets/Homepage images/GroupPhoto.png";
import PMI from "../../assets/Homepage images/PMI.jpeg";

import ClientReview from "./ClientReview";
import Client from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
  const images = [Cert1, Cert2, Cert3, Cert4, GroupPhoto];

  const [index, setIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Helmet>
        <title>Skylartech Limited | PMI Premier ATP</title>

        <meta
          name="description"
          content="Skylartech Limited is a PMI Premier Authorized Training Partner delivering project management certification training, leadership development, consulting, and technology solutions globally."
        />

        <meta
          name="keywords"
          content="Skylartech, PMI Premier ATP, PMP Training, Project Management Certifications, PMI Training, Agile Certifications, PMO Consulting, Leadership Training, Software Engineering"
        />

        <link rel="canonical" href="https://skylartech.co.ke" />
      </Helmet>

      {/* HERO SECTION */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-4/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 py-6 text-center leading-tight">
            Empowering Global
            <span
              className="font-semibold"
              style={{
                background:
                  "linear-gradient(to right, violet, indigo, blue, green, #f1c40f, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <Typewriter
                words={[" Project Leaders"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-900">
              <Cursor cursorStyle="" />
            </span>
          </h2>

          <p className="text-center text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-8">
            PMI® Premier ATP delivering world-class project management,
            certification, leadership, and organizational transformation
            training.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8 mt-10 px-4"
          >
            <img
              src={PMI}
              alt="PMI Premier ATP"
              className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 h-auto object-contain rounded-xl"
            />
          </motion.div>

          <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
            <ul className="space-y-6">
              <li>
                Skylartech Limited is a Premier Authorized Training Partner
                (ATP) of the Project Management Institute (PMI), delivering
                PMI-authorized training that equips professionals with
                internationally respected certifications and practical project
                execution capability.
              </li>

              <li>
                With over a decade of experience, we support organizations
                across banking, telecommunications, IT, procurement, and the
                public sector through professional training, consulting,
                leadership development, and software engineering solutions that
                strengthen organizational capability and delivery performance.
              </li>
            </ul>

            {/* Slideshow */}
            <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto mt-10 overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`PMI Authorized Training Excellence ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </AnimatePresence>
            </div>
          </section>

          <section className="text-gray-700 text-base lg:text-lg leading-8 py-8">
            <ul className="space-y-6">
              <li>
                We equip professionals with the skills, certification, and
                confidence to drive successful project outcomes while helping
                organizations grow, innovate, and compete effectively in a
                dynamic global environment.
              </li>

              <li>
                We provide expert-led PMP® and project management certification
                training alongside highly skilled software engineering teams and
                technology solutions that help organizations scale efficiently,
                optimize performance, and deliver measurable business results.
              </li>
            </ul>
          </section>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-8 mb-8">
            <Link to="/contact-us">
              <motion.button
                className="border-2 border-purple-500 bg-white hover:bg-violet-500 hover:text-white transition-all duration-300 text-black px-8 py-3 rounded-2xl text-lg font-medium shadow-lg"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                Let's Talk
                <span className="ml-2 text-xl">&#8594;</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {/* PROFESSIONAL CERTIFICATION PROGRAMS */}
      <div className="py-20 bg-gray-50">
        <div className="px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-black text-center">
            Professional Certification Programs
          </h1>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mt-6 text-lg leading-8">
            PMI® certification pathways designed to build globally competitive
            project leaders, agile professionals, and high-performing
            organizations.
          </p>
        </div>

        {/* WIDER GRID (FIXED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-10 xl:px-12 mt-16 max-w-[1700px] mx-auto">
          {/* Core Certifications */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-blue-600">01</span>
            </div>

            <h3 className="text-2xl font-bold text-amber-500 mb-6">
              Core Certifications
            </h3>

            <ul className="space-y-4 text-gray-700 leading-7">
              <li>• Certified Associate in Project Management (CAPM)®</li>
              <li>• Project Management Professional (PMP)®</li>
              <li>• Program Management Professional (PgMP)®</li>
              <li>• Portfolio Management Professional (PfMP)®</li>
            </ul>
          </div>

          {/* Specialized Certifications */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-green-600">02</span>
            </div>

            <h3 className="text-2xl font-bold text-amber-500 mb-6">
              Specialized Certifications
            </h3>

            <ul className="space-y-4 text-gray-700 leading-7">
              <li>• PMI Construction Professional (PMI-CP)™</li>
              <li>• PMI Agile Certified Practitioner (PMI-ACP)®</li>
              <li>• PMI Risk Management Professional (PMI-RMP)®</li>
              <li>• PMI PMO Certified Professional (PMI-PMOCP)™</li>
              <li>• PMI Professional in Business Analysis (PMI-PBA)®</li>
              <li>• PMI Scheduling Professional (PMI-SP)®</li>
              <li>• PMI Certified Professional in Managing AI (PMI-CPMAI)™</li>
            </ul>
          </div>

          {/* Sustainability Certifications */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100 hover:-translate-y-2 w-full">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-violet-600">03</span>
            </div>

            <h3 className="text-2xl font-bold text-amber-500 mb-6">
              Sustainability & Green Project Management
            </h3>

            <ul className="space-y-4 text-gray-700 leading-7">
              <li>• Green Project Manager–Basic (GPM-b)™</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OUR EXPERTISE */}
      <div className="bg-amber-50 py-20">
        <div className="flex flex-col justify-center items-center px-6">
          <h1 className="text-4xl lg:text-5xl text-black text-center font-bold">
            Our Expertise
          </h1>

          <h3 className="text-lg text-gray-700 text-center max-w-4xl font-medium py-6 leading-8">
            We support organizations across project delivery, agile
            transformation, risk management, PMO capability, scheduling,
            business analysis, and AI-enabled project environments through
            training, consulting, and technology solutions.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-red-600">01</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Professional Training & Certification
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We deliver project management and certification preparation
              programs across project, program, portfolio, agile, risk, PMO,
              scheduling, business analysis, AI, and sustainability-focused
              disciplines designed to strengthen execution capability and
              leadership performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-slate-600">02</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Consulting & Organizational Transformation
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We help organizations improve governance, PMO capability,
              operational efficiency, leadership effectiveness, and strategic
              execution through tailored consulting and transformation
              initiatives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-amber-100 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-amber-600">03</span>
            </div>

            <h1 className="font-bold text-2xl text-gray-800 pb-5 leading-snug">
              Technology & Software Engineering Solutions
            </h1>

            <p className="text-gray-600 text-md leading-8">
              We provide dedicated software engineering teams and scalable
              technology solutions that support digital transformation,
              strengthen delivery capability, and improve business performance
              globally.
            </p>
          </div>
        </div>
      </div>

      <Client />

      <CountUp />

      <ClientReview />
    </>
  );
};

export default Home;
