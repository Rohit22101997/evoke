import React from 'react';
import { Pacifico } from 'next/font/google';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-neutral-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Absolute positioned "blah" text for decorative effect */}
      <div
        // ➡️ Change: Adjusted from -right-20 to -right-16 for a minor shift to the left
        className="absolute right-30 top-1/2 -translate-y-1/2 transform -rotate-12 text-orange-500 opacity-100 pointer-events-none z-0" 
        style={{ fontSize: '20rem', fontFamily: 'pacifico, sans-serif', lineHeight: '1' }}
      >
        evoke
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Section - Main Headline */}
        <div className="text-left py-8 lg:py-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-4">
            Where creativity <br />
            meets business growth. <br />
            <span className="font-serif italic font-normal">Design that speaks.</span>
          </h1>
        </div>

        {/* Right Section - Descriptive Text */}
        {/* ⬆️ Change: Added -mt-6 for a minor shift upward */}
        <div className="flex justify-end lg:justify-start py-8 lg:py-10 -mt-6"> 
          <p className="">
           We create high-impact websites and premium graphic designs that strengthen your brand identity and help you dominate the digital space. Expect clean visuals, strong storytelling, and designs tailored to your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;