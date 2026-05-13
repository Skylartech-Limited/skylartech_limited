import React, { useRef, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock3,
  Globe
} from "lucide-react";

import City from "../../assets/Contact Images/City.jpeg";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_io0r674",
        "template_zasi06u",
        formRef.current,
        "-_TWrocdzHf5_ObxW",
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <div className="bg-[#05060A] overflow-x-hidden text-white">
      <Helmet>
        <title>Contact Skylartech | PMI Training & Consulting</title>
      </Helmet>

      {/* ================= HERO ================= */}
  <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-28 sm:pt-32 lg:pt-36"
  style={{ backgroundImage: `url(${City})` }}
>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#071019]/85 to-[#102033]/75" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* HERO CONTENT */}
        <div className="relative w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
            <Globe className="w-4 h-4 text-sky-300" />
            <span className="text-[11px] sm:text-sm text-white/80">
              PMI® Training • Consulting • PMO Advisory
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Let’s Build Better
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">
              Project Delivery Systems
            </span>
          </h1>

          {/* TYPEWRITER */}
          <div className="mt-6 text-base sm:text-xl md:text-2xl text-white/80">
            Contact{" "}
            <span className="text-sky-300">
              <Typewriter
                words={[
                  "Skylartech",
                  "Our Consultants",
                  "Our PMO Experts",
                  "Our Training Team",
                ]}
                loop={0}
              />
            </span>
            <Cursor cursorStyle="|" />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-8 text-white/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Connect with our team to discuss project management training,
            enterprise consulting, Agile transformation, PMO implementation, and
            strategic delivery frameworks tailored for your organization.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl px-2">
            {[
              { icon: MapPin, title: "Location", value: "Nairobi, Kenya" },
              { icon: Clock3, title: "Availability", value: "Mon - Sun" },
              { icon: Mail, title: "Support", value: "24/7 Response" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl"
              >
                <item.icon className="w-5 h-5 text-sky-300 mb-2 sm:mb-3" />
                <p className="text-xs sm:text-sm text-white/50">{item.title}</p>
                <h3 className="font-semibold mt-1 text-sm sm:text-base">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#04070D] via-[#07111B] to-[#0E1B2B]">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
            <div>
              <p className="text-sky-300 uppercase text-xs sm:text-sm">
                Contact Information
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                Speak With Our Experts
              </h2>
              <p className="text-white/65 mt-6 leading-relaxed text-sm sm:text-base">
                Whether you're planning transformation or PMO setup, we’re here
                to help.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  icon: Mail,
                  title: "Email Address",
                  value: "training@skylartech.co.ke",
                },
                {
                  icon: Phone,
                  title: "Phone Number",
                  value: "+254 718-257-293",
                },
                {
                  icon: MapPin,
                  title: "Office Location",
                  value: "The Waterfront, Karen, Nairobi",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center lg:justify-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-white/50 text-xs sm:text-sm">{item.title}</p>
                    <h3 className="font-medium text-sm sm:text-base">{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            {status && (
              <div
                className={`mb-6 px-5 py-4 rounded-2xl text-sm border ${
                  status === "success"
                    ? "bg-green-500/15 border-green-400/30 text-green-200"
                    : "bg-red-500/15 border-red-400/30 text-red-200"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully."
                  : "Unable to send message."}
              </div>
            )}

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-8 backdrop-blur-2xl"
            >
              <div className="mb-6 sm:mb-8 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold">Send Us a Message</h3>
                <p className="text-white/55 mt-2 text-sm sm:text-base">
                  We respond quickly to all inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  { icon: User, name: "full_name", placeholder: "Full Name" },
                  { icon: Building2, name: "company", placeholder: "Company" },
                  { icon: Mail, name: "email", placeholder: "Email" },
                  { icon: Phone, name: "phone", placeholder: "Phone" },
                ].map((f, i) => (
                  <div key={i} className="relative">
                    <f.icon className="absolute left-4 top-4 w-4 sm:w-5 h-4 sm:h-5 text-white/40" />
                    <input
                      name={f.name}
                      placeholder={f.placeholder}
                      className="w-full h-12 sm:h-14 pl-10 sm:pl-12 rounded-xl bg-white/5 border border-white/10 text-white text-sm sm:text-base"
                    />
                  </div>
                ))}
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="mt-5 w-full px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm sm:text-base"
              />

              <button
                type="submit"
                disabled={loading}
                className={`mt-6 w-full h-12 sm:h-14 rounded-xl font-semibold transition-all duration-300 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-sky-500 to-blue-600"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;