// components/VersatilitySection.jsx
import React from 'react';

const VersatilitySection = () => {
  return (
    <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Image - positioned to fill and cover the right side */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat opacity-60 md:opacity-100" // Adjust opacity if needed
        style={{
          backgroundImage: "url('/Images/Seo9.jpg')", // Ensure this path is correct for your image
          backgroundPosition: '50% 25%', // Adjust position to match the original image
        }}
      ></div>
      {/* Fallback dark overlay for better text readability on some backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content Column */}
        <div className="md:col-span-1 max-w-xl md:pr-12">
          <p className="text-orange-500 text-lg font-semibold mb-3 uppercase tracking-wider">
            Dynamic
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Turning Searches
            <br />
           Into Success.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our SEO solutions are built to adapt seamlessly shifting from technical optimization to creative content strategy with ease. From startups to enterprises, we help brands dominate search results, attract qualified traffic, and convert clicks into customers. Whether it’s keyword research, on-page optimization, link building, or performance tracking, our approach ensures you stay ahead in every digital arena. All while focusing on sustainable growth and measurable results. It’s not just SEO. it’s strategy built to perform.
          </p>
        </div>

        {/* Empty Column for image on md screens and larger.
            The actual image is the background of the section for better control. */}
        <div className="md:col-span-1 hidden md:block">
            {/* This div is intentionally left empty to push the text left and allow the background image to show */}
        </div>
      </div>
    </section>
  );
};

export default VersatilitySection;