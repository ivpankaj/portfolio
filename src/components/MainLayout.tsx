// app/components/MainLayout.tsx
"use client";

import Navigation from "@/components/Navigation";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { Footer } from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, themeClasses, toggleTheme } = useTheme();

  return (
    <>
      <Navigation
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        themeClasses={themeClasses}
      />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
