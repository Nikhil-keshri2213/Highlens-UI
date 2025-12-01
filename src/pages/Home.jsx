import React from "react";
import Beams from "../background/Beams";
import LandingPage from "../components/HomeSection/LandingPage";
import IntroSection from "../components/HomeSection/IntroSection";
import Features from "../components/HomeSection/Features";
import Footer from "../components/Footer/Footer";
import "../style/home.css"

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-y-auto">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2.5}
          noiseIntensity={2}
          scale={0.3}
          rotation={30}
        />
      </div>

      {/* SCROLLING CONTENT */}
      <div className="relative z-10 flex flex-col opacity-0 animate-fadeIn">
        <LandingPage />
        <IntroSection />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Home;