import React from "react";
import { RiCameraLensFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 z-50 px-4">
      <div
        className="
          h-[55px]
          w-full max-w-[750px]
          border border-white/30 rounded-full bg-white/10 backdrop-blur-md 
          flex items-center justify-between 
          px-4 sm:px-6 mt-4
          transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]
          hover:bg-white/20">
        
        {/* Logo */}
        <div className="font-bold text-lg text-white flex items-center gap-2 hover:scale-110 transition duration-300">
          <RiCameraLensFill className="text-white text-[26px] sm:text-[30px] transition-transform duration-500 hover:rotate-90" />
          <span className="text-base sm:text-lg">HIGHLENS</span>
        </div>

        {/* Menu Items */}
        <div className="flex gap-4 sm:gap-6 text-sm sm:text-base text-white">
          <p
            className="cursor-pointer hover:scale-110"
            onClick={() => navigate("/")}
          >
            Home
          </p>

          <p
            className="cursor-pointer hover:scale-110"
            onClick={() => navigate("/about")}>
            About
          </p>

          <p
            className="cursor-pointer hover:scale-110"
            onClick={() => navigate("/docs")}>
            Docs
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
