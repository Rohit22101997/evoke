// components/Slider.jsx
"use client";
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/Images/seos11.jpg', // Replace with your image
      title: 'SEO That Accelerates Growth at the Speed of Search',
      description:
        'Leading SEO strategies are transforming how businesses attract, engage, and convert customers online—boosting traffic, rankings, and ROI. Data-driven insights, content optimization, and technical SEO enhancements empower smarter decisions while unlocking measurable growth and higher visibility across search engines worldwide.',
      link: '#',
    },
    {
      image: '/Images/seos12.jpg', // Replace with your image
      title: 'Master Search Visibility and Drive Real Business Results',
      description:
        'Advanced SEO strategies are helping brands dominate search engines, attract the right audience, and convert traffic into loyal customers. With technical optimization, content excellence, and data-driven insights, we deliver measurable growth, higher engagement, and sustainable online success for businesses worldwide.',
      link: '#',
    },
    {
      image: '/Images/seos13.jpg', // Replace with your image
      title: 'Unlock Organic Growth That Scales With Your Business',
      description:
        'Our SEO strategies drive higher rankings, more traffic, and measurable business results. By combining keyword research, content optimization, and technical SEO, we empower brands to make smarter decisions, engage audiences effectively, and achieve sustainable growth online.',
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
      
    </div>
  );
};

export default Slider;