import { ModernNav } from "@/components/ModernNav";

import React from "react";
import { Footer } from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ModernNav />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
