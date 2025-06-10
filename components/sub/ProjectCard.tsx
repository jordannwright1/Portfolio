"use client"

import React from 'react'
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({src, title, description, link} : Props) => {
  if (!link) {
    return (
      <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-[600px]'>
        <div className="relative w-full h-[300px]">
          <Image 
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className='object-contain'
            priority
          />
        </div>
        <div className="relative p-4 h-[300px] overflow-y-auto">
          <h1 className='text-2xl font-semibold text-white'>{title}</h1>
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
      className="w-full max-w-[600px] cursor-pointer relative z-50"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }}
     
    >
      <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-[600px] hover:scale-105 transition-transform duration-300'>
        <div className="relative w-full h-[300px]">
          <Image 
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
        <div className="relative p-4 h-[300px] overflow-y-auto">
          <h1 className='text-2xl font-semibold text-white'>{title}</h1>
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
