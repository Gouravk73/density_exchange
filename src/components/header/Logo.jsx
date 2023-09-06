'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import happy from '../../../public/header/happy.png'
import smile from '../../../public/header/smile.png'
const Logo = () => {
    const [isHappy, setIsHappy] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHappy(true);
      } else {
        setIsHappy(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
        <Image src={isHappy ? happy : smile} alt='' width={50} height={50} onClick={()=>setIsHappy(!isHappy)}/>
    </div>
  )
}

export default Logo