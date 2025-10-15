// components/AboutUsSection.jsx
import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2 bg-black overflow-hidden flex items-center justify-center">
          {/* A dark overlay for the top-left corner as seen in the original image */}
         
          
          {/* Main image with blur effect */}
          <div className="relative w-full h-full">
            <Image
              src="/Images/historys5.jpg" // Replace with your image path
              alt="Business people walking"
              layout="fill"
              objectFit="cover"
              className="filter grayscale blur-sm lg:blur-none opacity-80" // Adjust blur and opacity as needed
            />
            {/* A semi-transparent overlay to match the original's monochrome look */}
            <div className="absolute inset-0 bg-black opacity-30"></div> 
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 bg-orange-600 p-8 md:p-16 flex flex-col justify-center text-white">
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-sm uppercase tracking-widest mb-2 opacity-80">EVOKE DIGITAL</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Innovative Digital Solutions to Accelerate Your Online Business Growth.
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90">
              We are an agency that helps brands grow through innovative solutions and effective marketing strategies.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 text-center lg:text-left">
              <div>
                <p className="text-3xl md:text-4xl font-bold">1K+</p>
                <p className="text-sm uppercase tracking-wider opacity-80 mt-1">Project Complete</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">5+</p>
                <p className="text-sm uppercase tracking-wider opacity-80 mt-1">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">1K</p>
                <p className="text-sm uppercase tracking-wider opacity-80 mt-1">Customer Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;