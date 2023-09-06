import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import Button from './Button'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-20 py-4 min-h-16'>
        <Logo/>
        <NavBar/>
        <Button/>
    </div>
  )
}

export default Header