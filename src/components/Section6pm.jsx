<<<<<<< HEAD
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BlurText() {
  return (
    <div className="w-full py-32 sm:py-48 md:py-40 flex items-center justify-center bg-[#141414] overflow-hidden">
      <motion.h1
        style={{ letterSpacing: "1px" }}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          lg:text-8xl 
          xl:text-9xl 
          font-bold text-white tracking-wide 
          flex flex-wrap gap-3 sm:gap-4 justify-center text-center px-4
        "
      >
        <span>Feel</span>

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
          className="text-[#FF8500]"
        >
           Digital Experience
        </motion.span>
      </motion.h1>
    </div>
  );
}
=======
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BlurText() {
  return (
    <div className="w-full py-32 sm:py-48 md:py-40 flex items-center justify-center bg-[#141414] overflow-hidden">
      <motion.h1
        style={{ letterSpacing: "1px" }}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          lg:text-8xl 
          xl:text-9xl 
          font-bold text-white tracking-wide 
          flex flex-wrap gap-3 sm:gap-4 justify-center text-center px-4
        "
      >
        <span>Feel</span>

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
          className="text-[#FF8500]"
        >
           Digital Experience
        </motion.span>
      </motion.h1>
    </div>
  );
}
>>>>>>> 9a1f4c69a04e8ed813a0f35f875fa7e1c4b74a05
