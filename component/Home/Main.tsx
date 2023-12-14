import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Main;
