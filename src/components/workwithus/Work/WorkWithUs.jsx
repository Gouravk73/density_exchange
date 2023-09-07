import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const WorkWithUs = () => {
  return (
    <div className='h-[75vh] p-6  '>
        <div className=' bg-purple-100  rounded-3xl py-2	px-16'>
        <p className='text-[2rem] font-semibold'>Work With Us</p>
        <div className='flex gap-2 '>
            <div className='w-1/2'><LeftSection/></div>
            <div className='w-1/2 '  ><RightSection/></div>
        </div>
        
        
        </div>
    </div>
  )
}

export default WorkWithUs