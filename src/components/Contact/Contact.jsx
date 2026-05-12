import React, { useRef, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  Building2,
} from "lucide-react";

import City from "../../assets/Contact Images/City.jpeg";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  // EMAIL SEND FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_io0r674",
        "template_zasi06u",
        formRef.current,
        "-_TWrocdzHf5_ObxW"
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        formRef.current.reset();

        setTimeout(() => setStatus(null), 4000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setLoading(false);

        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <div className="bg-white">
      {/* SEO */}
      <Helmet>
        <title>Contact Skylartech | PMI Training & Consulting</title>
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${City})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-950/70 to-purple-900/70" />

        <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Contact{" "}
              <span className="text-purple-300">
                <Typewriter words={["Skylartech"]} loop={1} />
              </span>
              <Cursor cursorStyle="|" />
            </h2>

            <p className="text-white/80 max-w-md">
              Connect with our PMI® Premier Authorized Training team.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />

        <div className="relative max-w-4xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In Touch
            </h2>
          </div>

          {/* STATUS MESSAGE */}
          {status && (
            <div
              className={`mb-6 px-5 py-3 rounded-xl text-sm font-medium text-center shadow-lg backdrop-blur-xl border ${
                status === "success"
                  ? "bg-green-500/20 text-green-200 border-green-400/30"
                  : "bg-red-500/20 text-red-200 border-red-400/30"
              }`}
            >
              {status === "success"
                ? "✅ Message sent successfully! We’ll get back to you shortly."
                : "❌ Failed to send message. Please try again."}
            </div>
          )}

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 space-y-6"
          >
            {/* FULL NAME */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                name="full_name"
                required
                className="w-full pl-10 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50"
                placeholder="Full Name"
              />
            </div>

            {/* COMPANY */}
            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                name="company"
                className="w-full pl-10 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50"
                placeholder="Company"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                name="email"
                type="email"
                required
                className="w-full pl-10 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50"
                placeholder="Email Address"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                name="phone"
                className="w-full pl-10 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50"
                placeholder="Phone Number"
              />
            </div>

            {/* SERVICE */}
            <select
              name="service"
              className="w-full py-3 bg-white/5 border border-white/20 rounded-xl text-white"
            >
              <option className="text-black">Service Interested In</option>
              <option className="text-black">PMP Training</option>
              <option className="text-black">Consulting</option>
              <option className="text-black">PMO Advisory</option>
              <option className="text-black">Agile Transformation</option>
              <option className="text-black">Software Engineering</option>
            </select>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <textarea
                name="message"
                rows="5"
                required
                className="w-full pl-10 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50"
                placeholder="Message"
              />
            </div>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600"
              } text-white`}
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white py-14 text-center">
        <MapPin className="mx-auto text-purple-300 w-8 h-8" />
        <h2 className="text-2xl font-bold mt-3">Nairobi, Kenya</h2>
        <p className="text-white/70 mt-2">The Waterfront, Karen</p>
        <p className="mt-4 text-white/60 text-sm">
          training@skylartech.co.ke | +254 718 257 293
        </p>
      </section>
    </div>
  );
};

export default Contact;