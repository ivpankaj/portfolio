import AboutMe from '@/components/AboutMe'
import TestimonialCarousel from '@/components/Carousel'
import MainLayout from '@/components/MainLayout'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
         <AboutMe/>
         <TestimonialCarousel/>
    </MainLayout>
  )
}

export default page