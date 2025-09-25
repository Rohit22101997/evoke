// components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/Images/Herovd.jpg")',
            filter: "brightness(0.6)",
          }}
        />
        {/* Black → transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl py-20 font-extrabold text-white leading-tight">
            Turning Videos to a Cinematic Masterpiece
          </h1>
          <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
