// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforming Moments into Marketing Power
          </h1>
        </div>

        {/* Right Section */}
        <div className="text-left space-y-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Bring your brand to life with powerful, cinematic video edits that capture attention 
            and drive engagement. From social media reels to corporate films, our editors blend creativity 
            with marketing strategy to deliver videos that convert.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md shadow-lg transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
