import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Homepage/Home.jsx"
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Technologies from './components/Technologies/Technologies';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Industries from './components/Industries/Industries';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/technologies' element={<Technologies/>} />
          <Route exact path='/contact-us' element={<Contact/>} />
          <Route exact path='/services' element={<Services/>} />
              <Route exact path='/services/ui-ux-design' element={<Services/>} />
              <Route exact path='/services/discovery-workshop' element={<Services/>} />
              <Route exact path='/services/iot-development' element={<Services/>} />
              <Route exact path='/services/web-and-app-development' element={<Services/>} />
              <Route exact path='/services/custom-software-development' element={<Services/>} />
              <Route exact path='/services/support-and-maintenance' element={<Services/>} />
          <Route exact path='/portfolio' element={<Portfolio/>} />
          <Route exact path='/industries' element={<Industries/>} />
              <Route exact path='/industries/health-care' element={<Industries/>} />
              <Route exact path='/industries/fintech' element={<Industries/>} />
              <Route exact path='/industries/insurance' element={<Industries/>} />
              <Route exact path='/industries/telecom' element={<Industries/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
