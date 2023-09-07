'use client'
import React from 'react';
import Image from 'next/image';
import phone from '../../../public/hero/phone.png';
import ghostgreen from '../../../public/hero/ghostgreen.png';
import ghostwhite from '../../../public/hero/ghostwhite.png';
import ghostpurple from '../../../public/hero/ghostpurple.png';
import GhostImage from './GhostImage';

const ImageSection = () => {
 
  
   
  return (
    <div className="w-[35rem] h-[35rem] rounded-full border-4 border-dashed border-white flex justify-center items-center relative ">
       <GhostImage src={ghostgreen} alt="ghostgreen" classNameIs="absolute top-[68%] right-[50%]" transformInitial="rotate(0deg) translateY(150px)"  transformAnimate="rotate(0deg) translateX(-200px)"/>
       <GhostImage src={ghostpurple} alt="ghostpurple" classNameIs="absolute top-[55%] -right-[2%] "  transformInitial="rotate(0deg) translateY(-190px)" transformAnimate="rotate(10deg) translate(10px)"/>
       <GhostImage src={ghostwhite} alt="ghostwhite" classNameIs="absolute -top-[11%] -left-[0%]"  transformInitial=" rotate(-30deg) translateY(100px)" transformAnimate="rotate(5deg) translate(300px)"/>
    
  
      <div className="m-4 w-4/6 h-4/6 bg-purple-200 rounded-full relative">
        <Image
          src={phone}
          alt="phone"
          width={300}
          height={200}
          className="absolute -top-16 left-2"
        />
      </div>
    </div>
  );
};

export default ImageSection;
