"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"



const carouselData = [
  {
    id: "1",
    number: "01",
    title: "B2B Company",
    image: "/Images/os1.jpg",
    tags: ["Manufactures", "Service Companies", "Dealers"],
  },
  {
    id: "2",
    number: "02",
    title: "IT Company",
    image: "/Images/os2.jpg",
    tags: ["Outsourcing", "Product Company", "SaaS"],
  },
  {
    id: "3",
    number: "03",
    title: "Internet Projects",
    image: "/Images/os3.jpg",
    tags: ["E-Commerce sphere", "Goal to Action"],
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

  return (
    <div className="max-w-7xl py-20 mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our
              <br />
              Specialization
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2 ml-4">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />

                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6 right-6">
                          {/* Number and Title */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-white/80 text-lg font-medium">{item.number}</span>
                            <h3 className="text-white text-2xl lg:text-3xl font-bold">{item.title}</h3>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
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

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Carousel Items Preview (Desktop) */}
      <div className="hidden lg:block mt-8">
        <div className="grid grid-cols-3 gap-6">
          {carouselData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-blue-500 scale-105"
                  : "hover:scale-102 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/80 text-sm font-medium">{item.number}</span>
                    <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
