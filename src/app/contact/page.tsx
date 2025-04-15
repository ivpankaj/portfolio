import ContactPage from "@/components/Contact";
import GlobeDiv from "@/components/magicui/text-reveal2";
import MainLayout from "@/components/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
 <GlobeDiv/>
      <ContactPage/>
    </MainLayout>
  );
};

export default page;
