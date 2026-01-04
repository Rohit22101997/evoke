// components/MarketingLeaderSection.jsx
"user client";
import React from 'react';
import Link from 'next/link'; // For Next.js Link component

const MarketingLeaderSection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-20 min-h-screen bg-white">
      {/* Left Section: Image with Overlay */}
      <div className="relative w-full lg:w-1/2 bg-gray-200 min-h-[400px] lg:min-h-screen">
        {/* Background Image */}
        {/* Replace with your image URL. Using a placeholder for now. */}
        <img
          src="/Images/Sectionhistory31.jpg"
          alt="Man with digital overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Semi-transparent overlay to achieve the slightly muted/filtered look */}
        <div className="absolute inset-0 bg-black opacity-30"></div> 
        
        {/* Digital Overlay Graphics (simplified) */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
          {/* Example of a digital element, you'd add more SVGs or styled divs here */}
          <div className="absolute top-8 left-8 w-20 h-2 bg-white opacity-20 transform -rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white opacity-20"></div>

          
          <div className="flex items-center text-sm opacity-80">
            {/* Example for a map icon - could be an actual SVG */}
            
           
          </div>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          We’re Shaping the Future of Marketing
        </h2>
        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          Evoke Digital was built on a vision to redefine how brands connect with the world. Over the years, 
          we’ve grown into a powerhouse of creativity and strategy — bringing together exceptional talent, 
          cutting-edge technology, and data-driven insights to deliver meaningful impact for our clients.

          Today, our team continues to push boundaries, crafting bold ideas and powerful campaigns that drive 
          real results. With a strong global perspective and a passion for innovation, Evoke Digital stands 
          as a trusted partner for brands ready to lead the future.
        </p>
        
        
      </div>
    </div>
  );
};

export default MarketingLeaderSection;