// components/CompetitiveEdgeSection.jsx
import React from "react";

const CompetitiveEdgeSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-10">
          Innovative <span className="text-orange-600">Strategies</span>{" "}
          <br className="hidden md:block" />
          for a <span className="text-orange-600">Competitive Edge</span>
        </h1>

        {/* Description + Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            We help your business grow with thoughtful strategies, creative
            solutions, and precise execution. Together, let's turn your vision
            into real success.
          </p>

          {/* Button aligned right on larger screens */}
          <div className="w-full md:w-auto flex md:justify-end">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg">
              Get in Touch
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;
