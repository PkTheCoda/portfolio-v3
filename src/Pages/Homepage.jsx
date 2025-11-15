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
    { 
      icon: <FaLinkedin size={18} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/pranav-konjeti/', '_blank', 'noopener,noreferrer') 
    },
    { 
      icon: <FaGithub size={18} />, 
      label: 'Github', 
      onClick: () => window.open('https://github.com/PkTheCoda', '_blank', 'noopener,noreferrer') 
    },
    { 
      icon: <MdEmail size={18} />, 
      label: 'Email', 
      onClick: () => window.open('mailto:pranavkonjeti@gmail.com', '_blank', 'noopener,noreferrer') 
    },
    { 
      icon: <FaCalendarAlt size={18} />, 
      label: 'Coffee Chat', 
      onClick: () => window.open('https://cal.com/pranavkonjeti/15min', '_blank', 'noopener,noreferrer') 
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-slate-100 flex items-center justify-center font-fig pt-28 relative'>
        <div className='w-full h-4 mb-4 pattern-block absolute top-0'></div>
        <div className='w-full h-4 pattern-block absolute bottom-0'></div>
          <Dock 
            items={DockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        <div className='max-w-[40rem] pt-10 w-full mx-auto px-4'>
          <Hero />
           <PatternBlock />
           <Experience />
           <PatternBlock />
           <Designs />
           {/* <PatternBlock />
           <Projects /> */}
           <PatternBlock />
           <Misc />
        </div>
      </div>
    </>
  )
}

export default Homepage