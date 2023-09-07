'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Signature = () => {
  const variants = {
    hidden: { x: '-100%' }, // Initial position (fully hidden to the left)
    visible: { x: 0 }, // Final position (visible)
  };

  return (
    <motion.div
      className='flex flex-col justify-center items-center gap-4'
      initial='hidden' // Set initial state to hidden
      animate='visible' // Animate to visible when it enters the viewport
      variants={variants} // Define animation variants
      transition={{ duration: 0.5 }} // Animation duration
    >
      <p className='font-normal'>We take privacy seriously</p>
      <p className='font-semibold text-[1.6rem]'>Before you get started</p>
      <p className='font-light'>
        We wont share your answers with anyone hiahdba jhasbdhas
      </p>
      <p className='font-light'>djahbfdajs dajhsbdash djahdbjaskhb dakjhdb aj</p>
      <p>
        With love, <span className='font-cursive'>Sign</span>
      </p>
      <button className='rounded-full bg-black text-white py-2 px-5'>
        Start a Test
      </button>
      <p>Take only 5 minutes</p>
    </motion.div>
  );
};

export default Signature;
