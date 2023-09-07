'use client'
import React, { useState } from 'react'

const VacanciContainer = ({title}) => {
    const[isHover,setIsHover]=useState(false);
    const handleHover=()=>{

    }
  return (
    <div 
        className='flex flex-col h-[30vh] justify-center items-center px-8 bg-yellow-100 mx-2'
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        >
            {title}
            
            <ul>
                <li style={{listStyleType:'dot',listStyle:'initial'}}>
                    Full-time position
                </li>
                <li style={{listStyleType:'dot',listStyle:'initial'}}>
                    Berlin or remote
                </li>
                <li style={{listStyleType:'dot',listStyle:'initial'}}>
                    $65k-85k, 0.5-0.15% equity share options
                </li>
            </ul>
            {isHover && (
        <button className='bg-black text-white px-2 py-1 mt-2'>Apply</button>
      )}
    </div>
  )
}

export default VacanciContainer
