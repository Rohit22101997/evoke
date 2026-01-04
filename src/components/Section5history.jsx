"use client";

import { cn } from "@/lib/utils"; // Assuming this utility is available for merging class names
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import React from "react"; // Explicitly import React for ReactNode

// --- 1. HoverEffect Component ---

export const HoverEffect = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block px-9 py-5 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-orange-600/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// --- 2. Card Sub-Components ---

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// --- 3. Data Array ---

export const projects = [
  {
    title: "Founded with a Vision",
    description:
      "Evoke Digital was established to redefine the way brands connect with audiences worldwide. From the very beginning, our focus has been on combining creativity, strategy, and innovation to help businesses grow and make a meaningful impact in the digital space.",
    link: "https://stripe.com",
  },
  {
    title: "Early Milestones",
    description:
      "In the initial years, Evoke Digital achieved significant milestones, building a strong foundation in creative marketing and digital strategy. Our early campaigns set the standard for innovation, delivering measurable results and earning the trust of clients across industries and regions.",
    link: "https://netflix.com",
  },
  {
    title: "Expanding Globally",
    description:
      "As demand grew, we expanded our presence to international markets, establishing offices and partnerships across key regions. This global footprint allows us to deliver localized strategies with worldwide impact, helping brands reach audiences everywhere while maintaining cultural relevance and effectiveness.",
    link: "https://google.com",
  },
  {
    title: "Innovative Approach",
    description:
      "Technology and data have always been at the core of our solutions. By integrating advanced analytics, AI, and creative thinking, Evoke Digital develops smarter marketing strategies that drive engagement, optimize performance, and ensure measurable business growth for clients globally.",
    link: "https://meta.com",
  },
  {
    title: "Creative Excellence",
    description:
      "Creativity is the heart of everything we do. Over the years, our campaigns have been recognized for originality, impact, and effectiveness, helping clients build memorable brands, inspire audiences, and stand out in a competitive international market.",
    link: "https://amazon.com",
  },
  {
    title: "Future-Focused",
    description:
      "Looking ahead, Evoke Digital continues to innovate, embracing new technologies and marketing trends. Our mission is to empower brands to lead in the digital era, creating meaningful connections, measurable impact, and global growth opportunities that shape the future of marketing.",
    link: "https://microsoft.com",
  },
];


// --- 4. Demo Component ---

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      {/* The component usage now references the local component `HoverEffect` */}
      <HoverEffect items={projects} />
    </div>
  );
}