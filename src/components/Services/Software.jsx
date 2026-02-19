import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Software = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-20">

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          SOFTWARE ENGINEERING & DEVELOPMENT SERVICES
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Delivering highly skilled software engineers and dedicated development teams to power your projects worldwide. We provide flexible, scalable, and expert solutions tailored to meet the demands of modern businesses.
        </p>
        <Link to="/contact-us">
          <motion.button
            className="mt-6 border-2 border-amber-500 bg-white hover:bg-amber-500 text-black hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Talk &#8594;
          </motion.button>
        </Link>
      </div>

      {/* Developer Capabilities */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center">
          Developer Capabilities for IT Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Web & Mobile App Development – Scalable, user-focused applications tailored to business objectives",
            "Custom Software Development – Full-cycle development aligned with organizational needs",
            "UX/UI Design – Intuitive, human-centered interfaces for optimal user experience",
            "Cloud & Enterprise Solutions – Platforms such as AWS, Azure, SharePoint, Workday, Salesforce, Shopify",
            "IoT (Internet of Things) – Integrated smart systems for connected operations",
            "AI & ML Applications – Intelligent solutions for analytics, automation, and optimization",
            "Blockchain & Emerging Technologies – Secure and innovative solutions for modern business",
            "DevOps & Automation – Continuous integration, delivery, and infrastructure automation",
            "QA & Testing – Rigorous quality assurance for performance and reliability",
            "Support & Maintenance – Ongoing care to ensure system security, reliability, and scalability",
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Developer Teams */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center">
          Global Developer Teams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Access a pool of certified, experienced developers from around the world",
            "Flexible engagement models: project-based, dedicated teams, hourly/part-time, or fully custom solutions",
            "Rapidly scale your IT capacity without the overhead of full-time hires",
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Impact */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center">
          Business Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Accelerate project delivery with expert resources",
            "Integrate AI and modern technologies into core operations",
            "Enhance operational efficiency and scalability",
            "Reduce costs and minimize recruitment overhead",
            "Leverage global talent without geographic constraints",
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 pb-8 text-center">
          Engagement Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            "Project-Based Delivery – Full ownership and delivery of software projects",
            "Hourly/Part-Time Developers – Flexible, on-demand expertise",
            "Dedicated Teams – Fully integrated developers embedded in your projects",
            "Custom Engagement – Tailored collaboration for unique business needs",
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-center">
          Flexibility Meets Expertise: Whether you need short-term support for a specific project, or a long-term team embedded within your operations, Skylartech ensures seamless collaboration, high-quality results, and measurable business impact.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center">
          Flexible access to top-tier developers, faster project delivery, cost efficiency, and seamless integration with business objectives.
        </p>
      </div>

    </div>
  );
};

export default Software;
