import React from 'react'
import { motion } from 'framer-motion'

const PatternBlock = () => {
  return (
    <motion.div 
      className='w-full h-4 mb-4 pattern-block'
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformOrigin: 'left' }}
    >
    </motion.div>
  )
}

export default PatternBlock