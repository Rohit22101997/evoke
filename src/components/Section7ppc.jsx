// components/MarketingSection.jsx
"User client";
import React from 'react';

const MarketingSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 overflow-hidden">
        {/* Placeholder for an image or dynamic content */}
        <img
          src="/Images/ppc8.jpg" // Replace with your image path
          alt="Modern building and people walking"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative z-10 p-8 lg:p-12">
          {/* You can add content here if needed over the image */}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-2/3 p-8 lg:p-16 flex flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest mb-4 text-gray-400">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Innovative Digital Solutions to Accelerate Your Online Business Growth.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We are an agency that drives growth through innovative solutions and effective marketing strategies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-0">
          <div>
            <p className="text-5xl font-bold text-white">5K+</p>
            <p className="text-md uppercase tracking-wide text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">3</p>
            <p className="text-md uppercase tracking-wide text-gray-400 mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">2K</p>
            <p className="text-md uppercase tracking-wide text-gray-400 mt-2">Customer Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;