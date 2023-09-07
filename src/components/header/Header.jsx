import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import Button from './Button'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white  '>

    <div className='flex justify-between items-center px-20 py-4 min-h-16'>
        <Logo/>
        <NavBar/>
        <Button/>
    </div>
    </div>

  )
}

export default Header