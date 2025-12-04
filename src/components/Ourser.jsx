"use client";

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Graphic Designing",
    description:
      "Bring your brand to life with stunning visuals that captivate and inspire. Our design solutions blend creativity with strategy for maximum impact. Transform ideas into designs that leave a lasting impression.",
    image: "/Images/home1.jpg",
    imageAlt: "Developer workspace with code",
  },
  {
    id: 2,
    title: "Advertising",
    description:
      "We design high-impact ad campaigns that grab attention fast.From social media to search, every placement is data-driven. Result: measurable reach, stronger leads, and real growth.",
    image: "/Images/home2.jpg",
    imageAlt: "Team collaborating on advertising project",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Elegant design meets powerful technology.We craft secure, high-performing websites tailored to your brand.Experience, scalability, and speed—built for lasting impact.",
    image: "/Images/developer-workspace-with-code-on-multiple-screens.jpg",
    imageAlt: "Developer workspace with code",
  },
  {
    id: 4,
    title: "Analytics",
    description:
      "Unlock the power of data with our advanced analytics solutions. Track, measure, and optimize every campaign to maximize ROI. Turn insights into action and drive smarter marketing decisions.",
    image: "/Images/business-professionals-discussing-analytics-and-da.jpg",
    imageAlt: "Business professionals discussing analytics",
  },
]

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // 🔁 Auto Slide Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [currentSlide]) // Re-run when slide changes

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
          <b> OUR SERVICES </b>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-center text-gray-600 mx-auto sm:mx-0">
          We craft data driven marketing strategies that build brands and boost growth.
          From social media to SEO, every campaign is tailored to your audience.
          Design, content, and performance
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel Content */}
        <div className="overflow-hidden rounded-xl sm:rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                  
                  {/* Mobile Layout */}
                  <div className="block lg:hidden">
                    <div className="relative h-48 sm:h-64">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className={`hidden lg:flex min-h-[400px] xl:min-h-[450px] ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 p-8 xl:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-4 xl:mb-6">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base xl:text-lg">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex-1">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Service Counter */}
      <div className="text-center mt-6 sm:mt-8">
        <span className="text-xs sm:text-sm text-gray-500">
          {currentSlide + 1} of {services.length}
        </span>
      </div>
    </div>
  )
}
