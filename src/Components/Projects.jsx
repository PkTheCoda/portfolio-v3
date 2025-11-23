import React from 'react'
import talemlogo from '../assets/talemlogo.png'
import languifylogo from '../assets/languify.png'

const Projects = () => {
  const projects = [
    {
      logo: talemlogo,
      link: "https://talem.org",
      title: 'talem.org',
      description: 'Talem is a platform connecting students with academic opportunities. It has garnered 1M+ page views to date and received funding from Emergent Ventures (31st cohort).'
    },
    {
        logo: "https://easyap.vercel.app/assets/faviconacely-CJb3B54z.png",
        link: "https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop",
        title: "EasyAP",
        description: "EasyAP uses AI-powered questions and answer-checking to make studying for AP exams easier. The platform has over 10 subjects with ~200 questions each and AI graded MCQs/FRQs."
    },
    {
        logo: "https://www.ecoeats.us/assets/ecoeatsreal-7FZ_WwIz.png",
        link: "https://ecoeats.us",
        title: "EcoEats",
        description: "EcoEats was a project I worked on with a few friends. It consisted of a mobile + web app that connects homeless shelters with restaurants that have surplus food."
    },
    {
        logo: languifylogo,
        link: "https://www.youtube.com/watch?v=ZjpzYi6aBa8",
        title: "Languify",
        description: "Languify helps you learn languages by using AI to check your writing, correcting mistakes as you write. There's also reading comprehension tests with keywords, passages, etc."
    }
  ]

  return (
    <div className='font-medium mb-4 flex flex-col gap-y-2'>
        <h3 className="one-title text-[#e06d43] relative">
            Projects
        </h3>
        <h3 className='text-slate-600'>
            Some things I've developed over the past 1-2 years:
        </h3>
        <div className="grid grid-cols-1 min-[550px]:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className='flex flex-col text-slate-700'>
                  <div className='relative py-10 projects-block rounded-xl z-20 flex flex-col gap-y-2 items-center justify-center border-2 border-slate-200/40 shadow-sm shadow-slate-300'>
                      <a href={project.link} target='_blank' className='text-xs absolute -top-2 -right-2 shadow-md px-4 py-2 rounded-lg bg-slate-600 text-slate-100'>View Project</a>
                      <div className='bg-white shadow-sm p-2 rounded-full'>
                          <img src={project.logo} className='size-10' alt="" />
                      </div>
                      <h4>
                          {project.title}
                      </h4>
                  </div>
                  <p className='bg-slate-200/60 px-3 py-4 text-xs rounded-b-xl mx-1 relative bottom-1 text-slate-600'>
                      {project.description}
                  </p>
              </div>
            ))}
        </div>
        <p className='text-center text-slate-400 text-sm'>
            And many more -- check my github for most of my work!
        </p>
    </div>
  )
}

export default Projects