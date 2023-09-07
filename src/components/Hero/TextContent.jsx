import React from 'react'
import{AiFillStar,AiFillApple} from 'react-icons/ai'

const TextContent = () => {
  return (
    <div   >
      <p>Ahead app</p>
      <h1 className='font-semibold text-2xl md:text-4xl lg:text-7xl font-light'>
        Master your life by mastering emotions
      </h1>
      <div className='flex'>
        <div className="flex p-2">
           <div>
            <AiFillApple/>
           </div>
           <div>
            <h1>Download on the </h1>
            <h1>AppStore</h1>
           </div>
        </div>
        <div className="rating">
          <div className='flex'>
          <AiFillStar color='gold'/>
            <AiFillStar color='gold'/>
            <AiFillStar color='gold'/>
            <AiFillStar color='gold'/>
            <AiFillStar color='gold'/>
          </div>
          <p>100+ AppStore reviews</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default TextContent