'use client'
import React from 'react'
import ghostpurple from '../../../public/hero/ghostpurple.png'
import { motion } from 'framer-motion';
import Image from 'next/image'
 
const LeftImage = () => {
  const left = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const animationGhost = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    
  };

  const animationVariants = {
    initial: {
      transform: 'rotate(0deg) translateX(500px)',
    },
    animate: {
      transform: 'rotate(30deg) translate(-100px)',
      transition: { duration: 2 },
    },
  };

  return (
    <div className='flex flex-col items-center justify-center h-[50rem] w-96 overflow-hidden'>
      <motion.div
        className='p-10'
        initial='hidden'
        animate='visible'
        variants={left}
      >
        <p>Built out of frustration</p>
        <h1 className='font-medium text-5xl'>Meet the ahead app</h1>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={animationGhost}
        className=' w-56 h-56 flex justify-center items-center relative right-10  bg-white rounded-full'
        style={{ zIndex: 10 }}
      >
        <Image src={ghostpurple} alt='ghostpurple' width={100} height={100} />
      </motion.div>

      <motion.div
        initial='initial'
        animate='animate'
        variants={animationVariants}
        className='w-[25rem] h-[25rem] relative top-1 bg-amber-300 rounded-full overflow-hidden'
        style={{ zIndex: 1, overflow: 'hidden' }}
      ></motion.div>
    </div>
  );
};

export default LeftImage;
