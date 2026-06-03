import React, { useRef, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import { Turnstile } from "@marsidev/react-turnstile";

import "react-phone-number-input/style.css";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock3,
  Globe,
} from "lucide-react";

import City from "../../assets/Contact Images/City.jpeg";
import PMIlogo from "../../assets/Contact Images/PMIlogo.png";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [offeringOpen, setOfferingOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(formRef.current);

    const payload = {
      full_name: formData.get("full_name"),
      company: formData.get("company") || "",
      email: formData.get("email"),
      phone: phoneValue, // ✅ controlled state ONLY
      message: formData.get("message")?.trim() || "Not provided",
      requested_offering: selectedOffering || "Not specified",
    };

    // validation
    if (
      !payload.message ||
      (!selectedOffering && payload.message === "Not provided")
    ) {
      setLoading(false);
      setStatus("missing_input");
      return;
    }

    if (!captchaToken || captchaToken.length < 20) {
      setLoading(false);
      setStatus("captcha_required");
      return;
    }

    if (!phoneValue || phoneValue.length < 8) {
      setStatus("missing_input");
      setLoading(false);
      return;
    }

    emailjs
      .send("service_io0r674", "template_zasi06u", payload, "-_TWrocdzHf5_ObxW")
      .then(() => {
        setStatus("success");
        setLoading(false);
        formRef.current.reset();
        setPhoneValue("");
        setSelectedOffering("");
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
        className="
    relative min-h-screen
    flex items-center justify-center
    overflow-hidden bg-cover bg-center
    pt-40 sm:pt-44 lg:pt-36
    pb-12 sm:pb-16 lg:pb-20
  "
        style={{ backgroundImage: `url(${City})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#071019]/85 to-[#102033]/75" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-5 sm:mb-6">
            <Globe className="w-4 h-4 text-sky-300" />
            <span className="text-[11px] sm:text-sm text-white/80">
              PMI® Training • Project Consulting • PMO Advisory
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.2]">
            Secure Your Competitive Edge with a
            <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">
              Premier Authorized Partner
            </span>
          </h1>

          <div className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl text-white/80">
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

          <p className="mt-5 sm:mt-6 text-white/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Empower your leadership and execution teams with world-class,
            globally recognized PMI® certifications. Led by master Authorized
            Instructors, we deploy high-velocity corporate training and
            intensive exam prep bootcamps designed to guarantee first-time
            passing success.
          </p>

          <p className="mt-5 sm:mt-6 text-white/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Whether delivered Onsite or via Interactive Online VILT (Virtual
            Instructor-Led Training), our high-impact curriculum is built to
            turn strategic theory into immediate operational execution.
          </p>

          {/* CARDS */}
          <div className="mt-10 sm:mt-12 w-full max-w-5xl px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: MapPin, title: "Location", value: "Nairobi, Kenya" },
                { icon: Clock3, title: "Availability", value: "Mon - Sun" },
                { icon: Globe, title: "Support", value: "24/7 Response" },
              ].map((item, i) => (
                <div
                  key={`stats-${i}`}
                  className="flex flex-col items-center justify-center text-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl hover:bg-white/10 transition"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300" />
                  <p className="text-xs text-white/50">{item.title}</p>
                  <h3 className="font-semibold text-sm sm:text-base break-words">
                    {item.value}
                  </h3>
                </div>
              ))}

              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "training@skylartech.co.ke",
                },
                { icon: Phone, title: "Phone", value: "+254 718-257-293" },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "The Waterfront, Karen, Nairobi",
                },
              ].map((item, i) => (
                <div
                  key={`contact-${i}`}
                  className="flex flex-col items-center justify-center text-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-xl hover:bg-white/10 transition"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300" />
                  <p className="text-xs text-white/50">{item.title}</p>
                  <h3 className="font-semibold text-sm sm:text-base break-words">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-br from-[#04070D] via-[#07111B] to-[#0E1B2B]">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <p className="text-sky-300 uppercase text-xs sm:text-sm tracking-wider">
              Accelerate Your Team's Performance
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Command Your Industry Standards
            </h2>

            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                Do not just train—transform. Connect with our experts today to
                deploy custom PMI certification tracks engineered to scale your
                organization’s delivery, efficiency, and market value.
              </p>

              <p>
                These programs are designed to strengthen leadership execution,
                improve delivery consistency, and align teams with globally
                recognized PMI® best practices.
              </p>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={PMIlogo}
                  alt="PMI Logo"
                  className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            {status && (
              <div
                className={`mb-6 px-5 py-4 rounded-2xl text-sm border ${
                  status === "success"
                    ? "bg-green-500/10 border-green-400/30 text-green-200"
                    : status === "missing_input"
                      ? "bg-yellow-500/10 border-yellow-400/30 text-yellow-200"
                      : "bg-red-500/10 border-red-400/30 text-red-200"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully."
                  : status === "missing_input"
                    ? "Please either write a message or select an offering."
                    : "Unable to send message."}
              </div>
            )}

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-lg"
            >
              <div className="mb-6 sm:mb-8 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Send Us a Message
                </h3>
                <p className="text-white/60 text-sm sm:text-base mt-2">
                  We respond quickly to all inquiries.
                </p>
              </div>

              {/* INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  {
                    icon: User,
                    name: "full_name",
                    placeholder: "Full Name *",
                    required: true,
                    type: "text",
                  },
                  {
                    icon: Building2,
                    name: "company",
                    placeholder: "Company (Optional)",
                    required: false,
                    type: "text",
                  },
                  {
                    icon: Mail,
                    name: "email",
                    placeholder: "Email *",
                    required: true,
                    type: "email",
                  },
                ].map((f, i) => (
                  <div key={i} className="relative">
                    <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-white/40" />

                    <input
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      placeholder={f.placeholder}
                      className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-sky-400/40 transition"
                    />
                  </div>
                ))}

                {/* ================= PHONE (FULL FIX) ================= */}
                <div className="relative">
                  {/* ICON (SAFE POINTER EVENTS OFF) */}
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-white/40 z-10 pointer-events-none" />

                  {/* INPUT WRAPPER */}
                  <div
                    className="
      w-full h-12 sm:h-14
      pl-10 sm:pl-12 pr-4
      rounded-xl
      bg-white/5
      border border-white/10
      flex items-center
      focus-within:border-sky-400/40
      transition
    "
                  >
                    <PhoneInput
                      international
                      defaultCountry="KE"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      placeholder="Phone *"
                      className="w-full h-full bg-transparent text-white outline-none"
                      inputStyle={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        outline: "none",
                        fontSize: "14px",
                      }}
                      countrySelectProps={{
                        style: {
                          background: "transparent",
                          border: "none",
                          color: "white",
                        },
                      }}
                      numberInputProps={{
                        style: {
                          background: "transparent",
                          border: "none",
                          color: "white",
                          outline: "none",
                          width: "100%",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* REQUESTED OFFERING (CUSTOM DROPDOWN) */}
              <div className="mt-5 relative">
                <label className="block text-xs text-white/60 mb-2">
                  Requested Offering (Optional)
                </label>

                {/* Trigger */}
                <button
                  type="button"
                  onClick={() => setOfferingOpen((prev) => !prev)}
                  className="
      w-full h-12 sm:h-14 px-4 rounded-xl
      bg-[#0B1220]
      border border-white/10
      text-white text-left
      flex items-center justify-between
      focus:outline-none focus:border-sky-400/40
      transition
    "
                >
                  <span
                    className={
                      selectedOffering ? "text-white" : "text-white/50"
                    }
                  >
                    {selectedOffering || "Select Offering"}
                  </span>

                  <span className="text-white/60">▾</span>
                </button>

                {/* Dropdown */}
                {offeringOpen && (
                  <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220] backdrop-blur-xl shadow-lg max-h-72 overflow-y-auto">
                    <div className="px-3 py-2 text-xs text-white/50">
                      Professional Training & Certification
                    </div>

                    {[
                      "CAPM®",
                      "PMP®",
                      "PgMP®",
                      "PfMP®",
                      "PMI-ACP®",
                      "PMI-RMP®",
                      "PMI-PBA®",
                      "PMI-SP®",
                      "PMI-CP®",
                      "PMI-PMOCP®",
                      "PMI-CPMAI®",
                      "GPM-b®",
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setSelectedOffering(item);
                          setOfferingOpen(false);
                        }}
                        className="
            px-4 py-2 cursor-pointer text-white
            hover:bg-white/10 transition
          "
                      >
                        {item}
                      </div>
                    ))}

                    <div className="border-t border-white/10 my-2" />

                    {[
                      "Consulting & Transformation",
                      "Portfolio & PMO Excellence",
                      "Agile Delivery Excellence",
                      "Risk & Compliance Assurance",
                      "Business Analysis",
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setSelectedOffering(item);
                          setOfferingOpen(false);
                        }}
                        className="
            px-4 py-2 cursor-pointer text-white
            hover:bg-white/10 transition
          "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Hidden input so EmailJS still receives value */}
                <input
                  type="hidden"
                  name="requested_offering"
                  value={selectedOffering}
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="mt-5 w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-sky-400/40 transition"
              />

              {/* CAPTCHA */}
              <div className="mt-6 flex justify-center">
                <Turnstile
                  siteKey="0x4AAAAAADeD_XUZrBMIVKHQ"
                  onSuccess={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                  options={{
                    theme: "dark",
                    size: "normal",
                  }}
                />
              </div>
              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className={`mt-6 w-full h-12 sm:h-14 rounded-xl font-semibold transition-all ${
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
