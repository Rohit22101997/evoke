"use client";
import React from 'react';

export default function Herogd() {
  return (



<section className="relative bg-black text-white md:h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background elements - subtle stars/light rays */}
  <div className="absolute inset-0 z-0">
    {/* You can add a background image here or use CSS for subtle patterns */}
    <div className="absolute inset-0  bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("/Images/bannnergd.jpg")' }}></div>
    {/* Example of subtle light rays/gradient effect */}
    
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    {/* Solutions Link */}
    <div className="mb-8">
      
    </div>

    {/* Main Headline */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
      From Concept to Creation <br className="hidden sm:inline" />
      <span className="text-orange-500">We Design It All</span>
    </h1>

    {/* Sub-headline / Description */}
    <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      We blend creativity with marketing strategy to craft visuals that not only look beautiful but drive measurable business results.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="/download-app"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out"
      >
        Connect with us
      </a>
      <a
        href="/talk-to-sales"
        className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-100 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
      >
        Our Portfolio
      </a>
    </div>
  </div>
</section>

)
}
