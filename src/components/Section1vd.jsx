// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm Mark, a professional video editor & film maker
          </h1>
        </div>

        {/* Right Section */}
        <div className="text-left space-y-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md shadow-lg transition duration-300 ease-in-out">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
