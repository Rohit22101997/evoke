// components/AchievementsImpactSection.jsx
import React from 'react';
import Image from 'next/image';

const AchievementsImpactSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Card 1: Explore Business */}
        <div className="absolute top-0 left-0 w-[calc(50%-1rem)] md:w-1/3 lg:w-1/4 h-[350px] bg-orange-900 text-white p-8 flex flex-col justify-between rounded-lg shadow-lg z-10">
          <div>
            {/* Placeholder icon */}
            <div className="mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L10 13.414l2.707-2.707a1 1 0 00-1.414-1.414L10 10.586l-1.293-1.293z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-4">
              Explore Business <br />to Achieve More
            </h2>
          </div>
          <button className="flex items-center text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200">
            Explore Now
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* Card 2: Ready to Make an Impact */}
        <div className="absolute top-0 left-[30%] w-[calc(50%-1rem)] md:w-1/3 lg:w-1/4 h-[350px] bg-orange-900 text-white p-8 flex flex-col justify-between rounded-lg shadow-lg z-20 transform -translate-x-1/2 md:translate-x-0">
          <div>
            {/* Placeholder icon */}
            <div className="mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11 2a1 1 0 00-1 1v1a1 1 0 102 0V3a1 1 0 00-1-1zm3 1a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm-7 0a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM7 7a1 1 0 011 1v1a1 1 0 11-2 0V8a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0V8a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0V8a1 1 0 011-1zm-7 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-7 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-4">
              Ready to Make an Impact? Let's Create Something Amazing!
            </h2>
          </div>
          <button className="flex items-center text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200">
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* Card 3: Image Card */}
        <div className="absolute top-0  left-1/2 w-[60%] md:w-[40%] h-[400px] md:h-[350px] bg-orange-200 rounded-lg shadow-lg overflow-hidden z-30 transform -translate-x-1/2">
          <Image
            src="/Images/history6.jpg" // Replace with your image path
            alt="Modern building architecture"
            layout="fill"
            objectFit="cover"
            className="orangescale"
          />
        </div>

        {/* Card 4: Testimonial Card */}
        <div className="absolute top-0 right-0 w-[calc(50%-1rem)] md:w-1/3 lg:w-1/4 h-[300px] bg-orange-900 text-white p-6 flex flex-col justify-between rounded-lg shadow-lg z-40 transform translate-x-1/4 md:translate-x-0">
          <div>
            <div className="flex items-center mb-4">
              {/* Profile Picture Placeholder */}
              <div className="w-8 h-8 rounded-full bg-orange-500 mr-2 flex items-center justify-center text-xs font-bold">
                RH
              </div>
              <span className="text-sm font-medium">RH</span>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Their expertise helped us achieve real growth. Highly recommended!
            </p>
          </div>
          <div>
            <p className="text-xs opacity-70">CEO, Agency</p>
            <p className="text-sm font-medium">Alexander Harald</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsImpactSection;