import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 id='projects' className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20'>My Projects</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
        <ProjectCard 
        src='/AIFitnessTrainer.png'
        title='AIFitnessTrainer App'
        description='AIFitnessTrainer is a fitness app powered by an AI Trainer model built using a Vapi.ai workflow. Users can simulate phone calls with the AI Trainer, which analyzes the conversation to generate personalized diet and workout plans. The app features secure sign-up/sign-in functionality, with a dedicated profile page for users to view and manage their plans. Technologies used: Vapi.ai Workflow and API, Gemini AI API, Next.js, Convex, Clerk Authentication, and ShadCN Library.'
        />
        

        <ProjectCard 
        src='/MovieApp.png'
        title='Movie App'
        description='A movie browsing app that fetches data from an external API to display a curated selection of movies. It features a search bar for finding specific titles and allows users to mark movies as favorites. Favorited movies are saved and displayed on a dedicated favorites page for easy access. Technologies used: The Movie Database API, React.'
        />
      </div>
    </div>
  )
}

export default Projects
