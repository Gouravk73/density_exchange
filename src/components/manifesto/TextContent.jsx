import React from 'react'
import { motion } from 'framer-motion';

const TextContent = () => {
    const movement = {
        hidden: { x: 1000, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      };
  return (
    <motion.div
    className=' h-full  w-[100%] p-16 flex flex-col justify-center items-left text-[1rem]'
    initial='hidden'
    animate='visible'
    variants={movement}>
        <p className='py-5  '>A A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.</p>
        <p className='py-5  '>Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
    </motion.div>
  )
}

export default TextContent