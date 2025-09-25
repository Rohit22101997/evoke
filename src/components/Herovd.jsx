// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/Images/Herovd.jpg")',
            filter: 'brightness(0.6)',
          }}
        ></div>

        {/* Darker black→transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        {/* ↑ from-black/90 = 90% opaque black */}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16 lg:px-24">
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Turning Videos to a Cinematic Masterpiece
          </h1>
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
