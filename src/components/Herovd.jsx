import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/Images/Herovd.webp")',
            filter: "brightness(0.6)",
          }}
        />
        {/* Black → transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-4 sm:px-8 md:px-16 lg:px-10 py-16 sm:py-20 md:py-0">
        <div className="max-w-2xl text-center ms-10 md:text-left mt-0 sm:mt-4 lg:mt-52">
          <h1
            className="font-extrabold text-white leading-tight mb-2 sm:mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.2rem)",
            }}
          >
            Turning Videos to a Cinematic Masterpiece
          </h1>
          <button className="mt-1 sm:mt-3 px-6 py-3 bg-orange-500 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-orange-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
