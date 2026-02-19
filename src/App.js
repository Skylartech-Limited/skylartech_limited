import { Route, Routes } from "react-router-dom";
import LiveChat from '../src/components/Livechat/Livechat.jsx';
import Scroll from "../src/components/ScrollToTop/Scroll.jsx";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Footerhero from "./components/Footerhero/footerhero.jsx";
import Home from "./components/Homepage/Home.jsx";
import Fintech from "./components/Industries/Fintech.jsx";
import Health from "./components/Industries/Health.jsx";
import Insurance from "./components/Industries/Insurance.jsx";
import Telecom from "./components/Industries/Telecom.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Portfolio from "./components/Portfolio/Portfolio";
import Quote from "./components/Quote/Quote.jsx";
import Services from "./components/Services/Services";
import Training from "./components/Services/Training.jsx";
import Custom from "./components/Services/custom.jsx";
import Software from "./components/Services/Software.jsx";
import IOT from "./components/Services/iot.jsx";
import Support from "./components/Services/support.jsx";
import Web from "./components/Services/web.jsx";
import Projects from "./components/Projects/projects.jsx";

function App() {
  return (
    <div className="App App overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/training-and-certifications" element={<Training />} />
        <Route exact path="/services/software-engineering" element={<Software/>}/>
        <Route exact path="/services/iot-development" element={<IOT />} />
        <Route exact path="/services/web-and-app-development" element={<Web />}/>
        <Route exact path="/services/custom-software-development" element={<Custom />}/>
        <Route exact path="/services/support-and-maintenance" element={<Support />}/> 
        <Route exact path="/projects" element={<Projects />} />
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
      <LiveChat />
      <Scroll />
    </div>
  );
}

export default App;
