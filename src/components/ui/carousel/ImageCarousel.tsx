"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  image: string
  subtitle: string
  title: string
}

interface ImageCarouselProps {
  items: CarouselItem[]
  autoRotate?: boolean
  rotationInterval?: number
}

export default function ImageCarousel({ items, autoRotate = true, rotationInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isHovering) return

    const interval = setInterval(goToNext, rotationInterval)
    return () => clearInterval(interval)
  }, [autoRotate, isHovering, rotationInterval, goToNext])

  if (!items.length) return null

  return (
    <div
      className="relative w-full h-screen"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Carousel slides */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <div className="w-full md:w-[30%] px-6 py-5 bg-gray-600/80 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-extralight text-white">{item.subtitle}</h3>
            <h1 className="text-3xl md:text-4xl font-light text-white">{item.title}</h1>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

