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
  Sparkles,
  Send,
  ChevronDown,
} from "lucide-react";

import City from "../../assets/Contact Images/City.jpeg";
import PMIlogo from "../../assets/Contact Images/PMIlogo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80">
    {children}
  </div>
);

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
);

const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
  />
);

const GlassCard = ({ children, className = "", hover = true }) => (
  <div
    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${
      hover
        ? "transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-white/[0.07] hover:shadow-[0_30px_90px_rgba(56,189,248,0.12)]"
        : ""
    } ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
    {children}
  </div>
);

const heroCards = [
  { icon: MapPin, title: "Location", value: "Nairobi, Kenya" },
  { icon: Clock3, title: "Availability", value: "Mon - Sun" },
  { icon: Globe, title: "Support", value: "24/7 Response" },
  { icon: Mail, title: "Email", value: "info@skylartech.co.ke" },
  { icon: Phone, title: "Phone", value: "+254 718-257-293" },
  {
    icon: MapPin,
    title: "Office",
    value: "Gateway Mall, 4th Floor, Mombasa Road",
  },
];

const certificationOfferings = [
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
];

const serviceOfferings = [
  "Consulting & Transformation",
  "Portfolio & PMO Excellence",
  "Agile Delivery Excellence",
  "Risk & Compliance Assurance",
  "Business Analysis",
];

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
      phone: phoneValue,
      message: formData.get("message")?.trim() || "Not provided",
      requested_offering: selectedOffering || "Not specified",
    };

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

  const statusMessage = {
    success: "Form submission successful. We'll be in touch shortly.",
    missing_input: "Please either write a message or select an offering.",
    captcha_required: "Please complete the captcha verification.",
    error: "Unable to send message. Please try again.",
  };

  const statusStyles = {
    success: "bg-emerald-500/10 border-emerald-400/30 text-emerald-200",
    missing_input: "bg-amber-500/10 border-amber-400/30 text-amber-200",
    captcha_required: "bg-amber-500/10 border-amber-400/30 text-amber-200",
    error: "bg-red-500/10 border-red-400/30 text-red-200",
  };

  return (
    <>
      {" "}
      <Helmet>
        <title>
          Contact Skylartech Limited | PMI® Training, PMO Consulting & Support
        </title>
        <meta
          name="description"
          content="Contact Skylartech Limited, a PMI® Premier Authorized Training Partner in Nairobi, Kenya. Get in touch for PMP training, Agile certification, PMO consulting, and project management advisory services."
        />
        <meta
          name="keywords"
          content="
            Skylartech Limited contact,
            PMI training Kenya,
            PMP training Nairobi,
            Agile certification Kenya,
            PMO consulting Kenya,
            project management training Kenya,
            PMI Authorized Training Partner Kenya
          "
        />
        <link rel="canonical" href="https://skylartech.co.ke/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Skylartech Limited | PMI® Training & Project Consulting"
        />
        <meta
          property="og:description"
          content="Reach Skylartech Limited in Nairobi for PMI® Certified Training, PMP preparation, Agile coaching, and PMO consulting services."
        />
        <meta property="og:url" content="https://skylartech.co.ke/contact" />
        <meta property="og:site_name" content="Skylartech Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Skylartech | PMI® Training Kenya"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Skylartech Limited for PMP training, Agile certification, and PMO consulting in Nairobi, Kenya."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Skylartech Limited",
            url: "https://skylartech.co.ke",
            logo: "https://skylartech.co.ke/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+254 718 257 293",
                contactType: "customer support",
                areaServed: "KE",
                availableLanguage: ["English"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            sameAs: [],
          })}
        </script>
      </Helmet>
      <div className="bg-[#05060A] overflow-x-hidden text-white">
        {/* HERO */}
        <section
          className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-cover bg-center pt-36 sm:pt-40 lg:pt-36 pb-16 sm:pb-20"
          style={{ backgroundImage: `url(${City})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#071019]/85 to-[#05060A]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

          <GlowOrb className="top-0 left-1/2 w-[550px] h-[550px] bg-sky-500/12 -translate-x-1/2 -translate-y-1/2" />
          <GlowOrb className="bottom-0 right-0 w-[480px] h-[480px] bg-blue-500/10 translate-x-1/3 translate-y-1/3" />
          <GridOverlay />

          <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionLabel>
                <Globe className="w-3.5 h-3.5 text-sky-300" />
                PMI® Training • Consulting • PMO Advisory
              </SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
            >
              Secure Your Competitive Edge with a
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">
                Premier Authorized Partner
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="mt-8 space-y-4 max-w-2xl"
            >
              <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed">
                Empower your leadership and execution teams with world-class,
                globally recognized PMI® certifications. Led by master
                Authorized Instructors, we deploy high-velocity corporate
                training and intensive exam prep bootcamps designed to guarantee
                first-time passing success.
              </p>
              <p className="text-white/55 text-sm sm:text-base md:text-lg leading-relaxed">
                Whether delivered Onsite or via Interactive Online VILT (Virtual
                Instructor-Led Training), our high-impact curriculum is built to
                turn strategic theory into immediate operational execution.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-12 w-full max-w-5xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {heroCards.map((item) => (
                  <motion.div key={item.title + item.value} variants={fadeUp}>
                    <GlassCard className="flex flex-col items-center justify-center text-center gap-2 p-5 h-full">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-sky-300" />
                      </div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">
                        {item.title}
                      </p>
                      <h3 className="font-semibold text-sm sm:text-base break-words text-white">
                        {item.value}
                      </h3>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#04070D] via-[#07111B] to-[#0E1B2B]" />
          <GlowOrb className="top-0 left-0 w-96 h-96 bg-sky-500/10 -translate-x-1/3 -translate-y-1/3" />
          <GlowOrb className="bottom-0 right-0 w-96 h-96 bg-blue-500/10 translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_50%)]" />
          <GridOverlay />

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 z-10">
            {/* LEFT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2 space-y-6 text-center lg:text-left"
            >
              <SectionLabel>
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                Accelerate Your Team's Performance
              </SectionLabel>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
                Command Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">
                  Industry Standards
                </span>
              </h2>

              <div className="space-y-4 text-white/65 text-sm sm:text-base leading-relaxed">
                <p>
                  Do not just train—transform. Connect with our experts today to
                  deploy custom PMI certification tracks engineered to scale
                  your organization's delivery, efficiency, and market value.
                </p>
                <p>
                  These programs are designed to strengthen leadership
                  execution, improve delivery consistency, and align teams with
                  globally recognized PMI® best practices.
                </p>
              </div>

              <div className="mt-6 flex justify-center lg:justify-start">
                <GlassCard hover={false} className="p-8 sm:p-10">
                  <img
                    src={PMIlogo}
                    alt="PMI Logo"
                    className="h-28 sm:h-36 md:h-44 lg:h-48 w-auto object-contain mx-auto"
                  />
                </GlassCard>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 px-5 py-4 rounded-2xl text-sm border backdrop-blur-xl ${statusStyles[status]}`}
                >
                  {statusMessage[status]}
                </motion.div>
              )}

              <GlassCard hover={false} className="p-5 sm:p-8 lg:p-10">
                <motion.form ref={formRef} onSubmit={sendEmail}>
                  <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Send Us a Message
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base mt-2">
                      We respond quickly to all inquiries.
                    </p>
                  </div>

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
                    ].map((f) => (
                      <div key={f.name} className="relative">
                        <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-white/40 pointer-events-none" />
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-sky-400/40 focus:bg-white/[0.06] transition-all duration-300"
                        />
                      </div>
                    ))}

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-white/40 z-10 pointer-events-none" />
                      <div className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center focus-within:border-sky-400/40 focus-within:bg-white/[0.06] transition-all duration-300">
                        <style>{`
                        .PhoneInputCountrySelect {
                          background-color: #0b1220 !important;
                          color: #ffffff !important;
                          color-scheme: dark;
                          border: 1px solid rgba(255,255,255,0.08);
                          border-radius: 0.5rem;
                        }
                        .PhoneInputCountrySelect option,
                        .PhoneInputCountrySelect optgroup {
                          background-color: #0b1220 !important;
                          color: #ffffff !important;
                          opacity: 1 !important;
                        }
                        .PhoneInputCountrySelect option {
                          background-color: #0b1220 !important;
                          color: #ffffff !important;
                        }
                        .PhoneInputCountrySelect,
                        .PhoneInputCountrySelect * {
                          background-color: #0b1220 !important;
                          color: #ffffff !important;
                        }
                        .PhoneInputCountrySelect option:hover {
                          background-color: #1e293b !important;
                          color: #ffffff !important;
                        }
                        .PhoneInputCountrySelect option:checked {
                          background-color: #0ea5e9 !important;
                          color: #ffffff !important;
                        }
                        select.PhoneInputCountrySelect {
                          -webkit-appearance: none;
                          appearance: none;
                        }
                      `}</style>
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

                  {/* REQUESTED OFFERING */}
                  <div className="mt-5 relative">
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                      Requested Offering (Optional)
                    </label>

                    <button
                      type="button"
                      onClick={() => setOfferingOpen((prev) => !prev)}
                      className="w-full h-12 sm:h-14 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white text-left flex items-center justify-between focus:outline-none focus:border-sky-400/40 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <span
                        className={
                          selectedOffering ? "text-white" : "text-white/40"
                        }
                      >
                        {selectedOffering || "Select Offering"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/50 transition-transform duration-300 ${offeringOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {offeringOpen && (
                      <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#0B1220]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] max-h-72 overflow-y-auto">
                        <div className="px-4 py-2.5 text-xs text-white/40 uppercase tracking-wider">
                          Professional Training & Certification
                        </div>
                        {certificationOfferings.map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setSelectedOffering(item);
                              setOfferingOpen(false);
                            }}
                            className="px-4 py-2.5 cursor-pointer text-white hover:bg-sky-500/10 transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                        <div className="border-t border-white/10 my-1" />
                        <div className="px-4 py-2.5 text-xs text-white/40 uppercase tracking-wider">
                          Consulting & Services
                        </div>
                        {serviceOfferings.map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setSelectedOffering(item);
                              setOfferingOpen(false);
                            }}
                            className="px-4 py-2.5 cursor-pointer text-white hover:bg-sky-500/10 transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      type="hidden"
                      name="requested_offering"
                      value={selectedOffering}
                    />
                  </div>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    className="mt-5 w-full px-4 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-sky-400/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  />

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

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group mt-6 w-full h-12 sm:h-14 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                      loading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-sky-500 to-blue-600 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.01] active:scale-[0.99]"
                    }`}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
