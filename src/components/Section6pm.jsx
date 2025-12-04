
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BlurText() {
  return (
    <div className="w-full py-60 flex items-center justify-center bg-[#141414] overflow-hidden">
      <motion.h1
        style={{ letterSpacing: "2px" }}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-8xl md:text-9xl font-bold text-white tracking-wide flex gap-4"
      >
        <span>Feel</span>
        <span></span>
        <motion.span
          initial={{ filter: "blur(30px)", opacity: 0.2 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="text-[#cfcfcf]"
        >
          the
        </motion.span>
        <motion.span
          initial={{ filter: "blur(40px)", opacity: 0.1 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.7 }}
          className="text-[#cfcfcf]"
        >
          Experience
        </motion.span>
      </motion.h1>
    </div>
  );
}
