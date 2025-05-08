"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Socials } from '@/constants/index'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61] bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image 
            src='/NavLogo.png'
            alt='Nav logo'
            width={70}
            height={70}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">JW</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className='cursor-pointer'>About me</a>
            <a href="#skills" className='cursor-pointer'>Skills</a>
            <a href="#projects" className='cursor-pointer'>Projects</a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#about-me" className='text-gray-200 hover:text-white' onClick={() => setIsMenuOpen(false)}>About me</a>
            <a href="#skills" className='text-gray-200 hover:text-white' onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className='text-gray-200 hover:text-white' onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="https://www.linkedin.com/in/jordan-wright-50731216a/" className='text-gray-200 hover:text-white' onClick={() => setIsMenuOpen(false)}>LinkedIn</a>
            <a href="https://github.com/jordannwright1" className='text-gray-200 hover:text-white' onClick={() => setIsMenuOpen(false)}>GitHub</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5 text-white">
          {Socials.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <Image 
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
