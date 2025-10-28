"use client";
import React from 'react';

export default function Herogd() {
  return (



<section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background elements - subtle stars/light rays */}
  <div className="absolute inset-0 z-0">
    {/* You can add a background image here or use CSS for subtle patterns */}
    <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/path-to-your-subtle-star-background.jpg")' }}></div>
    {/* Example of subtle light rays/gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-black opacity-50"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    {/* Solutions Link */}
    <div className="mb-8">
      <a href="/solutions" className="inline-flex items-center text-orange-500 hover:text-orange-400 text-sm font-medium">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Solutions
      </a>
    </div>

    {/* Main Headline */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
      Transform Your Data Into <br className="hidden sm:inline" />
      <span className="text-orange-500">Actionable Solutions</span>
    </h1>

    {/* Sub-headline / Description */}
    <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      Unlock the powerful potential of your data with our suite of analytics tools
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="/download-app"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out"
      >
        Download app
      </a>
      <a
        href="/talk-to-sales"
        className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-100 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
      >
        Talk to sales
      </a>
    </div>
  </div>
</section>

)
}
