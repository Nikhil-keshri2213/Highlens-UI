import React from "react";
import { RiCameraLensFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HeaderBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[450px] md:h-screen relative overflow-hidden flex flex-col items-center px-4 sm:px-6">
      {/* Top Header */}
      <div
        className="
          h-[55px]
          w-full max-w-[750px]
          border border-white/30 rounded-full bg-white/10 backdrop-blur-md 
          flex items-center justify-between 
          px-4 sm:px-6 mt-6 sm:mt-10 
          transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]
          hover:bg-white/20
        "
      >
        <div className="font-bold text-lg text-white flex items-center gap-2">
          <RiCameraLensFill className="text-white text-[26px] sm:text-[30px] transition-transform duration-500 hover:rotate-90" />
          <span className="text-base sm:text-lg">HIGHLENS</span>
        </div>

        <div className="flex gap-4 sm:gap-6 text-sm sm:text-base text-white">
          <p
            className="cursor-pointer hover:font-bold"
            onClick={() => navigate("/")}
          >
            Home
          </p>

          <p
            className="cursor-pointer hover:font-bold"
            onClick={() => navigate("/docs")}
          >
            Docs
          </p>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center gap-6 grow mt-10 sm:mt-0">
        <div>
          <div className="text-[36px] sm:text-[50px] text-white font-extrabold">
            HIGHLENS
          </div>

          <div className="text-[16px] sm:text-[20px] text-white font-light max-w-[800px] font-serif px-2">
            A Unified Digital Ecosystem for Photography Services, Learning &
            Marketplace
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto items-center">
          {/* Glow on hover (+ scale) */}
          <button
            className="text-[18px] sm:text-[20px] w-full sm:w-[180px] h-[45px] bg-white rounded-full font-semibold 
            transition-all duration-300 hover:scale-105
            hover:shadow-[0_0_25px_rgba(255,255,255,1)]
            "
          >
            Get Started
          </button>

          <button
            className="text-[18px] sm:text-[20px] w-full sm:w-[180px] h-[45px] border border-white/30 rounded-full 
            text-white/60 bg-white/10 backdrop-blur-md font-semibold 
            transition duration-300 hover:scale-105 
            hover:bg-linear-to-br hover:from-[#355C7D] hover:via-[#6C5B7B] hover:to-[#C06C84] hover:text-white
            hover:shadow-[0_0_25px_rgba(255,255,255,1)]
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
