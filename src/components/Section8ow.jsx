// components/HeroTextSection.js
import React from 'react';

export default function HeroTextSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] bg-gray-50 px-4 sm:px-8 lg:px-16 py-10 md:py-20">
      
      {/* Left side: Image / Abstract Shape */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/Images/s8ow.jpg"
          alt="Abstract geometric logo"
          className="w-3/4 sm:w-2/3 md:w-[80%] lg:w-[70%] h-auto object-contain"
        />
      </div>

      {/* Right side: Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
          Unleashing the
          <br />
          Potential of{' '}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text font-normal">
            Artificial
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-gray-600 text-transparent bg-clip-text font-normal">
            Intelligence
          </span>{' '}
          for
          <br />
          Intelligent Solutions
        </h1>
      </div>
    </section>
  );
}
