"user client"
import Image from 'next/image'; // Assuming next/image is used for optimized images
import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl w-full"> {/* Container to limit width and center content */}
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-tight">
              Your Future, Our Mission
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Exceeding Standards in Elite Construction
            </p>
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News Card (Large Image) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden relative">
            <div className="w-full h-64 md:h-96 relative">
             <Image
  src="/Images/cr1.jpg"
  alt="Modern buildings"
  // 1. Replaced layout="fill" with the prop `fill`
  fill={true}
  // 2. Replaced objectFit="cover" with the Tailwind class `object-cover`
  className="brightness-75 object-cover"
  // Removed deprecated layout and objectFit props
/>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="flex-1">
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full font-semibold">NEWS</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-3">
                    Leaders in elite construction
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 max-w-md">
                    Our services: architecture, interior design, construction, renovation, and property maintenance.
                  </p>
                </div>
                <button className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Stat Card 1: Total Units */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between">
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">34</span>
                <p className="text-sm text-gray-600 mt-1 uppercase tracking-wider">Total Units</p>
              </div>
              <button className="bg-gray-100 text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stat Card 2: M2 to Built */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between">
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">49K</span>
                <p className="text-sm text-gray-600 mt-1 uppercase tracking-wider">M2 to Built</p>
              </div>
              <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold">RELIABLE</div> {/* "RELIABLE" badge */}
            </div>

            {/* Stat Card 3: Portfolio Value */}
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white">256M</span>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Portfolio Value ($)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;