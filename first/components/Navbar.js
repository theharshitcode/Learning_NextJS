import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar pl-[20px] pr-[20px] flex justify-between items-center bg-gray-800 text-white p-4'>
       <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/contact"><li>Contact</li></a>
        <a href="/skills"><li>Skills</li></a>
      </ul>
    </div>
  )
}

export default Navbar
