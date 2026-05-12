import { Route, Routes } from "react-router-dom";
import LiveChat from '../src/components/Livechat/Livechat.jsx';
import Scroll from "../src/components/ScrollToTop/Scroll.jsx";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Homepage/Home.jsx";
import Fintech from "./components/Industries/Fintech.jsx";
import Health from "./components/Industries/Health.jsx";
import Insurance from "./components/Industries/Insurance.jsx";
import Telecom from "./components/Industries/Telecom.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UI from "./components/Services/PMPTraining.jsx";
import Agile from "./components/Services/agile.jsx";
import PMConsulting from "./components/Services/PMConsulting.jsx";
import CorpoPMI from "./components/Services/CorpoPMI.jsx";
import Capm from "./components/Services/capm.jsx";
import Web from "./components/Services/web.jsx";
import PageScroll from "./components/ScrollToTop/Pagescroll.jsx";

function App() {
  return (
    <div className="App App overflow-x-hidden">
      <Navbar />

      <PageScroll />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/offerings/pmp-training" element={<UI />} />
        <Route exact path="/offerings/consulting" element={<PMConsulting />}/>
        <Route exact path="/offerings/corporate-training" element={<CorpoPMI />} />
        <Route exact path="/offerings/web-and-app-development" element={<Web />}/>
        <Route exact path="/offerings/agile-and-scrum" element={<Agile />}/>
        <Route exact path="/offerings/capm-training" element={<Capm />}/> 
        <Route exact path="/industries/health-care" element={<Health />} />
        <Route exact path="/industries/fintech" element={<Fintech />} />
        <Route exact path="/industries/insurance" element={<Insurance />} />
        <Route exact path="/industries/telecom" element={<Telecom />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
      <LiveChat />
      <Scroll />
    </div>
  );
}

export default App;
