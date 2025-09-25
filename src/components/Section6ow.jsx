"use client";
import React from 'react';

const BMWNewsComponent = () => {
  const newsItems = [
    {
      id: 1,
      title: "All news",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-orange-500 to-blue-900"
    },
    {
      id: 2,
      title: "Electric Lifestyle",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-gray-900 to-black"
    },
    {
      id: 3,
      title: "The Ryder Cup live",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      id: 4,
      title: "Art Basel Basel 2025",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-100 to-gray-300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-wider text-gray-800 uppercase">
          Stay up to date with BMW.
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
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 z-10`}></div>
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              
              {/* BMW Logo Overlay (for first item) */}
              {item.id === 1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 bg-black bg-opacity-40 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">BMW</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black bg-opacity-20 z-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>

            {/* Title */}
            <div className="bg-white p-6">
              <h3 className="text-lg font-normal text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Hover indicator line */}
              <div className="mt-3 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-8"></div>
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