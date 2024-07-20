import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./pages/AboutUs";
import { Events } from "./pages/Events";
import { Ourteam } from "./pages/Ourteam";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ourteam" element={<Ourteam />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
