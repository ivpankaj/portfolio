'use client'

import { TextRevealIntro } from '@/components/HeaderText'
import React from 'react'
import Link from 'next/link'

const Main = () => {
  return (
    <>
      <TextRevealIntro />
      <header className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-12 px-4 w-full">
        {/* Resume Download */}
        <a
          href="/pankaj.pdf"
          download="pankaj_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit sm:w-auto border border-black dark:border-white rounded-2xl px-6 py-3 text-sm md:text-base font-medium transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Download Resume
        </a>

        {/* See Projects */}
        <Link
          href="/projects"
          className="w-fit sm:w-auto border border-black dark:border-white rounded-2xl px-6 py-3 text-sm md:text-base font-medium transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          See My Projects
        </Link>

        {/* Hire Me */}
        <Link
          href="/contact"
          className="w-fit sm:w-auto border border-black dark:border-white rounded-2xl px-6 py-3 text-sm md:text-base font-medium transition duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Hire Me
        </Link>
      </header>
    </>
  )
}

export default Main