import React from 'react'
import h4ilogo from '../assets/h4ilogo.webp'
import ultralogo from '../assets/ultralogo.svg'
import { HiOutlineExternalLink } from "react-icons/hi";

const Experience = () => {
  const experiences = [
    {
        image: ultralogo,
        company: 'Ultra (YC W24)',
        position: 'Software Engineering Intern',
        dateRange: 'Summer 2025 (June — August)',
        description: 'Helped fully design + develop features/pages like the landing page, career simulation and redesign critical features like the college simulation platform, roadmap, etc.',
        link: 'https://www.useultra.ai/',
        tools: ['React', 'Tailwind CSS', 'TypeScript', 'MySQL', 'Pinecone (Vector Database)']
    },
    {
        image: 'https://thryvedesign.com/assets/thryvelogo1-UwUeg4tf.png',
        company: 'ThryveDesign',
        position: 'Founder + Developer/Designer',
        dateRange: 'Sept. 2024 — Present',
        description: "ThryveDesign is my web-development agency where I've worked with over 25+ businesses and generated over $20k in revenue. I handle full project life cycles from Figma wireframes to website development & deployment.",
        link: 'https://thryvedesign.com/',
        tools: ['HTML', 'React', 'Tailwind CSS', 'Figma', 'Wordpress', 'Project-Specific Tech']
    },
    {
      image: h4ilogo,
      company: 'Hack4Impact @ UIUC',
      position: 'Software Developer',
      dateRange: 'Sept. 2025 — Present',
      description: 'Working alongside team of developers and designers to create web and mobile apps for global nonprofits. Currently helping build a case management system for a nonprofit focused on helping domestic abuse survivors.',
      link: 'https://uiuc.hack4impact.org/',
      tools: ['React', 'Tailwind CSS', 'TypeScript', 'Python', 'Supabase', 'MongoDB', 'PostgreSQL', 'Figma']
    },
  ]

  return (
    <div className='flex flex-col gap-y-2 font-semibold pb-4'>
        <h3 className="one-title text-[#e06d43] relative mb-2">
          Current + Previous Work Experience
        </h3>
        <div className='flex flex-col gap-y-6'>
            {experiences.map((experience, index) => (
            <div key={index} className='w-full p-8 rounded-md bg-gradient-to-b from-slate-200/40 to-slate-100 flex flex-col text-slate-600 text-base relative gap-y-4'>
                {/* <img src={experience.image} className='absolute w-12 -right-4 -top-2 rounded-md' alt="" /> */}
                <a href={experience.link} target='_blank' className='p-3 rounded-full text-slate-100  bg-slate-900 absolute -right-4 -top-4 shadow-md transition transform duration-300 hover:scale-[1.04]'> 
                    <HiOutlineExternalLink className='rounded-md size-5' />
                </a>

                <div>
                    <h2 className='text-slate-900 text-lg'>
                        {experience.company}
                    </h2>
                    <div className='flex justify-between w-full'>
                        <h3>
                            {experience.position}
                        </h3>
                        <h3>
                            {experience.dateRange}
                        </h3>
                    </div>
                </div>

                <p className='font-normal'>
                    {experience.description}
                </p>

            <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool, i) => (
                <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-300"
                >
                    {tool}
                </span>
                ))}
            </div>

                

            </div>
            ))}
        </div>
    </div>
  )
}

export default Experience