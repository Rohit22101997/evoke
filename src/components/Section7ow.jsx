"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PodcastCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const podcasts = [
    {
      id: 1,
      title: "Creativity Unplugged",
      subtitle: "Shaping Markets for Electric Futures",
      type: "Video podcast",
      src: "/Images/s7ow1.jpg",
    },
    {
      id: 2,
      title: "Branding It Live",
      subtitle: "From Vision To Strong Identity",
      type: "Audio series",
      src: "/Images/s7ow2.jpg",
    },
    {
      id: 3,
      title: "Advertisement is Spark",
      subtitle: "Creating Ads That Drive Results",
      type: "Interview series",
      src: "/Images/s7ow3.jpg",
    },
    {
      id: 4,
      title: "Marketing Strategy",
      subtitle: "Exploring Tomorrow's Brand Landscape",
      type: "Tech podcast",
      src: "/Images/s7ow4.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === podcasts.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? podcasts.length - 3 : prevIndex - 1
    );
  };

  const visiblePodcasts = podcasts.slice(currentIndex, currentIndex + 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="flex-shrink-0 w-full lg:w-80">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            THE <br />
            Brand Podcast:<br />
            Amplifying Stories<br />
            That Matter
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            We help brands find their voice through powerful storytelling. Our
            podcast campaigns turn conversations into connections — blending
            creativity, strategy, and sound design to engage audiences on every
            major platform. From concept to production, we make brands heard.
          </p>
          <button className="border-2 border-orange-500 px-6 sm:px-8 py-3 text-gray-900 font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Connect Now
          </button>
        </div>

        {/* Right Content - Cards */}
        <div className="flex-1 relative w-full">
          <div className="flex gap-4 sm:gap-6 overflow-hidden justify-center sm:justify-start">
            {visiblePodcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="flex-shrink-0 w-[80%] sm:w-64 md:w-72"
              >
                {/* Card Image */}
                <div className="h-56 sm:h-64 mb-4 relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={podcast.src}
                    alt={podcast.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {podcast.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-8 justify-center sm:justify-end">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
              disabled={currentIndex >= podcasts.length - 3}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCards;
