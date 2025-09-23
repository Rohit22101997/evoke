"use client"

import { useEffect, useRef, useState } from "react"

const counters = [
  {
    value: 95,
    suffix: "%",
    label: "Complete customer satisfaction",
  },
  {
    value: 10,
    suffix: "+",
    label: "Innovation and valuable insights",
  },
  {
    value: 10,
    suffix: "m",
    label: "Highly efficient financial strategies",
  },
  {
    value: 50,
    suffix: "m",
    label: "Users worldwide, providing them with",
  },
]

function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin])

  return { elementRef, isIntersecting }
}

function AnimatedNumber({ targetValue, suffix, duration = 2000 }) {
  const [currentValue, setCurrentValue] = useState(0)
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    if (!isIntersecting) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const newValue = startValue + (targetValue - startValue) * easeOutQuart

      setCurrentValue(Math.floor(newValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrentValue(targetValue)
      }
    }

    animate()
  }, [isIntersecting, targetValue, duration])

  const formatValue = (value) => {
    if (suffix === "m" && targetValue === 10) {
      return `$${value}`
    }
    return value.toString()
  }

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
        {formatValue(currentValue)}
        {suffix}
      </div>
    </div>
  )
}

export default function AnimatedCounter() {
  return (
    <div className="w-full bg-white max-w-6xl py-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-3">
            <AnimatedNumber
              targetValue={counter.value}
              suffix={counter.suffix}
              duration={2000 + index * 200} // Stagger animations slightly
            />
            <p className="text-sm md:text-base text-muted-foreground max-w-[200px] leading-relaxed">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}