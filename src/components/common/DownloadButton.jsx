import React from 'react'
import { AiFillStar, AiFillApple } from 'react-icons/ai';

const DownloadButton = () => {
  return (
    <div className="flex mt-6 bg-black text-white   px-2 py-1 rounded-[5px]">
          <div className="text-3xl  mr-2">
            <AiFillApple size={'2rem'}/>
          </div>
          <div>
            <h1 className="text-[0.5rem] ">Download on the</h1>
            <h1 className="text-[1rem] font-semibold">App Store</h1>
          </div>
        </div>
  )
}

export default DownloadButton