'use client'
import React, { useRef } from 'react';
import list from './ListOfSelfImprovement';
import { motion, useScroll } from 'framer-motion';

const ListToDisplay = () => {
    const { scrollYProgress } = useScroll();
    const containerRef = useRef(null);

    return (
        <div className='w-full flex flex-col justify-center items-center' ref={containerRef}>
            {list.map((item, index) => (
                <motion.div
                    style={{
                        scale: scrollYProgress,
                        opacity: scrollYProgress,
                    }}
                    className='flex flex-col justify-center w-1/2 py-4'
                    key={item.id}
                >
                    <p className='py-4'>{item.title}</p>
                    <p className='py-4'>{item.content}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default ListToDisplay;

