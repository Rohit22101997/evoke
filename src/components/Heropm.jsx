"use client";
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const backgroundImageUrl = "/Images/Heropm.webp";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d0c3d] font-['Inter']">

      {/* background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a20] via-transparent to-[#0a0a20] opacity-90"></div>
      </div>

      {/* ⭐ MAIN CARD — MOVED TO BOTTOM LEFT + MADE SMALLER */}
      <div className="absolute bottom-10 left-10 z-10 
                      w-full max-w-3xl 
                      p-4 sm:p-6 md:p-8 
                      rounded-3xl shadow-2xl backdrop-blur-xl 
                      bg-white/5 border border-white/10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white 
                       leading-tight tracking-tight mb-4 drop-shadow-lg">
          Transform Your Performance with Unforgettable Digital Experiences
        </h1>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-8 opacity-80">
          Your visuals are stunning. Now, make them perform. We combine high-impact creative with cutting-edge technical execution to deliver exceptional marketing results
        </p>

        <button 
          className="inline-flex items-center justify-center px-6 py-2 
                     text-sm sm:text-base font-semibold 
                     text-white bg-transparent border-2 border-white/40 rounded-full 
                     shadow-lg transition-all duration-300 ease-in-out 
                     hover:bg-white/10 hover:border-white hover:scale-[1.03]
                     focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
        >
          
          Launch Faster. Convert Higher
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a20] to-transparent pointer-events-none"></div>
    </div>
  );
};

const App = () => {
  return <HeroBanner />;
};

export default App;
