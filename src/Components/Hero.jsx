import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import figmaIcon from "../assets/figmasvg.svg";
import uiuclogo from "../assets/uiuclogo.png";
import headshot from "../assets/headshot.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <motion.div 
        className="font-fig pb-4 tracking-tight flex flex-col gap-y-2 font-medium relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={headshot}
          className="size-20 border-2 border-slate-400 shadow-xl rounded-full object-cover"
          alt=""
          variants={itemVariants}
        />

        <motion.h3 
          className="two-title text-[#dd3e05] relative"
          variants={itemVariants}
        >
          Hey, I'm <span className="font-semibold one-title font-splash relative bottom-0.5">Pranav Konjeti!</span>
        </motion.h3>

        <motion.div 
          className="three-title relative"
          variants={itemVariants}
        >
          <div className="inline">I'm an 18 y/o developer </div>
          <div className="text-slate-600 inline">
            building
            <FaGithub className="inline-block mx-2 text-black size-8 relative bottom-1" />
            impactful, user-facing software emphasizing
            <img src={figmaIcon} className="size-8 inline-block mx-2" alt="" />
            UI/UX, functionality, and design.
          </div>
        </motion.div>

        <motion.div 
          className="font-normal one-title text-slate-600 mt-2 tracking-normal"
          variants={itemVariants}
        >
          Whether it's {' '}
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
          I'm also currently studying Computer Science <br /> @ <span className="font-semibold">The University of Illinois (UIUC).</span>
        </motion.div>
        
      </motion.div>
    </>
  );
};

export default Hero;
