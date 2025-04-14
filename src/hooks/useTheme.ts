// src/hooks/useTheme.js
import { useState } from 'react';

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Dynamically change theme classes
  const themeClasses = {
    primary: darkMode ? "bg-black text-white" : "bg-white text-black",
    secondary: darkMode ? "bg-white text-black" : "bg-black text-white",
    accent: darkMode ? "bg-gray-900" : "bg-gray-100",
    border: darkMode ? "border-gray-700" : "border-gray-300",
    highlight: darkMode ? "bg-white text-black" : "bg-black text-white",
    muted: darkMode ? "text-gray-400" : "text-gray-600",
  };
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return { darkMode, themeClasses, toggleTheme };
}