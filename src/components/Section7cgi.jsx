
"use client";
// components/AnimatedTextHero.js
import React, { useEffect, useState } from 'react';

const AnimatedTextHero = () => {
  const heroText = "Transform Ideas into 3D-Visual ";
  const subText = "In today’s digital world, brands need more than just traditional visuals they need emotion, realism, and innovation. Our CGI (Computer-Generated Imagery) Advertising Services help you create cinematic, photorealistic visuals that captivate audiences and boost engagement.";
  const words = heroText.split(' ');

  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let timer;
    if (visibleWords.length < words.length) {
      timer = setTimeout(() => {
        setVisibleWords((prev) => [...prev, words[prev.length]]);
      }, 200); // Adjust delay as needed
    }
    return () => clearTimeout(timer);
  }, [visibleWords, words]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Scene - This would be your background from the original image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/s7cgi.jpg" // Replace with your actual background image
          alt="Abstract landscape with furniture"
          className="w-full h-full object-cover"
        />
        {/* Optional: Overlay to darken image or add tint */}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 opacity-100"></div>
      </div>

      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out
                          ${visibleWords.includes(word)
                              ? 'opacity-100 blur-none'
                              : 'opacity-0 blur-lg'
                          }
                          ${index > 0 ? 'ml-3' : ''} // Add margin between words
              `}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger animation
            >
              {word}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl font-light opacity-80 mt-8">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default AnimatedTextHero;