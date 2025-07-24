import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between text-white bg-indigo-950 font-bold">
        <div className="srmu content-center p-5">SRMU</div>
        <ul className=" p-5 flex space-x-4 justify-evenly">
            {/* anker (a) lagane se page reload hota hai bara bar to bar bar reload na ho uske liye hum link (Link) Tag ka use karte hai aue sath mein import bhi karte hai uske liye (import Link) likhna padta hai aur Link option choose karo */}
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/services"><li>Services</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/portfolio"><li>Portfolio</li></Link>
            <Link href="/faq"><li>FAQ</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
