import React from "react";
import { FaGithub } from "react-icons/fa";
import figmaIcon from "../assets/figmasvg.svg";
import uiuclogo from "../assets/uiuclogo.png";
import headshot from "../assets/headshot.png";

const Hero = () => {
  return (
    <>
      <div className="font-fig pb-4 tracking-tight flex flex-col gap-y-2 font-medium relative">
        <img
          src={headshot}
          className="size-20 border-2 border-slate-400 shadow-xl rounded-full object-cover"
          alt=""
        />

        <h3 className="two-title text-[#dd3e05] relative">
          Hey, I'm <span className="font-semibold">Pranav Konjeti!</span>
        </h3>

        <div className="three-title relative">
          <div className="inline">I'm an 18 y/o developer </div>
          <div className="text-slate-600 inline">
            building
            <FaGithub className="inline-block mx-2 text-black size-8 relative bottom-1" />
            impactful, user-facing software emphasizing
            <img src={figmaIcon} className="size-8 inline-block mx-2" alt="" />
            UI/UX, functionality, and design.
          </div>
        </div>

        <div className="font-normal one-title text-slate-600 mt-2 tracking-normal">
          Whether it’s {' '}
          <a 
            href="https://thryvedesign.com"
            target="_blank"
            className="hyperlink"
          >
            creating websites for clients
          </a>
          {' '}or{' '}
          <a 
            href="https://github.com/PkTheCoda"
            target="_blank"
            className="hyperlink"
          >
            working on personal projects 
          </a>, I focus on
          thoughtful design and making something meaningful.
          <br />
          <br />
          I'm also a current first-year student studying <br /> Computer Science @ <span className="font-semibold">The University of Illinois (UIUC).</span>
        </div>
        
      </div>
    </>
  );
};

export default Hero;
