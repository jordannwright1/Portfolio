"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    const projects = [
      {
        id: 1,
        src: '/AIFitnessTrainer.png',
        title: 'AIFitnessTrainer App',
        description: 'AIFitnessTrainer is a fitness app powered by an AI Trainer model built using a Vapi.ai workflow. Users can simulate phone calls with the AI Trainer, which analyzes the conversation to generate personalized diet and workout plans. The app features secure sign-up/sign-in functionality, with a dedicated profile page for users to view and manage their plans. Technologies used: Vapi.ai Workflow and API, Gemini AI API, Next.js, Convex, Clerk Authentication, and ShadCN Library.  Guest Email: s26887809@gmail.com, Guest Password: AIFitnessTrainer',
        link: 'https://ai-fitness-trainer-delta.vercel.app'
      },
      {
        id: 2,
        src: '/MovieApp.png',
        title: 'Movie App',
        description: 'A movie browsing app that fetches data from an external API to display a curated selection of movies. It features a search bar for finding specific titles and allows users to mark movies as favorites. Favorited movies are saved and displayed on a dedicated favorites page for easy access. Technologies used: The Movie Database API, React.',
        link: 'https://react-movie-project-tau.vercel.app'
      }
    ];

    return (
    <section className='flex flex-col items-center justify-center py-20'>
      <h1 id='projects' className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20'>My Projects</h1>

      <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-10 px-10 justify-center items-center">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
