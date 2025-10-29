import React from "react";

export default function Section1cm() {
  return (
    <section className="bg-black text-white flex items-end justify-start min-h-[60vh] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row md:items-end justify-between">
        {/* LEFT: Text block */}
        <div className="flex-grow text-left">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-tight tracking-tight"
            style={{
              textShadow:
                "2px 2px 0px rgba(255,255,255,0.1), 4px 4px 0px rgba(0,0,0,0.2)",
            }}
          >
            THINK
            <br />
            CREATE
            <br />
            <span className="relative inline-block pb-1">
              DELIVER
              <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-white"></span>
            </span>
          </h1>
        </div>

        {/* RIGHT: /01 number */}
        <div className="flex-shrink-0 mt-8 sm:mt-0 sm:ml-8 text-orange/70">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-normal leading-none">
            EVOKE DIGITAL
          </span>
        </div>
      </div>
    </section>
  );
}
