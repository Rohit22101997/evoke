"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] sm:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Herocm.avif" // Replace with your image path
          alt="Aerial view of city buildings"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Overlay for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10  flex h-full flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
        {/* Main Heading */}
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight text-white">
          Content That
          <br className="hidden sm:block" />
          Builds Trust and
          <br className="hidden sm:block" />
          Drives Action.
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          Content that builds trust and drives action starts with strategy. We craft compelling stories, SEO-friendly
          copy, and engaging campaigns that connect with your audience. Our content turns casual visitors into loyal
          customers, fueling consistent brand growth and visibility.
        </p>

        {/* Call to Action */}
        <div className="flex items-center space-x-3">
          <a
            href="/about"
            className="text-sm sm:text-base md:text-lg font-semibold uppercase text-white hover:underline"
          >
            Connect with Us
          </a>
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
