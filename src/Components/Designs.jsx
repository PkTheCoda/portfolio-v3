import React from 'react'
import { motion } from 'framer-motion'
import designPortfolio from '../assets/asset-dev-portfolio.pdf'

const Designs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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

  return (
    <motion.div 
      className='font-medium mb-4 flex flex-col gap-y-2 relative'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
        <motion.h3 
          className="one-title text-[#e06d43] relative"
          variants={itemVariants}
        >
            My Design Engineering Background
        </motion.h3>
        <motion.h3 
          className='text-slate-600 w-[90%] md:w-[75%] lg:w-[90%]'
          variants={itemVariants}
        >
            If you haven't noticed by now, I <span className="font-semibold">love everything UI/UX & design</span>. 
            Attached below is my design portfolio where you can see examples of sites I've designed + developed. 
            You can find more on my <a href="https://thryvedesign.com" target='_blank' className='hyperlink'>agency site</a> as well!
        </motion.h3>
        <motion.div 
          className='max-w-[13rem] lg:max-w-[18rem] -rotate-2 text-slate-600 p-6 bg-slate-100 rounded-md border-2 border-slate-300/70 shadow-md absolute lg:-top-16 -right-[4rem] lg:-right-[12rem] xl:-right-[14rem] hidden md:flex flex-col gap-y-4'
          variants={itemVariants}
        >
            <h1 className='font-splash text-lg lg:two-title text-center'>
                My Design<br /> <span className=''>Philosophy</span>
            </h1>
            <p className='text-xs lg:text-sm font-normal'>
                Today, AI makes it very easy to build something functional, but good design still takes time and intention.
                I believe that clean and accessible design makes a huge difference in the success of any product.
                <br />
                <br />
                When I build or work on anything, I place a ton of emphasis on design. To me, it's a part of the product, 
                not an afterthought.
            </p>
        </motion.div>
        <motion.div 
          className="w-full flex flex-col items-center"
          variants={itemVariants}
        >
            <iframe
                src={designPortfolio}
                title="Design Portfolio"
                width="100%"
                height="600px"
                className="rounded-lg border"
                style={{ minHeight: '500px' }}
            >
                This browser does not support PDFs.
                <a href={designPortfolio}>Download PDF</a>
            </iframe>
            <div className="text-[13px] mt-2 text-slate-500">
                If the PDF viewer doesn't load, you can{" "}
                <a
                href={designPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
                >
                click here to download or view directly.
                </a>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Designs