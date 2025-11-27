// components/ComprehensiveStrategySection.jsx
import React from 'react';

const ComprehensiveStrategySection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 lg:mb-20">
          <p className="text-sm uppercase tracking-widest text-blue-500 mb-2">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
            Comprehensive Strategy Services for Every Stage of Growth
          </h1>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
            All Service <span className="ml-2">&rarr;</span>
          </button>
        </div>

        {/* Services Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Strategy (Dark Background) */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 min-h-[400px]">
            <div>
              <p className="text-6xl font-extrabold text-gray-700 mb-8">01</p>
              <h2 className="text-3xl font-bold mb-4">Strategy</h2>
              <p className="text-gray-300">
                We craft tailored strategies to accelerate your business growth by identifying
                opportunities, minimizing risks, and optimizing resources.
              </p>
            </div>
            <div className="flex justify-end mt-8">
              <button className="bg-orange-500 hover:bg-blue-700 p-3 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Analysis & Insights (Blue Background) */}
          <div className="bg-orange-500 p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 min-h-[400px]">
            <div>
              <p className="text-6xl font-extrabold text-orange-400 mb-8">02</p>
              <h2 className="text-3xl font-bold mb-4">Analysis & Insights</h2>
              <p className="text-blue-100">
                Our data-driven analysis provides actionable insights to help you understand
                trends, customer behavior, and competitive landscapes.
              </p>
            </div>
            <div className="flex justify-end mt-8">
              {/* Icon placeholder for this card */}
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Digital Presence (Blue Background) */}
          <div className="bg-orange-500 p-8 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 min-h-[400px]">
            <div>
              <p className="text-6xl font-extrabold text-orange-400 mb-8">03</p>
              <h2 className="text-3xl font-bold mb-4">Digital Presence</h2>
              <p className="text-blue-100">
                From branding to online marketing, we create powerful branding strategies and
                digital solutions to strengthen your market position.
              </p>
            </div>
            <div className="flex justify-end mt-8">
              {/* Icon placeholder for this card */}
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-1-3m-6.963-3A9 9 0 0112 3c4.142 0 7.625 2.617 8.913 6.202M12 17c-4.142 0-7.625-2.617-8.913-6.202M3 10h18"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveStrategySection;