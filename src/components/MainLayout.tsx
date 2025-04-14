// app/components/MainLayout.tsx
"use client";

import Navigation from "@/components/Navigation";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

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
    </>
  );
};

export default MainLayout;
