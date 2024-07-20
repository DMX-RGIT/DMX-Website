import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./pages/AboutUs";
import { Events } from "./pages/Events";
import { Ourteam } from "./pages/Ourteam";
import { Home } from "./pages/Home";
import { Footer2 } from "./components/Footer2";
import { TeamComponent } from "./components/TeamComponent";
import { Event1 } from "./components/Event1";
import { OurTeamComponent } from "./components/OurTeamComponent";
import { ImageComponent } from "./components/ImageComponent";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>

    <Hero/>
      {/* <Router>
     
outer>
        <Navbar />
       

        <br />
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ourteam" element={<Ourteam />} />
        </Routes>
        <Footer />
      </Router> */}

      {/* <TeamComponent /> */}
      {/* <OurTeamComponent /> */}
      {/* <Event1 /> */}
      {/* <ImageComponent /> */}
    </>
  );
}

export default App;
