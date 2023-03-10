import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import AOS from "aos";

import "aos/dist/aos.css";
import "./App.css";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

const App = () => {
  AOS.init({
    duration: 4000,
    once: true,
    mirror: false,
  });
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
