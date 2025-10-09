
"user client";
// components/RCSVHero.jsx
import React from 'react';

const RCSVHero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Background Text - Faded and positioned */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-800 text-opacity-50 font-bold tracking-widest pointer-events-none">
        <span className="text-8xl md:text-[12rem] lg:text-[18rem] uppercase leading-none opacity-20">User Research and Analysis</span>
        <span className="text-8xl md:text-[12rem] lg:text-[18rem] uppercase leading-none mt-[-3rem] opacity-20">Information Architecture</span>
        <span className="text-8xl md:text-[12rem] lg:text-[18rem] uppercase leading-none mt-[-3rem] opacity-20">Wireframing and Prototyping</span>
        <span className="text-8xl md:text-[12rem] lg:text-[18rem] uppercase leading-none mt-[-3rem] opacity-20">Visual Design</span>
      </div>

      {/* Main Content - RCSV and Subtitle */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-8xl md:text-[12rem] lg:text-[18rem] font-bold text-orange-500 uppercase leading-none">
          EVOKE
        </h1>
         <h1 className="text-8xl md:text-[12rem] lg:text-[18rem] font-bold text-white uppercase leading-none">
          DIGITAL
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl font-light text-white mt-4 md:mt-8">
          Unlock Growth, Digitally
        </p>
      </div>

      {/* Decorative Dashed Lines */}
      {/* Top Left Arc */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-t-2 border-l-2 border-dashed border-gray-400 rounded-full rotate-45 opacity-50 z-0"></div>
      {/* Bottom Right Arc */}
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-b-2 border-r-2 border-dashed border-gray-400 rounded-full rotate-45 opacity-50 z-0"></div>

      
    </div>
  );
};

export default RCSVHero;