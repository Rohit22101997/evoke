"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"



const services = [
  {
    id: 1,
    title: "Advertising",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
    image: "/Images/people-working-on-laptops-collaborating-on-adverti.jpg",
    imageAlt: "Team collaborating on advertising project",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
    image: "/Images/developer-workspace-with-code-on-multiple-screens.jpg",
    imageAlt: "Developer workspace with code",
  },
  {
    id: 3,
    title: "Analytics",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
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

  return (
    <div className="max-w-6xl py-20 mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl">
          Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport
          etc, litot Europa usa li sam vocabular.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel Content */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0">
                <div
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } flex`}
                >
                  {/* Content Side */}
                  <div className="flex-1 p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-gray-800 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Responsive Version */}
      <div className="block md:hidden mt-8">
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
