'use client'
import React from 'react';
import { motion } from 'framer-motion';
import EqBeats from './EqBeats';
import TextContent from './TextContent';
import ImageSection from './ImageSection';

const Hero = () => {
  // Define animation variants for the left and right content
  const left = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const right = {
    hidden: { x: 0, opacity: 0, scale: 0.1 },  
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },  
  };

  return (
    <div className='px-4 py-8'>
      <div className='bg-purple-100 w-[97vw] min-h-[80vh] flex justify-center items-center p-8 rounded-3xl'>
        {/* Left Content */}
        <motion.div
          className='w-1/2 py-4'
          initial='hidden'
          animate='visible'
          variants={left}
        >
          <TextContent />
        </motion.div>

         
        <motion.div
          className='w-1/2 py-4'
          initial='hidden'
          animate='visible'
          variants={right}
        >
          <ImageSection />
        </motion.div>
      </div>
      <EqBeats />
    </div>
  );
};

export default Hero;
