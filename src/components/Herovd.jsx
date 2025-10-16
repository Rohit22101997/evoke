// components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen bg-gray-900 overflow-hidden">
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
      <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <div className="max-w-2xl text-center md:text-left">
          <h1
            className="font-extrabold text-white py-35 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
            }}
          >
            Turning Videos to a Cinematic Masterpiece
          </h1>
          <button className="mt-2 sm:mt-2 px-6 py-3 bg-orange-500 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-orange-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
