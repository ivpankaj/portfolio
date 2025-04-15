// app/components/MainLayout.tsx
"use client";

import Navigation from "@/components/Navigation";

import React from "react";
import { Footer } from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <>
      <Navigation



      />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
