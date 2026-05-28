import { Route, Routes } from "react-router-dom";
import LiveChat from "./components/Livechat/Livechat.jsx";
import Scroll from "./components/ScrollToTop/Scroll.jsx";
import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Homepage/Home.jsx";
import About from "./components/Homepage/About.jsx";

import Banking from "./components/Industries/Banking.jsx";
import Telecommunications from "./components/Industries/Telecommunications.jsx";
import Ngos from "./components/Industries/Ngos.jsx";
import Government from "./components/Industries/Government.jsx";
import Healthcare from "./components/Industries/Healthcare.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";

import Professionaltraining from "./components/Offerings/Professional-training.jsx";
import Agile from "./components/Offerings/Agile.jsx";
import Consulting from "./components/Offerings/Consulting.jsx";
import Portfolio from "./components/Offerings/Portfolio.jsx";
import Risk from "./components/Offerings/Risk.jsx";
import Analysis from "./components/Offerings/Analysis.jsx";

import CAPM from "./components/Certifications/CAPM.jsx";
import PMP from "./components/Certifications/PMP.jsx";
import PgMP from "./components/Certifications/PgMP.jsx";
import PfMP from "./components/Certifications/PfMP.jsx";
import PMIACP from "./components/Certifications/PMI-ACP.jsx";
import PMICP from "./components/Certifications/PMI-CP.jsx";
import PMIRMP from "./components/Certifications/PMI-RMP.jsx";
import PMIPBA from "./components/Certifications/PMI-PBA.jsx";
import PMISP from "./components/Certifications/PMI-SP.jsx";
import GPMb from "./components/Certifications/GPM-b.jsx";
import PMIPMOCP from "./components/Certifications/PMI-PMOCP.jsx";
import PMICPMAI from "./components/Certifications/PMI-CPMAI.jsx";

import PageScroll from "./components/ScrollToTop/Pagescroll.jsx";
import CookieNotice from "./components/Cookies/Cookies.jsx";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <CookieNotice />
      <PageScroll />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* {ABOUT} */}
        <Route path="/about" element={<About />} />

        {/* OFFERINGS */}
        <Route
          path="/offerings/professional-training-and-certification"
          element={<Professionaltraining />}
        />
        <Route
          path="/offerings/consulting-and-organizational-transformation"
          element={<Consulting />}
        />
        <Route
          path="/offerings/portfolio-pmo-and-governance-excellence"
          element={<Portfolio />}
        />
        <Route
          path="/offerings/agile-and-adaptive-delivery-excellence"
          element={<Agile />}
        />
        <Route
          path="/offerings/risk-compliance-and-assurance"
          element={<Risk />}
        />
        <Route
          path="/offerings/business-analysis-and-requirements-gathering"
          element={<Analysis />}
        />

        {/* {CERTIFICATIONS} */}
        <Route path="/certifications/capm" element={<CAPM />} />
        <Route path="/certifications/pmp" element={<PMP />} />
        <Route path="/certifications/pgmp" element={<PgMP />} />
        <Route path="/certifications/pfmp" element={<PfMP />} />
        <Route path="/certifications/pmi-acp" element={<PMIACP />} />
        <Route path="/certifications/pmi-rmp" element={<PMIRMP />} />
        <Route path="/certifications/pmi-pba" element={<PMIPBA />} />
        <Route path="/certifications/pmi-sp" element={<PMISP />} />
        <Route path="/certifications/gpm-b" element={<GPMb />} />
        <Route path="/certifications/pmi-pmocp" element={<PMIPMOCP />} />
        <Route path="/certifications/pmi-cpmai" element={<PMICPMAI />} />
        <Route path="/certifications/pmi-cp" element={<PMICP />} />

        {/* INDUSTRIES */}
        <Route path="/industries/banking-and-finance" element={<Banking />} />
        <Route
          path="/industries/telecommunications"
          element={<Telecommunications />}
        />
        <Route path="/industries/ngos" element={<Ngos />} />
        <Route path="/industries/government" element={<Government />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />

        {/* CONTACT */}
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
      <LiveChat />
      <Scroll />
    </div>
  );
}

export default App;
