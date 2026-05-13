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

import UI from "./components/Offerings/PMPTraining.jsx";
import Agile from "./components/Offerings/agile.jsx";
import PMConsulting from "./components/Offerings/PMConsulting.jsx";
import CorpoPMI from "./components/Offerings/CorpoPMI.jsx";
import Capm from "./components/Offerings/capm.jsx";
import Web from "./components/Offerings/web.jsx";

import PageScroll from "./components/ScrollToTop/Pagescroll.jsx";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

      <PageScroll />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SERVICES */}
        <Route path="/offerings/pmp-training" element={<UI />} />
        <Route path="/offerings/consulting" element={<PMConsulting />} />
        <Route path="/offerings/corporate-training" element={<CorpoPMI />} />
        <Route path="/offerings/web-and-app-development" element={<Web />} />
        <Route path="/offerings/agile-and-scrum" element={<Agile />} />
        <Route path="/offerings/capm-training" element={<Capm />} />

        {/* INDUSTRIES */}
        <Route path="/industries/banking-and-finance" element={<Banking />} />
        <Route path="/industries/telecommunications" element={<Telecommunications />} />
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