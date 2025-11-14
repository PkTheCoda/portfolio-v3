import React from 'react'
import Hero from '../Components/Hero'
import Dock from '../Components/Dock'
import { FaHome, FaArchive, FaAccessibleIcon, FaRegArrowAltCircleDown } from "react-icons/fa";




const Homepage = () => {

  const DockItems = [
    { icon: <FaHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <FaHome size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <FaHome size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <FaHome size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
        <div className='max-w-[42rem] py-10 w-full mx-auto'>
          <Hero />
           <div className='py-10'>
              <Dock 
                items={DockItems}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
              />
           </div>
        </div>
      </div>
    </>
  )
}

export default Homepage