// components/CompetitiveEdgeSection.jsx
import React from 'react';

const CompetitiveEdgeSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
          Innovative <span className="text-orange-600">Strategies</span> <br className="hidden md:block"/> for a <span className="text-orange-600">Competitive Edge</span>
        </h1>

        {/* Description and Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-4xl">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-0 md:pr-8 max-w-xl">
            We are here to help your business grow with well-planned strategies,
            innovative solutions, and precise execution. Together, let's turn your
            business vision into real success.
          </p>
          <button className="bg-orange-600  hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center min-w-[150px]">
            Learn More
            {/* Simple arrow icon */}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;