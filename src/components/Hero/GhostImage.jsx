import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GhostImage = ({ src, alt,classNameIs,transformInitial,transformAnimate }) => {
   const animationVariants = {
    initial: {
      transform: transformInitial,
    },
    animate: {
      transform: transformAnimate,
      transition: { DelayNode:0.2, duration: 1.6 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      className= {classNameIs}
    >
      <Image src={src} alt={alt} height={70} width={70} />
    </motion.div>
  );
};

export default GhostImage;
