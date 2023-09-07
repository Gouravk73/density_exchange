'use client'
import React from 'react'
import LeftImage from './LeftImage'
import TextContent from './TextContent'

const Manifesto = () => {
    
  return (
    <div className='px-8	   py-8' 
    >
        <div className='bg-amber-100 w-[100%] h-[90vh] flex justify-center    rounded-3xl overflow-hidden'>
        <div className='w-1/2'>
            <LeftImage />
        </div>
        <div className='w-1/2'>
            <TextContent />
        </div>
        </div>
    </div>
  )
}

export default Manifesto