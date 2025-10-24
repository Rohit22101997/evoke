// components/HeroTextSection.js
import React from 'react';

export default function HeroTextSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* Left side: Abstract logo/shape */}
      {/* This is a simple SVG to mimic the shape from the image. 
          For a real scenario, you'd use your actual logo SVG or an image. */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
      <img
        src="/Images/s8ow.jpg"
        alt="Abstract geometric logo"
       
      />
      </div>

      {/* Right side: Text content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
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