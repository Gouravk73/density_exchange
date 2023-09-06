import React from 'react'

const NavBar = () => {
  return (
    <nav  >
      <ul className="flex space-x-16">
        <li>
          <a href="#emotion" className="   ">Emotion</a>
        </li>
        <li>
          <a href="#manifesto" className="  ">Manifesto</a>
        </li>
        <li>
          <a href="#self-awareness" className="  ">Self awareness test</a>
        </li>
        <li>
          <a href="#work-with-us" className="  ">Work With Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar