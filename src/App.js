import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Homepage/Home.jsx";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import Health from "./components/Industries/Health.jsx";
import Fintech from "./components/Industries/Fintech.jsx";
import Telecom from "./components/Industries/Telecom.jsx";
import Insurance from "./components/Industries/Insurance.jsx";
import Portfolio from "./components/Portfolio/Portfolio";
import Quote from "./components/Quote/Quote.jsx";
import Footerhero from "./components/Footerhero/footerhero.jsx";
import UI from "./components/Services/Uidesign.jsx";
import Discovery from "./components/Services/discovery.jsx";
import IOT from "./components/Services/iot.jsx";
import Web from "./components/Services/web.jsx";
import Custom from "./components/Services/custom.jsx";
import Support from "./components/Services/support.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/ui-ux-design" element={<UI />} />
        <Route exact path="/services/discovery-workshop" element={<Discovery />}/>
        <Route exact path="/services/iot-development" element={<IOT />} />
        <Route exact path="/services/web-and-app-development" element={<Web />}/>
        <Route exact path="/services/custom-software-development" element={<Custom />}/>
        <Route exact path="/services/support-and-maintenance" element={<Support />}/> 
        <Route exact path="/technologies" element={<Technologies />} />
        <Route exact path="/industries/health-care" element={<Health />} />
        <Route exact path="/industries/fintech" element={<Fintech />} />
        <Route exact path="/industries/insurance" element={<Insurance />} />
        <Route exact path="/industries/telecom" element={<Telecom />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
      <Footerhero />
      <Footer />
    </div>
  );
}

export default App;
