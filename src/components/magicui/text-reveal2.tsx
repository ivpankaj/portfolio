"use client";
import React, { useState, useEffect } from 'react';
import Globe from '../Globe';
import { Code, ArrowRight } from 'lucide-react';

const GlobeDiv = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Left side - Text Content */}
      <div className={`w-full md:w-1/2 space-y-6 mb-8 md:mb-0 mt-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <div className="flex items-center mb-4">
          <Code className="text-gray-800 dark:text-gray-200 mr-2" />
          <span className="text-gray-800 dark:text-gray-200 font-mono text-sm">Software Developer</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          Hire Me !!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          Building responsive, modern web applications with cutting-edge technologies.
        </p>
        
        <div className="pt-4">
          <button className="bg-white dark:bg-black border border-gray-300 dark:border-white text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg flex items-center transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/30 group">
            Connect with me
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-white">
            <h3 className="text-gray-900 dark:text-white font-medium">For Personal Projects</h3>

          </div>
          <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-white">
            <h3 className="text-gray-900 dark:text-white font-medium">For Professional Projects</h3>
          </div>
        </div>
      </div>
      
      {/* Right side - Globe */}
      <div className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="rounded-full p-4">
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default GlobeDiv;