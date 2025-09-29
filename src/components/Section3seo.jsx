// components/Slider.jsx
"use client";
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://via.placeholder.com/1000x500/800080/FFFFFF?text=Slide+1', // Replace with your image
      title: 'Microsoft scales cloud at the speed of AI',
      description:
        'The cloud services leader is reinventing its supply chain to meet surging AI demand—doubling data center capacity while boosting speed, resilience and sustainability. Centralized data and digital twin-powered control towers are enabling smarter decisions and unlocking $100M in savings across global operations.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/1000x500/0000FF/FFFFFF?text=Slide+2', // Replace with your image
      title: 'Another exciting title for Slide 2',
      description:
        'This is the description for the second slide, showcasing some other cool features or information. It is designed to be just as engaging as the first one.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/1000x500/FF0000/FFFFFF?text=Slide+3', // Replace with your image
      title: 'Slide 3: Innovation in Action',
      description:
        'Discover how our latest innovations are transforming industries and empowering businesses to achieve more. Learn about our commitment to excellence.',
      link: '#',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-screen  overflow-hidden bg-black text-white">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-8">
            <div className="flex flex-col md:flex-row w-full max-w-7xl items-center">
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                {/* This will be the placeholder for your video or image */}
                <div className="absolute inset-0 bg-orange-500 opacity-50 z-0"></div>
                <img src={slide.image} alt={slide.title} className="relative z-10 w-full h-auto object-cover" />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:pl-16">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-8">{slide.description}</p>
                <a href={slide.link} className="flex items-center text-orange-500 hover:text-orange-500 font-semibold">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-4 right-2 py-10 transform -translate-x-1/2 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-3  bg-gray-700 text-white hover:bg-orange-500 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div className="flex items-center justify-center px-4 py-2 bg-gray-700  text-white">
            <span>{currentSlide + 1}</span> / <span>{slides.length}</span>
        </div>
        <button
          onClick={nextSlide}
          className="p-3  bg-gray-700 text-white hover:bg-orange-500 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Play/Pause Button (optional, as seen in the original image's bottom left) */}
      <button className="absolute bottom-4 left-4 p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Slider;