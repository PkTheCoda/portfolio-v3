import React from 'react'
import { FaGithub } from 'react-icons/fa'
import figmaIcon from '../assets/figmasvg.svg'
import uiuclogo from '../assets/uiuclogo.png'

const Hero = () => {
  return (
    <div className='font-fig py-4 tracking-tight flex flex-col gap-y-2 font-medium'>
      <h3 className='two-title text-[#dd3e05]'>
        Hey, I'm <span className="font-semibold">Pranav Konjeti!</span>
      </h3>
      <div className='three-title'>  
        <div className='inline'>I'm an 18 y/o developer {' '}</div>
          <div className="text-slate-600 inline">
             building 
            <FaGithub className='inline-block mx-2 text-black size-8 relative bottom-1'/>
            user-facing software that emphasizes
            <img src={figmaIcon} className='size-8 inline-block' alt="" />
            beautiful UI/UX and design. I currently study {' '}
            {/* <img src={uiuclogo} className='w-[18px] mx-2 inline-block relative bottom-0.5' alt="" /> */}
            CS at UIUC. 
          </div>
      </div>
      <h5 className='text-slate-400'>
        TL;DR: I enjoy building cool sh*t that looks good
      </h5>
    </div>
  )
}

export default Hero