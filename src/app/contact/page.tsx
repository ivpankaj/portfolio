import ContactPage from "@/components/Contact";
import { TextReveal2 } from "@/components/magicui/text-reveal2";
import MainLayout from "@/components/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <TextReveal2>

        {
          "Hire me! \nFor Coding works !!  \nProject Accepting from \n All Around the world </>"
        }
      </TextReveal2>
      <ContactPage/>
    </MainLayout>
  );
};

export default page;
