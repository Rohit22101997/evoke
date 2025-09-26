// components/HeroTextSection.js
import React from 'react';

export default function HeroTextSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* Left side: Abstract logo/shape */}
      {/* This is a simple SVG to mimic the shape from the image. 
          For a real scenario, you'd use your actual logo SVG or an image. */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300" // Tailwind color for the SVG fill
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0C44.7715 0 0 44.7715 0 100C0 128.91 14.5097 154.685 36.8837 170.16C47.8523 178.583 61.1613 184.226 75.3976 186.74C82.176 187.971 89.2896 188.586 96.6579 188.586C103.791 188.586 110.638 188.006 117.202 186.855C132.887 184.14 147.23 177.306 159.227 167.068C176.652 152.059 188.586 130.403 188.586 100C188.586 44.7715 143.815 0 100 0ZM152.264 69.3514C152.264 57.086 142.178 47.0001 129.912 47.0001C117.647 47.0001 107.561 57.086 107.561 69.3514C107.561 81.6168 117.647 91.7027 129.912 91.7027C142.178 91.7027 152.264 81.6168 152.264 69.3514ZM80.605 137.986C80.605 125.72 70.5191 115.634 58.2536 115.634C45.9882 115.634 35.9023 125.72 35.9023 137.986C35.9023 150.251 45.9882 160.337 58.2536 160.337C70.5191 160.337 80.605 150.251 80.605 137.986Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Right side: Text content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
          Unleashing the
          <br />
          Potential of{' '}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text font-normal">
            Artificial
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-gray-600 text-transparent bg-clip-text font-normal">
            Intelligence
          </span>{' '}
          for
          <br />
          Intelligent Solutions
        </h1>
      </div>
    </section>
  );
}