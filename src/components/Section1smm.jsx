// components/CreativeProjectsSection.jsx
import React from 'react';

const CreativeProjectsSection = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">Revolutionize Your</p>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Creative Projects with <br /> the Ultimate AI-Powered
            <span className="block mt-4 text-purple-600">Pattern</span>
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
              START GENERATING
            </button>
            <p className="text-lg text-gray-600">The Next generation <br /> Production for Designers</p>
          </div>
        </div>
        {/* Abstract background elements - you might want to replace these with actual SVG or more complex shapes */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-50 blur-3xl" style={{ transform: 'translateZ(0)' }}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gray-50 rounded-full opacity-40 blur-3xl" style={{ transform: 'translateZ(0)' }}></div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-16">
        {/* Card 1 */}
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-80 flex flex-col justify-end p-6">
          <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 font-bold text-sm">01</div>
          {/* Placeholder for image - you'd replace this with an actual image */}
          <div className="absolute inset-0 z-0 opacity-75">
            <img src="https://via.placeholder.com/400x300/f0f4f8/888888?text=Placeholder" alt="Learn" className="object-cover w-full h-full" />
          </div>
          <div className="relative z-10 mt-auto">
            <p className="text-white text-sm">Learn from best mentors</p>
            <button className="mt-2 text-white border border-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-colors">
              START LEARNING
            </button>
            <div className="absolute bottom-4 right-4 text-white text-2xl font-bold"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-sm overflow-hidden h-80 p-6 flex flex-col justify-between">
          <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center border border-white rounded-full text-white font-bold text-sm">02</div>
          <div className="flex-grow flex items-center justify-center relative">
            {/* Abstract 3D shape - This is a conceptual representation */}
            <div className="absolute w-40 h-40 bg-white opacity-20 transform rotate-45 skew-x-12 skew-y-6" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
          <div className="relative z-10 text-white">
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-lg">Free Edit <span className="text-xl">&gt;</span></li>
              <li className="flex justify-between items-center text-lg">Interactive <span className="text-xl">&gt;</span></li>
              <li className="flex justify-between items-center text-lg">Easy Interface <span className="text-xl">&gt;</span></li>
              <li className="flex justify-between items-center text-lg">Compare to other <span className="text-xl">&gt;</span></li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gradient-to-br from-blue-300 via-purple-400 to-pink-500 rounded-lg shadow-sm overflow-hidden h-80 p-6 flex flex-col justify-center items-center text-white">
          <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center border border-white rounded-full text-white font-bold text-sm">03</div>
          <div className="text-center relative z-10">
            <p className="text-6xl font-extrabold">+20K</p>
            <p className="mt-2 text-lg">Glass Pattern generated this <br /> week in the first release.</p>
          </div>
          {/* Abstract wavy pattern - This is a conceptual representation */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path fill="url(#gradient-wave)" d="M0,70 Q25,80 50,70 T100,70 L100,100 L0,100 Z" />
              <path fill="url(#gradient-wave-2)" d="M0,60 Q20,50 40,60 T80,50 T100,60 L100,100 L0,100 Z" />
              <defs>
                <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'rgba(255,255,255,0.2)'}} />
                  <stop offset="100%" style={{stopColor:'rgba(255,255,255,0.5)'}} />
                </linearGradient>
                <linearGradient id="gradient-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'rgba(255,255,255,0.1)'}} />
                  <stop offset="100%" style={{stopColor:'rgba(255,255,255,0.4)'}} />
                </linearGradient>
                </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeProjectsSection;