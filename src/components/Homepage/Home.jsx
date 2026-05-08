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
  const images = [Cert1, Cert2, Cert3, Cert4];

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
        <title>Skylartech Limited | PMI Partner</title>
        <meta
          name="description"
          content="Skylartech Limited, a trusted PMI Partner, offering comprehensive tech solutions in Kenya. Visit us at skylartech.co.ke"
        />
        <meta
          name="keywords"
          content="Skylartech, PMI Partner, Tech Solutions, Kenya, Software Development"
        />

        <link rel="canonical" href="https://skylartech.co.ke" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-4/5">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 py-6 text-center">
            Leading the Future of
            <span
              className="font-medium"
              style={{
                background:
                  "linear-gradient(to right, violet, indigo, blue, green, #f1c40f, orange, red)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <Typewriter
                words={[" Project Management"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="" />
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src={PMI}
              alt="PMI"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
          <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">
            <ul className="space-y-4">
              <li>
                Skylartech Limited is a Premier Authorized Training Partner
                (ATP) of the Project Management Institute (PMI), delivering
                world-class, PMI-aligned training that empowers professionals to
                achieve globally recognized certifications and excel in project
                leadership.
              </li>
              <li>
                With over a decade of experience, we support organizations
                across banking, telecommunications, IT, procurement, and the
                public sector through a unique blend of professional training,
                software engineering outsourcing, leadership development, and
                consulting. Our ATP status reinforces our commitment to quality,
                credibility, and industry-leading standards in project
                management education.
              </li>
            </ul>

            {/* Auto-sliding enlarged slideshow */}
            <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto mt-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`Certificate ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </AnimatePresence>
            </div>
          </section>

          <section className="text-gray-700 text-base lg:text-lg leading-8 py-4">

            <ul className=" space-y-4">
              <li>
                We enable professionals to get trained, get certified, and lead
                with confidence, while helping organizations operate smarter,
                grow faster, and compete effectively in a dynamic global
                environment.
              </li>
              <li>
                We provide expert-led PMP® and project management training using
                PMI-authorized content, alongside highly skilled software
                engineers and dedicated development teams to support global
                projects. By integrating capability development with technology
                solutions, we help organizations scale efficiently, optimize
                performance, and deliver measurable results.
              </li>
            </ul>
            <img
              src={GroupPhoto}
              alt="What We Do"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto mb-6 mt-8 rounded-lg shadow"
            />
          </section>

          <div className="flex justify-center mt-8 mb-8">
            <Link to="/contact-us">
              <motion.button
                className="border-2 border-purple-500 bg-white hover:bg-violet-400 text-black px-6 py-2 rounded-xl text-lg"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                Let's Talk
                <span className="ml-2 text-xl transform scale-125">
                  &#8594;
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* services we Offer  */}
<div className="py-16 bg-gray-50">
  <div>
    <h1 className="text-4xl font-bold text-black text-center">
      Project Management Training Solutions
    </h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 mt-14">
    {/* Core Certifications Card */}
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
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

    {/* Specialized Certifications Card */}
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
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

    {/* Sustainability Certifications Card */}
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
      <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
        <span className="text-2xl font-bold text-violet-600">03</span>
      </div>

      <h3 className="text-2xl font-bold text-amber-500 mb-6">
        Sustainability & Green Project Management Certifications
      </h3>

      <ul className="space-y-4 text-gray-700 leading-7">
        <li>• Green Project Manager–Basic (GPM-b)™</li>
      </ul>
    </div>
  </div>
</div>

     {/* our expertise */}

<div className="bg-amber-50 py-20">
  <div className="flex flex-col justify-center items-center px-6">
    <h1 className="text-4xl text-black text-center font-bold">
      Our Expertise
    </h1>

    <h3 className="text-lg text-gray-700 text-center max-w-3xl font-medium py-6 leading-8">
      We specialize in PMI-aligned project management training, global
      certification preparation, leadership development, and technology-driven
      solutions that build high-performing professionals and organizations.
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
        We deliver PMI-aligned project management training and globally
        recognized certification preparation across project, program,
        portfolio, agile, risk, PMO, scheduling, business analysis, AI, and
        sustainability-focused disciplines. Our instructor-led learning
        experiences are designed to strengthen leadership capability,
        accelerate professional growth, and improve organizational
        performance.
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
        We support organizations through strategic consulting, PMO
        development, governance enhancement, leadership development, and
        operational transformation initiatives that improve execution,
        efficiency, and business impact across diverse industries.
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
        We provide software engineering outsourcing, dedicated development
        teams, and technology-driven solutions that enable organizations to
        scale effectively, optimize delivery performance, and support digital
        transformation initiatives globally.
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
