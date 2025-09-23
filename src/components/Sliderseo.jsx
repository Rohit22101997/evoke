'use client';

import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setIsSticky(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-white bg-black font-sans">
      {/* HEADER */}
      <header
        id="myHeader"
        className={`relative z-[99999] transition-all duration-500 ${
          isSticky ? 'sticky top-0' : ''
        }`}
      >
    
        
      </header>

      {/* Page sections */}
      <div
        id="page"
        className={`transition-all duration-1000 ${
          menuOpen ? 'scale-125 blur-lg opacity-60' : ''
        }`}
      >
        {[
          {
            id: 'vision',
            img: 'https://assets.codepen.io/214624/vision.jpg',
          },
          {
            id: 'knowledge',
            img: 'https://assets.codepen.io/214624/knowledge.jpg',
          },
          {
            id: 'space',
            img: 'https://assets.codepen.io/214624/space.jpg',
          },
          {
            id: 'future',
            img: 'https://assets.codepen.io/214624/future.jpg',
          },
        ].map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="relative flex min-h-screen items-center justify-center bg-gray-800 px-12 text-white"
            style={{
              backgroundImage: `url(${sec.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <h1 className="relative z-10 m-0 text-[120px]">{sec.id}.</h1>
          </section>
        ))}
      </div>

      
    </div>
  );
}
