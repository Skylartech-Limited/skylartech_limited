import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  /* ================= PREMIUM PURPLE NAV STYLE ================= */
  const navLink =
    "text-gray-700 hover:text-purple-700 transition-all duration-200 font-medium tracking-[0.3px] text-base lg:text-[17px]";

  const dropdownItem =
    "block px-6 py-3 text-[15px] text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-all duration-200";

  const industries = [
    { name: "Banking & Finance", link: "/industries/banking-and-finance" },
    { name: "Telecommunications", link: "/industries/telecommunications" },
    { name: "Government & Public Sector", link: "/industries/government" },
    { name: "NGOs & Development", link: "/industries/ngos" },
    { name: "Healthcare", link: "/industries/healthcare" },
  ];

  const MobileDropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b border-purple-100/40 py-2 text-center">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-center items-center gap-2 py-2 font-medium text-gray-800"
        >
          {title}
          <span className="text-purple-500">{open ? "−" : "+"}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col items-center text-center gap-2 pb-3 text-gray-600"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-white/60 backdrop-blur-2xl 
      bg-gradient-to-r from-purple-50/30 via-white/70 to-indigo-50/20
      border-b border-purple-100/40 
      shadow-sm shadow-black/5"
    >
      {/* bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">

          {/* LOGO */}
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <img
              src={Logo}
              alt="SkylarTech"
              className="w-[180px] lg:w-[210px] object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-14 xl:gap-16 flex-1 justify-center">

            <Link to="/" onClick={scrollToTop} className={navLink}>
              Home
            </Link>

            {/* ABOUT */}
            <div
              className="relative py-4"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink + " flex items-center gap-1"}>
                About <ChevronDown className="w-3 h-3 text-purple-500" />
              </button>

              <AnimatePresence>
                {openDropdown === "about" && (
                  <motion.div className="absolute left-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-xl shadow-purple-100/20 border border-purple-100/40 overflow-hidden">
                    <a href="/#about-skylartech" className={dropdownItem}>
                      About Skylartech
                    </a>
                    <a href="/#why-choose-us" className={dropdownItem}>
                      Why Choose Us
                    </a>
                    <a href="/#certification-programs" className={dropdownItem}>
                      Certifications
                    </a>
                    <a href="/#our-expertise" className={dropdownItem}>
                      Expertise
                    </a>
                    <a href="/#our-clients" className={dropdownItem}>
                      Clients & Success Stories
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OFFERINGS */}
            <div
              className="relative py-4"
              onMouseEnter={() => setOpenDropdown("offerings")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink + " flex items-center gap-1"}>
                Offerings <ChevronDown className="w-3 h-3 text-purple-500" />
              </button>

              <AnimatePresence>
                {openDropdown === "offerings" && (
                  <motion.div className="absolute left-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-xl shadow-purple-100/20 border border-purple-100/40 overflow-hidden">
                    <Link to="/offerings/pmp-training" className={dropdownItem}>
                      PMP Training
                    </Link>
                    <Link to="/offerings/corporate-training" className={dropdownItem}>
                      Corporate Training
                    </Link>
                    <Link to="/offerings/consulting" className={dropdownItem}>
                      Consulting
                    </Link>
                    <Link to="/offerings/agile-and-scrum" className={dropdownItem}>
                      Agile Transformation
                    </Link>
                    <Link to="/offerings/web-and-app-development" className={dropdownItem}>
                      Software Engineering
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES */}
            <div
              className="relative py-4"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={navLink + " flex items-center gap-1"}>
                Industries <ChevronDown className="w-3 h-3 text-purple-500" />
              </button>

              <AnimatePresence>
                {openDropdown === "industries" && (
                  <motion.div className="absolute left-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-xl shadow-purple-100/20 border border-purple-100/40 overflow-hidden">
                    {industries.map((item, i) => (
                      <Link
                        key={i}
                        to={item.link}
                        onClick={scrollToTop}
                        className={dropdownItem}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact-us" onClick={scrollToTop} className={navLink}>
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-gray-700"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-purple-100/40 px-6 py-6"
          >
            <div className="space-y-3 text-center">

              <Link to="/" onClick={closeMenus} className="block py-2">
                Home
              </Link>

              <MobileDropdown title="About">
                <a href="/#about-skylartech" onClick={closeMenus}>About Skylartech</a>
                <a href="/#why-choose-us" onClick={closeMenus}>Why Choose Us</a>
                <a href="/#certification-programs" onClick={closeMenus}>Certifications</a>
                <a href="/#our-expertise" onClick={closeMenus}>Expertise</a>
                <a href="/#our-clients" onClick={closeMenus}>Clients & Success Stories</a>
              </MobileDropdown>

              <MobileDropdown title="Offerings">
                <Link to="/offerings/pmp-training" onClick={closeMenus}>PMP Training</Link>
                <Link to="/offerings/corporate-training" onClick={closeMenus}>Corporate Training</Link>
                <Link to="/offerings/consulting" onClick={closeMenus}>Consulting</Link>
                <Link to="/offerings/agile-and-scrum" onClick={closeMenus}>Agile Transformation</Link>
                <Link to="/offerings/web-and-app-development" onClick={closeMenus}>Software Engineering</Link>
              </MobileDropdown>

              <MobileDropdown title="Industries">
                {industries.map((item, i) => (
                  <Link key={i} to={item.link} onClick={closeMenus}>
                    {item.name}
                  </Link>
                ))}
              </MobileDropdown>

              <Link to="/contact-us" onClick={closeMenus} className="block py-2 mt-2">
                Contact
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;