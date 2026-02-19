import React from "react";
import { Helmet } from "react-helmet";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

// import SoftwareDevelopment from "../../assets/Homepage images/computer 1.png";
// import DiscoveryWorkshop from "../../assets/Homepage images/search 1.png";
// import UserExperience from "../../assets/Homepage images/testing 1.png";
// import Iot from "../../assets/Homepage images/Group 4.png";
// import Support from "../../assets/Homepage images/support (1) 1.png";
// import Web from "../../assets/Homepage images/Group 2.png";
import Rocket from "../../assets/softwareprocess/rocket 1.png";
import Discover from "../../assets/softwareprocess/discovery 1.png";
import Design from "../../assets/softwareprocess/graphic-design 1.png";
import Build from "../../assets/softwareprocess/build 1.png";
import PMPTeacher from "../../assets/Homepage images/PMPTEACHER.png";

import ClientReview from "./ClientReview";
// import HomeSlider from "./HomeSlider";
import Menu from "./Menu";
// import Client from "./ClientSlider";
import CountUp from "./CountUp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Skylartech Limited | Your Global Business Solutions Partner
        </title>
        <meta
          name="description"
          content="Skylartech Limited delivers business solutions that drive growth and performance. We specialize in software engineering outsourcing, professional training, leadership development, and consulting."
        />
        <meta
          name="keywords"
          content="Skylartech, Software Engineering, Professional Training, Leadership, Project Management, PMI Partner, Kenya"
        />
        <link rel="canonical" href="https://skylartech.co.ke" />
      </Helmet>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-4/5 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 py-6">
            Leading the Future of{" "}
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
                cursor
                cursorStyle="~"
              />
            </span>
            <span className="text-gray-800">
              <Cursor cursorStyle="" />
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Skylartech Limited delivers business solutions that drive growth and
            performance. We specialize in software engineering outsourcing,
            professional training, leadership development, and consulting,
            helping organizations across banking, telecom, IT, procurement, and
            public sectors scale operations, streamline processes, and achieve
            measurable results.
          </p>

          {/* Links as plain text with a | separator */}
          <div className="flex justify-center gap-2 mt-8 text-lg text-purple-600 font-medium">
            <Link to="/contact-us" className="hover:text-violet-400">
              Hire Developers
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/professional-training" className="hover:text-violet-400">
              Explore Training
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-amber-50 text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">About Us</h2>

          {/* Why Choose Skylartech */}
          <h3 className="text-2xl font-semibold mb-6">Why Choose Skylartech</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Access highly skilled developers and consultants across multiple continents",
              "Engineers capable of integrating artificial intelligence into projects",
              "Over a decade of experience across multiple industries",
              "Tailored project delivery models to suit client needs",
              "Accredited training with measurable impact",
              "We focus on delivering efficiency, growth, and measurable business outcomes",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <p className="text-gray-700 text-left">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-amber-500 mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 text-left">
                To empower individuals and organizations worldwide by providing
                AI-enabled software engineering, professional training, and
                business solutions that drive efficiency, leadership growth, and
                measurable impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-amber-500 mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 text-left">
                To be a leading global partner in business solutions and
                professional development, recognized for exceptional talent,
                world-class training, and transformative outcomes that enable
                organizations and professionals to thrive in a dynamic,
                interconnected world.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Understand",
                  desc: "We analyze client needs, goals, and operational challenges",
                },
                {
                  title: "Design",
                  desc: "Craft tailored solutions integrating software, training, and consulting",
                },
                {
                  title: "Implement",
                  desc: "Deploy skilled teams and programs to achieve tangible results",
                },
                {
                  title: "Sustain",
                  desc: "Embed skills, processes, and culture for long-term impact",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <h4 className="text-amber-500 font-semibold text-xl mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 text-left">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">
              Impact & Achievements
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Over 10 years of successful projects globally",
                "Certified software engineers and trainers delivering high-quality, measurable results",
                "Trained hundreds of professionals in project management, procurement, and leadership",
                "Partnered with banks, telecoms, IT companies, NGOs, and public organizations for operational excellence",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <p className="text-gray-700 text-left">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Expertise</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Skylartech delivers a comprehensive suite of solutions integrating
            people, processes, and technology. Our services are practical,
            scalable, and impactful, tailored for modern organizations.
          </p>

          <div className="lg:flex lg:justify-between gap-10 flex-col lg:flex-row">
            {/* Software Engineering */}
            <div className="bg-white p-8 shadow rounded-xl text-left flex-1">
              <h3 className="text-amber-500 font-semibold text-2xl mb-4">
                Software Engineering & Development Outsourcing
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Provision of highly skilled software engineers and dedicated
                  teams
                </li>
                <li>
                  Capabilities: web & mobile apps, AI/ML, cloud & enterprise
                  solutions, DevOps, UX/UI, IoT, blockchain, QA/testing
                </li>
                <li>
                  Flexible engagement models: project-based, hourly, dedicated,
                  custom solutions
                </li>
                <li>Global delivery for projects of any scale</li>
              </ul>
            </div>

            {/* Professional Training */}
            <div className="bg-white p-8 shadow rounded-xl text-left flex-1">
              <h3 className="text-amber-500 font-semibold text-2xl mb-4">
                Professional Training & Certification
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Project Management (PMI® certifications)</li>
                <li>Procurement & Supply Chain Short Courses</li>
                <li>Leadership & Culture Transformation Programs</li>
                <li>
                  Exam coaching, mentoring, and PMI resources for ROI and
                  efficiency
                </li>
              </ul>
            </div>

            {/* Leadership & Consulting */}
            <div className="bg-white p-8 shadow rounded-xl text-left flex-1">
              <h3 className="text-amber-500 font-semibold text-2xl mb-4">
                Leadership Development & Consulting
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  High-performing team building and strategic leadership
                  programs
                </li>
                <li>
                  Culture transformation and sustainable organizational change
                </li>
                <li>
                  Operational efficiency optimization, process improvement, and
                  change management
                </li>
                <li>AI integration and business strategy alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Start Your Project with Skylartech
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Hire software engineers, start a project, or book a consultation
          today.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact-us">
            <motion.button
              className="border-2 border-purple-500 bg-white hover:bg-violet-400 text-black px-6 py-2 rounded-xl text-lg"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              Hire Software Engineers
            </motion.button>
          </Link>
          <Link to="/contact-us">
            <motion.button
              className="border-2 border-purple-500 bg-white hover:bg-violet-400 text-black px-6 py-2 rounded-xl text-lg"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              Book a Consultation
            </motion.button>
          </Link>
        </div>
      </section> */}

      {/* Clients, Slider, Menu, PMPTeacher Image */}
      {/* <Client /> */}
      {/* <HomeSlider /> */}
      <section className="min-h-screen bg-amber-50 pb-5">
        <Menu />
        <div className="flex justify-center">
          <img src={PMPTeacher} alt="PMP Teacher" className="w-6/12 h-auto" />
        </div>
      </section>
      {/* Software Development Process */}
      <section className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            We Simplify Software{" "}
            <span className="text-amber-500">Development Process</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                title: "Discover",
                desc: "We shape brands through exploration, applying in-depth research, and client consultation to produce the best outcomes.",
                img: Discover,
                color: "#6A1B9A",
              },
              {
                title: "Design",
                desc: "All our designs ensure intuitive interfaces for easy navigation and unique user experiences.",
                img: Design,
                color: "#FFC107",
              },
              {
                title: "Build",
                desc: "We create flexible and scalable solutions using modern technologies.",
                img: Build,
                color: "#4CAF50",
              },
              {
                title: "Deliver",
                desc: "We achieve excellence in project deliveries with zero compromises on quality.",
                img: Rocket,
                color: "#FF5722",
              },
            ].map((step, idx) => (
              <div key={idx} className="w-64 text-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4"
                  style={{ width: "3rem" }}
                />
                <h4 className="text-amber-500 font-medium text-xl mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-left">{step.desc}</p>
              </div>
            ))}
          </div>

          <CountUp />
          <ClientReview />
        </div>
      </section>
    </>
  );
};

export default Home;
