// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-orange-600 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white p-8 max-w-5xl mx-auto">
        <div className="relative text-left leading-none">
          <span className="text-lime-400 text-6xl md:text-8xl font-extrabold absolute -top-12 -left-8 md:-top-16 md:-left-12 transform -rotate-6">#</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase mt-12 md:mt-16 tracking-tight">
            SOCIAL <br /> MEDIA <br /> Marketing
          </h1>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-8 z-20">
          <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-4 w-48 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-300 ease-in-out">
            <div className="relative w-full h-32 bg-gray-300 rounded-xl overflow-hidden mb-2">
              {/* This would be an actual image in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Avatar 1</span>
              </div>
            </div>
            <p className="text-white text-sm font-semibold">dwarf.eth</p>
            <p className="text-white text-xs opacity-80">23,452 points</p>
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">💎</div>
          </div>

          <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-4 w-48 shadow-lg transform -rotate-12 hover:-rotate-9 transition-transform duration-300 ease-in-out mt-16 md:mt-24">
            <div className="relative w-full h-32 bg-gray-300 rounded-xl overflow-hidden mb-2">
              {/* This would be an actual image in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Avatar 2</span>
              </div>
            </div>
            <p className="text-white text-sm font-semibold">boredclub.eth</p>
            <p className="text-white text-xs opacity-80">23,452 points</p>
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">⭐</div>
          </div>
        </div>

        {/* "Get Started" Button */}
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-30">
          <div className="relative w-32 h-32 bg-lime-400 rounded-full flex items-center justify-center text-center p-4 shadow-xl transform rotate-12 hover:rotate-9 transition-transform duration-300 ease-in-out">
            <p className="text-blue-800 text-sm font-bold uppercase leading-tight">Get Started <br/> Up Free</p>
            {/* The curved arrows would typically be an SVG or image, simplified here */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-800 text-6xl opacity-20 transform rotate-45">⤾</span>
            </div>
          </div>
        </div>

        {/* Arrows/Swirls (Simplified) */}
        <div className="absolute bottom-1/4 left-1/4 z-10 text-lime-400 text-8xl opacity-70 transform -rotate-45">⤸</div>
        <div className="absolute top-1/4 right-1/4 z-10 text-lime-400 text-8xl opacity-70 transform rotate-45">⤸</div>

      </div>
    </div>
  );
};

export default Hero;