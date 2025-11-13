'use client';

import { useState, useEffect } from 'react';

const TeamCarousel = () => {
  const teamMembers = [
    { name: "Rohit Kumar", role: "Founder" },
    { name: "Ayushi Garg", role: "Visual Designer" },
    { name: "Emma Rodriguez", role: "Lead Developer" },
    { name: "Julia Gimmel", role: "UX Designer" },
    { name: "Lisa Anderson", role: "Marketing Manager" },
    { name: "James Wilson", role: "Product Manager" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Handle wrapping around for infinite carousel
    const index = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  // Handle swipe on touch devices
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Left swipe
      updateCarousel(currentIndex + 1);
    } else if (touchEnd - touchStart > 50) {
      // Right swipe
      updateCarousel(currentIndex - 1);
    }
  };

  // Calculate card positions based on current index
  const getCardPosition = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    
    if (offset === 0) return 'center';
    if (offset === 1) return 'right-1';
    if (offset === 2) return 'right-2';
    if (offset === teamMembers.length - 1) return 'left-1';
    if (offset === teamMembers.length - 2) return 'left-2';
    return 'hidden';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden relative">
      {/* Title */}
      <h1 className="text-8xl font-black uppercase tracking-tighter absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap font-sans bg-gradient-to-b from-orange-500/35 to-transparent bg-clip-text text-transparent">
        OUR TEAM
      </h1>

      {/* Carousel Container */}
      <div className="w-full max-w-6xl h-[450px] relative perspective-1000 mt-20">
        {/* Left Arrow */}
        <button 
          className="absolute top-1/2 -translate-y-1/2 left-5 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all duration-300 text-xl pb-1 hover:bg-orange-500 hover:scale-110"
          onClick={() => updateCarousel(currentIndex - 1)}
        >
          ‹
        </button>

        {/* Carousel Track */}
        <div 
          className="w-full h-full flex justify-center items-center relative transform-style-preserve-3d transition-transform duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map((member, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={index}
                className={`absolute w-72 h-96 bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer ${
                  position === 'center' 
                    ? 'z-10 scale-110 translate-z-0' 
                    : position === 'left-1' 
                    ? 'z-5 -translate-x-48 scale-90 -translate-z-25 opacity-90 grayscale' 
                    : position === 'left-2' 
                    ? 'z-1 -translate-x-96 scale-80 -translate-z-75 opacity-70 grayscale' 
                    : position === 'right-1' 
                    ? 'z-5 translate-x-48 scale-90 -translate-z-25 opacity-90 grayscale' 
                    : position === 'right-2' 
                    ? 'z-1 translate-x-96 scale-80 -translate-z-75 opacity-70 grayscale' 
                    : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => updateCarousel(index)}
              >
                <img
  src={`/Images/${[
    'member1.png',
    'member2.jpg',
    'member3.jpg',
    'member4.jpg',
    'member5.jpg',
    'member6.jpg'
  ][index]}`}
  alt={member.name}
  className="w-full h-full object-cover transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
/>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          className="absolute top-1/2 -translate-y-1/2 right-5 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all duration-300 text-xl pb-1 hover:bg-orange-500 hover:scale-110"
          onClick={() => updateCarousel(currentIndex + 1)}
        >
          ›
        </button>
      </div>

      {/* Member Info */}
      <div className="text-center mt-10 transition-all duration-500 ease-out">
        <h2 className="text-4xl font-bold text-black mb-2 relative inline-block">
          {teamMembers[currentIndex].name}
          <span className="absolute top-full -left-28 w-24 h-0.5 bg-orange-500"></span>
          <span className="absolute top-full -right-28 w-24 h-0.5 bg-orange-500"></span>
        </h2>
        <p className="text-xl text-gray-500 font-medium opacity-80 uppercase tracking-wider py-2 -mt-3 relative">
          {teamMembers[currentIndex].role}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-14">
        {teamMembers.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 scale-120' 
                : 'bg-orange-500/20'
            }`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>

      {/* Custom styles for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-0 {
          transform: translateZ(0);
        }
        .translate-z-25 {
          transform: translateZ(-25px);
        }
        .translate-z-75 {
          transform: translateZ(-75px);
        }
        .grayscale {
          filter: grayscale(100%);
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 4.5rem;
          }
          .w-72 {
            width: 200px;
          }
          .h-96 {
            height: 280px;
          }
          .-translate-x-48 {
            transform: translateX(-120px);
          }
          .-translate-x-96 {
            transform: translateX(-250px);
          }
          .translate-x-48 {
            transform: translateX(120px);
          }
          .translate-x-96 {
            transform: translateX(250px);
          }
          .w-24 {
            width: 50px;
          }
          .-left-28 {
            left: -70px;
          }
          .-right-28 {
            right: -70px;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamCarousel;