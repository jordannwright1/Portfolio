"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { slideInFromTop } from '@/utils/motion'
const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'
        variants={slideInFromTop}
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>
    </div>
  )
}

export default SkillText
