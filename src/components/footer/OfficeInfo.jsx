import React from 'react'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'

const OfficeInfo = () => {
  return (
    <div className=" flex mt-4 text-center  px-8">
        <div className='flex '>
            <div className=' w-[1.5rem] h-[1.5rem] p-1 bg-green-200 rounded-full'><ImLocation2/></div>
            <div className='px-2'><span className="block"> Auguststraße 26, 10117, Berlin</span></div>
        

        </div>
        <div className='flex px-8'>
            <div className=' w-[1.5rem] h-[1.5rem] p-1 bg-green-200 rounded-full'><MdEmail/></div>
            <div className='px-2'><span className="block">hi@heade-app.com</span></div>
        

        </div>
          
        </div>
  )
}

export default OfficeInfo