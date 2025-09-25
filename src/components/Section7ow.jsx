"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PodcastCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const podcasts = [
    {
      id: 1,
      title: "ELECTRIC MYTHS",
      subtitle: "A video podcast about electric driving myths",
      type: "Video podcast",
      bgColor: "bg-yellow-400",
      bgImage: "bg-gradient-to-br from-purple-400 to-purple-600",
      shape: "rounded-full"
    },
    {
      id: 2,
      title: "The future according to...",
      subtitle: "Audio column",
      type: "Audio series",
      bgColor: "bg-orange-300",
      bgImage: "bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400",
      shape: "rounded-3xl"
    },
    {
      id: 3,
      title: "DEE MY GUEST",
      subtitle: "An audio series about humans and mobility",
      type: "Interview series",
      bgColor: "bg-gray-900",
      bgImage: "bg-gradient-to-br from-yellow-300 to-green-400",
      shape: "rounded-full"
    },
    {
      id: 4,
      title: "FUTURE SOUNDS",
      subtitle: "Exploring tomorrow's audio landscape",
      type: "Tech podcast",
      bgColor: "bg-blue-500",
      bgImage: "bg-gradient-to-br from-cyan-400 to-blue-600",
      shape: "rounded-2xl"
    }
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
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex items-start justify-between">
        {/* Left Content */}
        <div className="flex-shrink-0 w-80 pr-8">
          <h1 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
            THE BMW<br />
            PODCAST:<br />
            CHANGING<br />
            LANES
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            Changing Lanes is the official podcast from BMW. In these audio 
            series, we take you with us on new journeys through the BMW universe. 
            Find out more about sustainability, innovation, technology, mobility and 
            the latest trends. You can find and subscribe to Changing Lanes on all 
            major podcast platforms, so tune in!
          </p>
          <button className="border-2 border-gray-900 px-8 py-3 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Listen now
          </button>
        </div>

        {/* Right Content - Cards */}
        <div className="flex-1 relative">
          <div className="flex gap-6 overflow-hidden">
            {visiblePodcasts.map((podcast, index) => (
              <div key={podcast.id} className="flex-shrink-0 w-72">
                {/* Card Image */}
                <div className={`${podcast.bgColor} h-64 mb-4 relative flex items-center justify-center`}>
                  <div className={`w-24 h-24 ${podcast.bgImage} ${podcast.shape} shadow-lg`}></div>
                </div>
                
                {/* Card Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {podcast.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 mt-8 justify-end">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              disabled={currentIndex >= podcasts.length - 3}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCards;