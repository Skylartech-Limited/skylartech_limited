import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Homepage/Home.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
