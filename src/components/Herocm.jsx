"user client";
// components/Hero.jsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
       
        <Image
          src="/Images/Herocm.avif" // Replace with your image path
          alt="Aerial view of city buildings"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Optional: Overlay for better text readability */}
         <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        aria-hidden="true"
      />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 md:px-24 lg:px-10">
        {/* Main Heading */}
        <h1 className="mb-4 text-6xl font-extrabold uppercase leading-tight text-white md:text-7xl lg:text-7xl">
          Content That  
          <br />
         Builds Trust and
          <br />
          Drives Action.
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-lg text-lg text-white md:text-xl">
          Content that builds trust and drives action starts with strategy. We craft compelling stories, SEO-friendly copy, and engaging campaigns that connect with your audience. Our content turns casual visitors into loyal customers, fueling consistent brand growth and visibility.
        </p>

        {/* Call to Action */}
        <div className="flex items-center space-x-2">
          <a
            href="/about"
            className="text-lg font-semibold uppercase text-white hover:underline"
          >
            Know More
          </a>
          <svg
            className="h-6 w-6 text-white"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;