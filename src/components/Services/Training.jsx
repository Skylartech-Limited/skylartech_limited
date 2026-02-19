import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Training = () => {
  const coreCerts = [
    "Certified Associate in Project Management (CAPM®)",
    "Project Management Professional (PMP®)",
    "Program Management Professional (PgMP®)",
    "Portfolio Management Professional (PfMP®)",
  ];

  const specializedCerts = [
    "PMI Construction Professional (PMI-CP™)",
    "PMI Agile Certified Practitioner (PMI-ACP®)",
    "PMI Risk Management Professional (PMI-RMP®)",
    "PMI PMO Certified Professional (PMI-PMOCP™)",
    "PMI Professional in Business Analysis (PMI-PBA®)",
    "PMI Scheduling Professional (PMI-SP®)",
    "PMI Certified Professional in Managing AI (PMI-CPMAI™)",
    "Green Project Manager – Basic (GPM-b™)",
  ];

  const procurementItems = [
    {
      title: "Supply Chain, Risk & Sustainability",
      points: [
        "Risk & Resilience in Supply Chain",
        "Sustainable Procurement",
        "Delivering Social Values",
        "Strategic Sourcing",
      ],
    },
    {
      title: "Procurement & Commercial Fundamentals",
      points: [
        "Procurement Fundamentals",
        "Category & Commodity Management",
        "Cost Analysis & Financial Management",
      ],
    },
    {
      title: "Negotiation & Supplier Management",
      points: [
        "Effective Negotiation",
        "Masterclass in Negotiation",
        "Supplier Relationship Management",
      ],
    },
    {
      title: "Contract & Commercial Management",
      points: ["Contract Management", "Developing Contractual Agreements"],
    },
    {
      title: "Change, Projects & Leadership",
      points: ["Change and Project Management", "Behavioural Leadership", "Effective Communication"],
    },
    {
      title: "Digital & AI-Driven Procurement",
      points: ["Introduction to AI in Procurement", "AI Strategy for Procurement", "Technology & IT Procurement Foundations"],
    },
  ];

  const leadershipItems = [
    {
      title: "Culture Transformation",
      points: [
        "Understand and shape organizational culture",
        "Align team behaviors with company values",
        "Build engagement, motivation, and high performance",
      ],
    },
    {
      title: "Embedding & Sustaining Change",
      points: [
        "Reinforce new behaviors in operations and decision-making",
        "Culture Sustainability & Embedding Change",
        "Measuring & Evaluating Culture Change",
        "Culture Sustainability Refresher Series",
        "Culture Measurement & Impact Review",
      ],
    },
    {
      title: "Follow-On Leadership Programs",
      points: [
        "Strategic Leadership in Action",
        "Innovation & Change Leadership",
        "Cross-Cultural & Global Leadership",
        "Executive Coaching & Mentoring",
        "Digital & Data-Driven Leadership",
        "Sustainable Impact Leadership",
      ],
    },
  ];

  const conflictItems = [
    "Understanding conflict dynamics and sources",
    "Effective communication and negotiation",
    "Mediation and resolution techniques",
    "Team and stakeholder alignment",
    "Cultural and context awareness",
    "Embedding sustainable conflict management practices",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row text-left p-10 bg-amber-50">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-medium text-gray-800 py-2 pt-10">
            PROFESSIONAL TRAINING & <span className="text-amber-500 font-medium">CERTIFICATION</span>
          </h2>
          <h1 className="max-w-md text-3xl md:text-4xl lg:text-5xl xl:text-3xl py-2 font-semibold text-gray-800">
            Our professional development programs empower individuals and teams to perform at their best, adapt to change, and achieve measurable impact. We are NITA Accredited with a strong client portfolio across Africa.
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-lg max-w-md py-5 text-gray-600">
            Skylartech offers complete PMI® programs, enabling organizations to deliver projects successfully and achieve strategic objectives.
          </p>
        </div>
      </div>

      {/* Core Certifications */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-semibold text-black mb-6">PROJECT MANAGEMENT TRAINING (PMI® PROGRAMS)</h1>
        <h3 className="text-xl font-medium text-black mb-4">Core Certifications:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCerts.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition-shadow cursor-pointer"
            >
              {cert}
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-medium text-black mt-8 mb-4">Specialized Certifications:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializedCerts.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition-shadow cursor-pointer"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Procurement & Supply Chain */}
      <div className="px-10 py-8 bg-white">
        <h1 className="text-3xl font-semibold text-black mb-6">PROCUREMENT & SUPPLY CHAIN SOLUTIONS</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procurementItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-amber-50 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-amber-500 mb-2">{item.title}</h3>
              <ul className="list-disc list-inside text-gray-800">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership & Culture */}
      <div className="px-10 py-8 bg-amber-50">
        <h1 className="text-3xl font-semibold text-black mb-6">LEADERSHIP & CULTURE TRANSFORMATION PROGRAMS</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-amber-500 mb-2">{item.title}</h3>
              <ul className="list-disc list-inside text-gray-800">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Conflict Management */}
      <div className="px-10 py-8 bg-white">
        <h1 className="text-3xl font-semibold text-black mb-6">CONFLICT MANAGEMENT TRAINING FOR NGOS</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conflictItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-amber-50 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Training;
