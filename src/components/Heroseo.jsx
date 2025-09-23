'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  // Typing words
  const words = ['DESIGNER', 'DEVELOPER', 'CREATIVE'];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 50;
  const backSpeed = 10;
  const backDelay = 2000;

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        setCurrentWord(fullWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), backDelay);
        }
      } else {
        setCurrentWord(fullWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? backSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  // Ripple animation on click
  const btnRef = useRef(null);
  const ripple = () => {
    if (!btnRef.current) return;
    btnRef.current.animate(
      [
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1)', opacity: 0.25 },
        { transform: 'scale(0)', opacity: 0 },
      ],
      { duration: 500, easing: 'ease-out' }
    );
  };

  // Smooth scroll
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#this');
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex items-center  h-screen w-full
                 bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg')]
                 bg-cover bg-center bg-black/70 bg-blend-multiply text-gray-100"
    >
      {/* Text */}
      <div className="text-left px-4 sm:px-10 text-[50px] sm:text-[75px] md:text-[100px]">
        <p className="font-black leading-none inline-block sm:block">WEB</p>{' '}
        <p className="font-thin text-orange-400 leading-none inline-block">
          {currentWord}
        </p>
      </div>

      {/* Down Button */}
      <a
        href="#this"
        onClick={handleScroll}
        onMouseDown={ripple}
        className="absolute bottom-6 text-3xl w-12 h-12 text-gray-100 flex items-center justify-center
                   rounded-full hover:text-gray-300 focus:outline-none"
      >
        <div
          ref={btnRef}
          className="absolute px-10 inset-0 w-20 h-12 bg-gray-100 "
        />
        hhiiiiii
      </a>
    </section>
  );
}
