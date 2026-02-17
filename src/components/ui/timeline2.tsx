"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline2 = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set initial height
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }

    // Update height on resize
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 40%"],
  });

  // Transform for the line progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="text-center mt-24">
        <h1 className={`text-4xl md:text-7xl font-bold mb-6 'animate-fadeInUp' : 'opacity-0'}`}>
          Projects I made with <span className="relative text-purple-800">
            perfection
            <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
          </span>
        </h1>

      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* Background line */}
        <div
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-neutral-200 dark:bg-neutral-700 opacity-40"
        />

        {/* Animated progress line */}
        <motion.div
          style={{
            height: lineHeight,
            opacity: lineOpacity,
          }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-black dark:bg-white"
        />
      </div>
    </div>
  );
};