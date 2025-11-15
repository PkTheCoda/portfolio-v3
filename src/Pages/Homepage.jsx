import React from 'react'
import Hero from '../Components/Hero'
import Dock from '../Components/Dock'
import { FaLinkedin, FaGithub, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PatternBlock from '../Components/PatternBlock';
import Experience from '../Components/Experience';
import Misc from '../Components/Misc';
import Projects from '../Components/Projects';
import Designs from '../Components/Designs';





const Homepage = () => {

  const DockItems = [
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => alert('Home!') },
    { icon: <FaGithub size={18} />, label: 'Github', onClick: () => alert('Archive!') },
    { icon: <MdEmail size={18} />, label: 'Email', onClick: () => alert('Profile!') },
    { icon: <FaCalendarAlt size={18} />, label: 'Coffee Chat', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <div className='min-h-screen bg-slate-100 flex items-center justify-center font-fig pt-10 relative'>
        <div className='w-full h-4 mb-4 pattern-block absolute top-0'></div>
        <div className='w-full h-4 pattern-block absolute bottom-0'></div>
          <Dock 
            items={DockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        <div className='max-w-[40rem] py-10 w-full mx-auto'>
          <Hero />
           <PatternBlock />
           <Experience />
           <PatternBlock />
           <Designs />
           <PatternBlock />
           <Projects />
           <PatternBlock />
           <Misc />
        </div>
      </div>
    </>
  )
}

export default Homepage