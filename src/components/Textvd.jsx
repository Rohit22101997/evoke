"use client";
import { useEffect, useRef } from "react";

export default function OceanHeader() {
  const videoRef = useRef(null);

  // Handle reduced-motion preference
  useEffect(() => {
    const video = videoRef.current;
    if (window.matchMedia("(prefers-reduced-motion)").matches && video) {
      video.removeAttribute("autoplay");
      video.pause();
    }
  }, []);

  return (
    <header className="relative mx-auto max-w-[1200px] w-full m-8 bg-white">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        className="w-full"
      >
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
      </video>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285 80"
        preserveAspectRatio="xMidYMid slice"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <text
              x="72"
              y="50"
              className="font-bold uppercase"
              style={{
                fontFamily: "Biko, sans-serif",
                fontSize: "38px",
                fill: "black",
              }}
            >
              EVOKE
            </text>
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="white"
          style={{ mask: "url(#mask)", WebkitMask: "url(#mask)" }}
        />
      </svg>
    </header>
  );
}
