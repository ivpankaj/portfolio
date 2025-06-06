"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const lines = children.split("\n");

  return (
    <header ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-10 md:top-0 flex h-screen w-full items-center justify-center bg-transparent px-4 py-8 md:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-4 md:gap-6 lg:flex-row lg:items-center lg:gap-8">
          {/* Text Section - Left side */}
          <div className="w-full flex-1 lg:max-w-2xl">
            {lines.map((line, lineIndex) => {
              const words = line.trim().split(" ");
              return (
                <span
                  key={lineIndex}
                  className="flex flex-wrap p-1 sm:p-2 text-4xl font-bold text-black/20 dark:text-white/20"
                >
                  {words.map((word, i) => {
                    const index = lineIndex * words.length + i;
                    const start = index / (lines.length * words.length);
                    const end = start + 1 / (lines.length * words.length);
                    return (
                      <Word key={index} progress={scrollYProgress} range={[start, end]}>
                        {word}
                      </Word>
                    );
                  })}
                </span>
              );
            })}
          </div>
          
          {/* Image Section - Right side */}
          <div className="flex w-full flex-1 justify-center  lg:mt-0 lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="https://ik.imagekit.io/ivpankaj/public/WhatsApp_Image_2025-04-11_at_16.15.57_4c93467a-removebg-preview.png?updatedAt=1746425534144"
                alt="Description of the image"
                width={500}
                height={800}
                className="h-auto w-full object-contain max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-0.5 sm:mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};