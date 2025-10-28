"use client"

import { useEffect, useState } from "react"

export default function AwardsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumber, setAnimatedNumber] = useState(0)

  const awards = [
    { number: "50+", title: "Logo identities built from scratch" },
    { number: "500+", title: "Social media campaigns crafted to perfection" },
    { number: "10+", title: "Brand makeovers that elevated businesses" },
    { number: "50+", title: "Packaging designs that stand out on shelves" },
    { number: "50+", title: "UI/UX designs enhancing user experiences" },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Animate the main number from 0 to 260
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = 500 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 500) {
        setAnimatedNumber(500)
        clearInterval(timer)
      } else {
        setAnimatedNumber(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Large number */}
          <div className="flex items-center justify-center lg:justify-start">
            <div
              className={`text-orange-500 font-bold text-8xl md:text-9xl lg:text-[12rem] leading-none transition-all duration-1000 ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              {animatedNumber}
              <span className="text-white text-6xl md:text-7xl lg:text-8xl">+</span>
            </div>
          </div>

          {/* Right side - Awards content */}
          <div className="space-y-6">
            <div
              className={`space-y-2 transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide animate-pulse">
                PROJECTS DESIGNED
              </h2>
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                TO INSPIRE
              </h3>
            </div>

            {/* Awards list */}
            <div className="space-y-4 pt-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 150}ms`,
                  }}
                >
                  <div className="text-orange-500 font-bold text-xl md:text-2xl min-w-[3rem] hover:scale-110 transition-transform duration-300">
                    {award.number}
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium hover:text-orange-300 transition-colors duration-300">
                    {award.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
