"use client";
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroBanner = () => {
  const backgroundImageUrl = "/Images/Heropm.webp";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d0c3d] font-['Inter']">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a20] via-transparent to-[#0a0a20] opacity-90"></div>
      </div>

      {/* MAIN CARD — fully responsive */}
      <div
        className="
          absolute z-10
          left-4 right-4 bottom-6 
          sm:left-8 sm:bottom-10 
          md:left-10 md:max-w-3xl
      
          w-auto 
          p-4 sm:p-6 md:p-8
          rounded-3xl shadow-2xl backdrop-blur-xl 
          bg-white/5 border border-white/10
        "
      >
        {/* Title */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-extrabold text-white 
            leading-snug sm:leading-tight 
            tracking-tight mb-3 sm:mb-4 
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
          "
        >
          Transform Your Performance with Unforgettable Digital Experiences
        </h1>

        {/* Paragraph */}
        <p
          className="
            text-sm sm:text-base md:text-lg 
            text-gray-200 opacity-80 
            max-w-xl md:max-w-2xl 
            mb-6 sm:mb-8
          "
        >
          Your visuals are stunning. Now, make them perform. We combine 
          high-impact creative with cutting-edge technical execution to deliver 
          exceptional marketing results.
        </p>

        {/* CTA Button */}
        <button
          className="
            inline-flex items-center justify-center 
            px-5 py-2 sm:px-6 sm:py-3 
            text-xs sm:text-sm md:text-base font-semibold 
            text-white bg-transparent border-2 border-white/40 
            rounded-full shadow-lg transition-all duration-300 ease-in-out
            hover:bg-white/10 hover:border-white hover:scale-[1.03]
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50
          "
        >
          Launch Faster. Convert Higher
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a20] to-transparent pointer-events-none"></div>
    </div>
  );
};

const App = () => {
  return <HeroBanner />;
};

export default App;
