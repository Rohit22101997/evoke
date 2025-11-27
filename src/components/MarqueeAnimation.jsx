"use client"; // For Next.js 13+ app directory

import React from "react";

const Marquee = ({ text = "GRAPHIC DESIGN", text2 = "WEB DESIGN" , 
  text3 = "UXUI DESIGN" , text4 = "VIDEO EDITING" , text5 = "ADVERTISEMENT",
text6 = "GRAPHIC DESIGN", text7 = "WEB DESIGN" , 
  text8 = "UXUI DESIGN" , text9 = "VIDEO EDITING" , text10 = "ADVERTISEMENT"}) => {
    
  return (
    <>
    <div className="overflow-hidden mb-50 whitespace-nowrap py-10 w-full bg-black">
      <div
        className="inline-block font-bold text-5xl uppercase text-white"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "marquee 10s linear infinite",
        }}
      >
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text2}</span>
        <span className="mr-10">{text3}</span>
        <span className="mr-10">{text4}</span>
        <span className="mr-10">{text5}</span>
         <span className="mr-10">{text6}</span>
        <span className="mr-10">{text7}</span>
        <span className="mr-10">{text8}</span>
        <span className="mr-10">{text9}</span>
        <span className="mr-10">{text10}</span>
      </div>

      

      {/* Inline keyframes style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33%);
          }
        }
      `}</style>
    </div>

  
    </>
  );
};

export default Marquee;
