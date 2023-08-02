import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Profile from "./Components/Profile.js";
import { Routes, Route } from "react-router-dom";
import GoToTop from "./Components/GoToTop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
