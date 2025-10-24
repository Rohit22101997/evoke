"use client";
import React from 'react';

const BMWNewsComponent = () => {
  const newsItems = [
    {
      id: 1,
      title: "Innovative Digital Experiences",
      image: "Images/s6ow1.jpg",
      gradient: "from-orange-500 to-blue-900"
    },
    {
      id: 2,
      title: "Brand Storytelling",
      image: "Images/s6ow2.jpg",
      gradient: "from-gray-900 to-black"
    },
    {
      id: 3,
      title: "Performance & Analytics",
      image: "Images/s6ow3.jpg",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      id: 4,
      title: "Integrated Marketing Solutions",
      image: "Images/s6ow4.jpg",
      gradient: "from-blue-100 to-gray-300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-regular tracking-wider text-gray-800 uppercase">
          Stay up to date with <span className="text-6xl text-orange-500">EVOKE DIGITAL.</span>
        </h1>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              {/* Background Image Overlay */}
              <div
                className="absolute inset-0 opacity-20 z-10"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>

              {/* Main Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />

              {/* Gradient Overlay for Readability */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 z-20 group-hover:opacity-30 transition-all duration-300`}
              ></div>
            </div>

            {/* Title */}
            <div className="bg-white p-6">
              <h3 className="text-lg font-normal text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Hover indicator line */}
              <div className="mt-3 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-8"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional hover effects for enhanced interaction */}
      <style jsx>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        .group:hover {
          animation: subtle-bounce 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BMWNewsComponent;
