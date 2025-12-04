"use client";

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselData = [
  {
    id: "1",
    number: "01",
    title: "B2B And B2C Company",
    image: "/Images/os1.webp",
    tags: ["Experience & Network", "Service Companies", "Clients"],
  },
  {
    id: "2",
    number: "02",
    title: "E-commerce",
    image: "/Images/os2.webp",
    tags: ["Marketing", "Branding", "High-Value Customers"],
  },
  {
    id: "3",
    number: "03",
    title: "Real Estate",
    image: "/Images/os3.webp",
    tags: ["Budget Potential", "Lead Generations"],
  },
]

export default function SpecializationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // 🕒 Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // auto-slide every 5 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [currentIndex])

  return (
    <div className="w-full max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Sidebar */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Our
              <br />
              Specialization
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
  At <span className="font-bold">EVOKE DIGITAL</span>, we don't just run campaigns. 
  We craft measurable growth strategies. Our team blends data, design, and creativity 
  to help your brand shine across every digital touchpoint.
</p>
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 xl:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 xl:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-600" />
            </button>

            {/* Dots Indicator - Desktop */}
            <div className="flex gap-2 ml-4">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 xl:w-3 xl:h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover"
                      />

                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <span className="text-white/90 text-base sm:text-lg font-medium">{item.number}</span>
                            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                              {item.title}
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                                  tagIndex === 1
                                    ? "bg-orange-500 text-black"
                                    : "bg-white/20 text-white backdrop-blur-sm"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-6 lg:hidden">
            <button
              onClick={prevSlide}
              className="p-2.5 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            <div className="flex gap-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2.5 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="hidden md:block mt-6 lg:mt-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {carouselData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 sm:ring-4 ring-orange-500 scale-102 sm:scale-105"
                  : "hover:scale-102 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-20 sm:h-24 lg:h-32 xl:h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span className="text-white/90 text-xs sm:text-sm font-medium">{item.number}</span>
                    <h4 className="text-white text-xs sm:text-sm lg:text-base font-semibold truncate">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-4 text-center">
        <p className="text-xs text-gray-500">Swipe left or right to navigate</p>
      </div>
    </div>
  )
}
