import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Homepage/Home.jsx"
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/technologies' element={<Technologies/>} />
          <Route exact path='/contact-us' element={<Contact/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
