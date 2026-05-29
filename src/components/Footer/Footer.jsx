import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 via-purple-950 to-slate-900 text-white overflow-hidden">

      {/* NEON GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-fuchsia-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/2 w-[450px] h-[450px] bg-emerald-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Certifications", "/offerings/professional-training-and-certification"],
                ["Contact Us", "/contact-us"],
              ].map(([label, path], i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="hover:text-cyan-300 transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATIONS (ALL NOW WORKING LINKS) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
              Certifications
            </h3>

            <ul className="space-y-3 text-white/70">
              {[
                ["PMP®", "/certifications/pmp"],
                ["CAPM®", "/certifications/capm"],
                ["PMI-ACP®", "/certifications/pmi-acp"],
                ["PMI-RMP®", "/certifications/pmi-rmp"],
                ["PMI-PBA®", "/certifications/pmi-pba"],
                ["PMI-SP®", "/certifications/pmi-sp"],
                ["PMI-CPMAI®", "/certifications/pmi-cpmai"],
                ["PMI-CP®", "/certifications/pmi-cp"],
              ].map(([label, path], i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="hover:text-fuchsia-300 transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFERINGS */}
<div>
  <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
    Offerings
  </h3>

  <ul className="space-y-3 text-white/70">
    {[
      ["Professional Training & Certification", "/offerings/professional-training-and-certification"],
      ["Consulting & Transformation", "/offerings/consulting-and-organizational-transformation"],
      ["Portfolio & PMO Excellence", "/offerings/portfolio-pmo-and-governance-excellence"],
      ["Agile Delivery Excellence", "/offerings/agile-and-adaptive-delivery-excellence"],
      ["Risk & Compliance Assurance", "/offerings/risk-compliance-and-assurance"],
      ["Business Analysis", "/offerings/business-analysis-and-requirements-gathering"],
    ].map(([label, path], i) => (
      <li key={i}>
        <Link
          to={path}
          className="hover:text-cyan-300 transition duration-300"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* MAP */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Location
            </h3>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7419717032712!2d36.71209707461479!3d-1.3309057986564705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b40e8700ce9%3A0xf4eb6d3689e5364b!2sThe%20Waterfront%20Karen!5e0!3m2!1sen!2ske!4v1688904954033!5m2!1sen!2ske"
                className="w-full h-48"
                loading="lazy"
                title="map"
              />
            </div>

            <p className="text-white/60 text-sm">
              The Waterfront, Karen, Nairobi
            </p>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="mt-14 flex justify-center gap-6 text-white/70">
          {[
            ["twitter", "https://twitter.com/skylartechke"],
            ["linkedin", "https://www.linkedin.com/company/skylartechlimited/?viewAsMember=true"],
            ["facebook", "https://www.facebook.com/SkylartechKE/"],
            ["instagram", "https://www.instagram.com/skylartechlife/"],
          ].map(([icon, url], i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition text-xl"
            >
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* FOOTER NOTE */}
        <div className="text-center text-xs text-white/60 leading-6 max-w-4xl mx-auto">
          <p>
            PMI®, PMP®, CAPM®, PMI-ACP®, PgMP®, PfMP®, PMI-RMP®, PMI-PBA®, PMI-SP®
            are registered marks of Project Management Institute, Inc.
          </p>

          <p className="mt-4">
            © {new Date().getFullYear()} Skylartech Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;