'use client'

import React from 'react'
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight, slideInFromTop
} from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className="h-full w-auto flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
        className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'
        variants={slideInFromTop}
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        id='about-me'
        >
          Welcome to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Jordan&apos;s</span>
          Portfolio Site
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Full Stack Developer with a passion for building intuitive websites and applications that make a difference. Below, you will find my tech stack and descriptions of my current deployed projects. Feel free to explore my work and reach out if you&apos;d like to collaborate!


        </motion.p>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'
      >
        <Image 
          src='/mainIconsdark.svg'
          alt='work icons'
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
