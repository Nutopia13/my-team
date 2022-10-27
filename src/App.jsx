import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <AnimatePresence  mode={"wait"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
