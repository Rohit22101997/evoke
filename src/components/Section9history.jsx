// components/MarketingLeaderSection.jsx
"use client";
import React from "react";
import Link from "next/link"; // For Next.js Link component

const MarketingLeaderSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-white">
      {/* Right Section: Image with Overlay (now moved to the right) */}
      <div className="relative w-full lg:w-1/2 bg-gray-200 min-h-[400px] lg:min-h-screen">
        <img
          src="/Images/Sectionhistory32.jpg"
          alt="Man with digital overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Digital Overlay Graphics */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
          <div className="absolute top-8 left-8 w-20 h-2 bg-white opacity-20 transform -rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white opacity-20"></div>
        </div>
      </div>

      {/* Left Section: Text Content (swapped from right) */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Global Vision, Bold Journey
        </h2>
        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          Evoke Digital began with a mission to redefine how brands grow in the digital era. 
          From a small team to a global force, we’ve helped businesses expand their reach, 
          build powerful identities, and create lasting impact through creativity, strategy, 
          and innovation. Our journey is just beginning.
          <br /><br />
          Driven by creativity and technology, we’ve built a strong international presence that 
          connects brands with audiences worldwide. Our commitment to innovation, collaboration, 
          and measurable results has made us a trusted partner for businesses ready to grow, lead, 
          and make a global impact.
        </p>
      </div>
    </div>
  );
};

export default MarketingLeaderSection;
