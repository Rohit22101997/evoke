"user client";
// components/CryptoSecurityHero.jsx
import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component

const CryptoSecurityHero = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect - using a div for the gradient waves */}
      <div className="absolute inset-0 z-0 opacity-70">
        {/* This div acts as the container for the background visual,
            for a truly similar effect, you might need a more complex
            SVG, canvas, or video background. For this example, we'll
            simulate it with a gradient overlay. */}
            
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-100 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-700 via-indigo-600 to-yellow-400 opacity-40 blur-2xl animate-pulse-fast delay-1000"></div>
        {/* You would typically use an actual image or a complex CSS animation/SVG for the detailed wave pattern */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/Images/cgis5.png")' }}></div>
        
        {/* NEW: Black to transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white p-8 max-w-6xl mx-auto">
        {/* Small glowing orb at the top left */}
        <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-70 blur-md">
          <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-24 mb-4">
          Your Partner in <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-100">Crypto Security</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Protect your blockchain assets with trusted, top-tier security solutions.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Learn more
        </button>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-32 text-left">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Smart Contract Audits</h3>
            <p className="text-gray-300">Thorough reviews to ensure flawless code.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Threat Monitoring</h3>
            <p className="text-gray-300">Detect and mitigate risks in real time.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Custom Security Solutions</h3>
            <p className="text-gray-300">Tailored protection for your crypto projects.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-300">Trusted by industry leaders worldwide.</p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400 text-sm">
          <span className="mr-4">Trusted by</span>
          {/* Replace with actual SVG logos or Image components for better quality */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white opacity-20"></div>
            <span>Supa Blox</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white opacity-20"></div>
            <span>Frame Blox</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white opacity-20"></div>
            <span>Ultra Blox</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white opacity-20"></div>
            <span>Ship Blox</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSecurityHero;