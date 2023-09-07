import React from 'react'
import{AiFillStar,AiFillApple} from 'react-icons/ai'
import DownloadButton from '../common/DownloadButton'

const TextContent = () => {
  return (
    <div   >
      <p className='font-medium py-2'>Ahead app</p>
      <h1 className='font-semibold text-4xl md:text-4xl lg:text-7xl  py-2'>
        Master your life by mastering emotions
      </h1>
      <div className='flex'>
             <DownloadButton/>
         <div className="mt-6 px-2 py-1">
            <div className='flex '>
            <AiFillStar color='gold'/>
              <AiFillStar color='gold'/>
              <AiFillStar color='gold'/>
              <AiFillStar color='gold'/>
              <AiFillStar color='gold'/>
            </div>
            <p>100+ AppStore reviews</p>
         </div>
      </div>
    </div>
  )
}

export default TextContent