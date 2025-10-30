"use client";
// components/BlogPostHero.js
import React from 'react';

const BlogPostHero = () => {
  return (
    <div className="min-h-screen bg-black  pb-40 text-white p-4 sm:p-8">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto  pt-10 flex justify-between items-baseline mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold">EVOKE DIGITAL</h1>
        <p className="text-sm opacity-75">Dynamic 3D ad videos for digital platforms and commercials.</p>
      </header>

      {/* Hero Image Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="w-full h-64 sm:h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src="/Images/s8cgi.jpg" // Replace with your actual image path
            alt="Majestic snow-capped mountains under a cloudy sky"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Post Details Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Title and Date */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Beyond the Lens: 3D CGI Advertising That Defines Reality.</h2>
          
        </div>

        {/* Right Column: Description and Author */}
        <div className="flex flex-col justify-between h-full">
          <p className="text-base px-20 sm:text-lg text-gray-300 mb-6">
            Create impossible visuals, eliminate logistical costs, and captivate your audience with photorealistic 3D product animations and cinematic ads.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default BlogPostHero;