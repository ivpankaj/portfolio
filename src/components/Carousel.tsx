"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface PremiumCarouselProps {
  slides: React.ReactNode[];
}

const PremiumCarousel = ({ slides }: PremiumCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const slideVariants = {
    incoming: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      },
    },
    outgoing: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      },
    }),
  };

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrevious = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouching) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      handleNext();
      setIsTouching(false);
    } else if (diff < -50) {
      handlePrevious();
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 mb-6 md:mb-10 rounded-lg md:rounded-xl border dark:border-white border-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="incoming"
          animate="active"
          exit="outgoing"
          className="absolute inset-0 w-full h-full "
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between px-2 sm:px-4">
        <button
          onClick={handlePrevious}
          className="p-1 sm:p-2 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-700/90 cursor-pointer z-10 group transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="p-1 sm:p-2 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-700/90 cursor-pointer z-10 group transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-gray-800 dark:bg-white w-6 sm:w-8" 
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2 sm:w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Testimonial Slide Component
interface TestimonialSlideProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialSlide = ({ name, role, company, quote, rating }: TestimonialSlideProps) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"} sm:w-5 sm:h-5`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-6 lg:gap-8"
        >
          {/* Content */}
          <div className="flex-1">
            {/* Rating */}
            <div className="flex justify-center md:justify-start items-center mb-2 md:mb-4">
              {renderStars(rating)}
              <span className="ml-1 sm:ml-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-semibold">{rating}.0</span>
            </div>
            
            {/* Quote */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 italic mb-3 sm:mb-4 md:mb-6 font-light line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
              &ldquo;{quote}&rdquo;
            </p>
            
            {/* Author Info */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0 sm:mb-1">{name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
                {role}, {company}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function TestimonialCarousel() {
  const testimonials = [
    <TestimonialSlide 
      key="testimonial1"
      name="Jatin Batra"
      role="Founder and Director"
      company="Mployee.me"
      quote="Pankaj did an exceptional work in frontend for our website , his knowledge about animations and tech framework makes our website to look cool and responsive , our customers really loves what he has built for us."
      rating={5}
    />,
    <TestimonialSlide 
      key="testimonial2"
      name="Ayush Mishra"
      role="SDE 1"
      company="Apar Technology"
      quote="I have working with Pankaj since 9 years and i found his knowledge about technology is phenominal , he really knows how to tackle problems and he also learn with those mistakes."
      rating={5}
    />,
    <TestimonialSlide 
      key="testimonial3"
      name="Palak Jain"
      role="Founder and CEO"
      company="Mployee.me"
      quote="As a startup, we needed a scalable solution that could grow with us. Pankaj's full-stack expertise provided us with exactly what we needed at a price point that made sense."
      rating={4}
    />,
    <TestimonialSlide 
      key="testimonial4"
      name="Deepesh Garg"
      role="Founder and CEO"
      company="Dosso21 Services Pvt Ltd"
      quote="The web application he developed for us has been visited over 100,000 times with overwhelmingly positive reviews. The UI is intuitive and performance is flawless."
      rating={5}
    />,
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-black py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">What World thinks about me...</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what my clients are saying about their experience working with me
          </p>
        </div>
        
        <PremiumCarousel slides={testimonials} />
      </div>
    </div>
  );
}