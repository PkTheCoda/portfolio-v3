import React from 'react'
import { motion } from 'framer-motion'
import h4ilogo from '../assets/h4ilogo.webp'
import ultralogo from '../assets/ultralogo.svg'
import { HiOutlineExternalLink } from "react-icons/hi";

const Experience = () => {
  const experiences = [
    {
        image: ultralogo,
        company: 'UpAhead',
        position: 'Spring Software Engineering Intern',
        dateRange: 'Dec. 2025 — Feb. 2026',
        description: 'Built and maintained core full-stack features across web and mobile platforms for UpAhead, an edtech platform used by 25K+ students worldwide.',
        link: 'https://www.upahead.online/',
        tools: ['React', 'Tailwind CSS', 'Firebase', 'Amplitude'],
        current: false
    },
    {
        image: ultralogo,
        company: 'Ultra (YC W24)',
        position: 'Software Engineering Intern',
        dateRange: 'Summer 2025 (June — August)',
        description: 'Helped fully design + develop features/pages like the landing page, career simulation and redesign critical features like the college simulation platform, roadmap, etc.',
        link: 'https://www.useultra.ai/',
        tools: ['React', 'Tailwind CSS', 'TypeScript', 'MySQL', 'Pinecone (Vector Database)'],
        current: false
    },
    {
        image: 'https://thryvedesign.com/assets/thryvelogo1-UwUeg4tf.png',
        company: 'ThryveDesign',
        position: 'Founder + Developer/Designer',
        dateRange: 'Sept. 2024 — Present',
        description: "ThryveDesign is my web-development agency where I've worked with over 25+ businesses and generated over $20k in revenue. I handle full project life cycles from Figma wireframes to website development & deployment.",
        link: 'https://thryvedesign.com/',
        tools: ['HTML', 'React', 'Tailwind CSS', 'Figma', 'Wordpress', 'Project-Specific Tech'],
        current: false
    },
    {
      image: h4ilogo,
      company: 'Hack4Impact @ UIUC',
      position: 'Software Developer',
      dateRange: 'Sept. 2025 — Present',
      description: 'Working alongside team of developers and designers to create web and mobile apps for global nonprofits. Currently helping build a case management system for a nonprofit focused on helping domestic abuse survivors.',
      link: 'https://uiuc.hack4impact.org/',
      tools: ['React', 'Tailwind CSS', 'TypeScript', 'Python', 'Supabase', 'MongoDB', 'PostgreSQL', 'Figma'],
      current: false
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div 
      className='flex flex-col gap-y-2 font-semibold pb-4'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
        <motion.h3 
          className="one-title text-[#e06d43] relative mb-2"
          variants={titleVariants}
        >
          Current + Previous Work Experience
        </motion.h3>
        <motion.div 
          className='flex flex-col gap-y-4'
          variants={containerVariants}
        >
            <motion.div 
                className={`
                    w-full p-8 mb-4 rounded-md bg-gradient-to-tr from-slate-200/40 to-[#e06d43] from-[75%] flex flex-col text-slate-600 text-base relative gap-y-4
                    `
                }
                variants={cardVariants}
            >
                <div>
                    <h2 className='text-slate-900 text-lg'>
                        IBM
                    </h2>
                    <div className='flex md:flex-row flex-col justify-between w-full'>
                        <h3>
                            Information Architecture Intern
                        </h3>
                        <h3 className='max-md:font-normal'>
                            Summer 2026, Austin TX
                        </h3>
                    </div>
                </div>

                <p className='font-normal'>
                    Working on IBM's web ecosystem: building AI agents, running website audits & experiments, implementing web APIs, etc.
                </p>

                

            </motion.div>
            {experiences.map((experience, index) => (
            <motion.div 
                key={index} 
                className={`
                    w-full p-8 rounded-md bg-gradient-to-b from-slate-200/40 to-slate-100 to-70% flex flex-col text-slate-600 text-base relative gap-y-4
                    `
                }
                variants={cardVariants}
            >
                {!experience.current 
                    ? 
                    <a href={experience.link} target='_blank' className='p-3 rounded-full text-slate-100  bg-slate-900 absolute right-4 md:-right-4 -top-4 shadow-md transition transform duration-300 hover:scale-[1.04]'> 
                        <HiOutlineExternalLink className='rounded-md size-5' />
                    </a>
                    :
                    <a href={experience.link} target='_blank' className='flex text-xs items-center gap-2 px-3 py-2 rounded-md text-slate-100  bg-slate-900 absolute right-4 md:-right-4 -top-4 shadow-md transition transform duration-300 hover:scale-[1.04]'> 
                        Currently Working <HiOutlineExternalLink className='rounded-md size-4' />
                    </a>
                }

                <div>
                    <h2 className='text-slate-900 text-lg'>
                        {experience.company}
                    </h2>
                    <div className='flex md:flex-row flex-col justify-between w-full'>
                        <h3>
                            {experience.position}
                        </h3>
                        <h3 className='max-md:font-normal'>
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

                

            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Experience