"use client";
// components/Slider.js
import React, { useState } from 'react';

const slides = [
  { id: 1, title: 'First Slide', content: 'Welcome to the Styled-JSX Slider!' },
  { id: 2, title: 'Second Slide', content: 'The CSS is now built right into the component.' },
  { id: 3, title: 'Third Slide', content: 'No separate CSS file needed!' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Styled-JSX lets you write CSS directly in the component's render method
  return (
    <div className="sliderContainer">
      <div className="slideContent">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].content}</p>
      </div>

      <button onClick={goToPrevious} className="arrow leftArrow">
        &#10094;
      </button>
      <button onClick={goToNext} className="arrow rightArrow">
        &#10095;
      </button>

      <div className="dotsContainer">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* The magic happens here: <style jsx> tag 
        This CSS is scoped only to the elements inside this component.
      */}
      <style jsx>{`
        .sliderContainer {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 300px;
          margin: 40px auto;
          overflow: hidden;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background-color: #f7f7f7;
        }

        .slideContent {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          transition: opacity 0.5s ease-in-out; 
        }

        /* Navigation Arrows */
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 10;
          font-size: 24px;
          line-height: 1;
          user-select: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .leftArrow {
          left: 10px;
        }

        .rightArrow {
          right: 10px;
        }
        
        /* Dots Navigation */
        .dotsContainer {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: #aaa;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .active {
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default Slider;