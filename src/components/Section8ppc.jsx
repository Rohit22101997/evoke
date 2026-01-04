// components/CallToActionSection.jsx
import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
          Innovative <span className="text-orange-500">Strategies</span> <br className="hidden sm:inline" />
          for a <span className="text-orange-500">Competitive Edge</span>
        </h1>
        <p className="text-3xl py-5 text-gray-700 max-w-4xl mb-10">
          We are here to help your business grow with well-planned strategies,
          innovative solutions, and precise execution. Together, let's turn your
          business vision into real success.
        </p>
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
          Learn More &rarr;
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;