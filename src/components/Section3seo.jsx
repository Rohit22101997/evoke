"use client";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Images/seos11.jpg",
      title: "SEO That Accelerates Growth at the Speed of Search",
      description:
        "Leading SEO strategies are transforming how businesses attract, engage, and convert customers online—boosting traffic, rankings, and ROI. Data-driven insights, content optimization, and technical SEO enhancements empower smarter decisions while unlocking measurable growth and higher visibility across search engines worldwide.",
      link: "#",
    },
    {
      image: "/Images/seos12.jpg",
      title: "Master Search Visibility and Drive Real Business Results",
      description:
        "Advanced SEO strategies are helping brands dominate search engines, attract the right audience, and convert traffic into loyal customers. With technical optimization, content excellence, and data-driven insights, we deliver measurable growth, higher engagement, and sustainable online success for businesses worldwide.",
      link: "#",
    },
    {
      image: "/Images/seos13.jpg",
      title: "Unlock Organic Growth That Scales With Your Business",
      description:
        "Our SEO strategies drive higher rankings, more traffic, and measurable business results. By combining keyword research, content optimization, and technical SEO, we empower brands to make smarter decisions, engage audiences effectively, and achieve sustainable growth online.",
      link: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center gap-8 md:gap-12">

              {/* Image Section */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500 opacity-50 z-0 rounded-lg"></div>

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-full h-64 sm:h-80 md:h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 px-2 sm:px-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-snug md:leading-tight">
                  {slide.title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <a
                  href={slide.link}
                  className="flex items-center text-orange-500 hover:text-orange-400 font-semibold text-sm sm:text-base"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center space-x-2">
        
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 bg-gray-700 rounded-md hover:bg-orange-500 transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 rounded-md text-xs sm:text-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 bg-gray-700 rounded-md hover:bg-orange-500 transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Slider;
