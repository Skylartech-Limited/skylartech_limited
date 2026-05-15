import { Route, Routes } from "react-router-dom";
import LiveChat from "./components/Livechat/Livechat.jsx";
import Scroll from "./components/ScrollToTop/Scroll.jsx";
import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Homepage/Home.jsx";

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

import PageScroll from "./components/ScrollToTop/Pagescroll.jsx";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

      <PageScroll />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

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
