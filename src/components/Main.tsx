import { TextRevealIntro } from '@/components/HeaderText'
import React from 'react'
import Link from 'next/link'
import AboutSection from './AboutSection'
const Main = () => {
  return (
    <div className="flex flex-col w-full">
      <TextRevealIntro />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 -mt-20 mb-20 px-4 w-full relative z-10">
        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/1x1zFawaMUXD-7xVfu0igNXkStrlpBRGB/view"
          download="pankaj_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit sm:w-auto bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-4 text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Download Resume
        </a>

        {/* See Projects */}
        <Link
          href="/projects"
          className="w-fit sm:w-auto border-2 border-black dark:border-white rounded-full px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          See My Projects
        </Link>
      </div>

      <AboutSection />

    </div>
  )
}

export default Main