"use client";

import React from 'react';

const ThanksForScrolling = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="relative mb-8 self-start ml-4 md:ml-0">
        <p className="text-sm uppercase text-center tracking-widest">CONTACT ME</p>
        <span className="absolute -right-3 top-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      </div>
      <h1 className="text-6xl md:text-8xl text-left font-bold text-center leading-tight">
        THANKS
        <br />
        FOR
        <br />
        SCROLLING
      </h1>
      <p className="mt-8 text-lg text-gray-400 text-center">
        I'm open for cooperation and new projects
      </p>
    </div>
  );
};

export default ThanksForScrolling;