"use client"
import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  // Function to update dimensions based on container size
  const updateDimensions = () => {
    if (containerRef.current) {
      // Get the container width, with a minimum size
      const containerWidth = Math.max(containerRef.current.clientWidth, 250);
      // Keep it as a perfect square with 1:1 aspect ratio
      setDimensions({
        width: containerWidth,
        height: containerWidth
      });
    }
  };

  // Set up resize listener
  useEffect(() => {
    updateDimensions();
    
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create and manage the globe
  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;
    
    // Scale the pixel ratio for better performance on mobile
    const pixelRatio = Math.min(2, window.devicePixelRatio || 1);
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: pixelRatio,
      width: dimensions.width * pixelRatio,
      height: dimensions.height * pixelRatio,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.3, 0.1], // Reddish color for your location
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.03 }, // New York
        { location: [28.5355, 77.3910], size: 0.1 }, // Noida, India - highlighted with larger size
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });
    
    return () => {
      globe.destroy();
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-full flex justify-center items-center mx-auto px-4 sm:px-6"
    >
      <canvas
        ref={canvasRef}
        style={{ 
          width: dimensions.width, 
          height: dimensions.height, 
          maxWidth: "100%", 
          aspectRatio: "1"
        }}
      />
    </div>
  );
}

export default Globe;