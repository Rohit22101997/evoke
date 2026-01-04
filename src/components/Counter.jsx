"use client"

import { useEffect, useRef, useState } from "react"

const counters = [
  { value: 95, suffix: "%", label: "Complete customer satisfaction" },
  { value: 10, suffix: "+", label: "Breakthroughs" },
  { value: 10, suffix: "+", label: "ROI-focused campaigns" },
  { value: 50, suffix: "K", label: "Engaged Users" },
]

function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold, rootMargin })

    const current = elementRef.current
    if (current) observer.observe(current)

    return () => current && observer.unobserve(current)
  }, [threshold, rootMargin])

  return { elementRef, isIntersecting }
}

function AnimatedNumber({ targetValue, suffix, duration = 2000 }) {
  const [currentValue, setCurrentValue] = useState(0)
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    if (!isIntersecting) return
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const newValue = targetValue * easeOutQuart
      setCurrentValue(Math.floor(newValue))
      if (progress < 1) requestAnimationFrame(animate)
    }

    animate()
  }, [isIntersecting, targetValue, duration])

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold text-foreground mb-3 leading-tight">
        {currentValue}{suffix}
      </div>
    </div>
  )
}

export default function AnimatedCounter() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
        {counters.map((c, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-4"
          >
            <AnimatedNumber
              targetValue={c.value}
              suffix={c.suffix}
              duration={2000 + i * 200}
            />
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-[280px] leading-snug font-semibold">
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
