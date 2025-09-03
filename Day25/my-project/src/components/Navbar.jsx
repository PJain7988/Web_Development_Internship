import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" className={({isActive}) => isActive ? "bg-green-600 text-5xl flex flex-grid gap-3 font-semibold" : ""}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "bg-red-600 text-5xl flex flex-grid gap-3 font-semibold" : ""}>About</NavLink>
      <NavLink to="/Contact" className={({isActive}) => isActive ? "bg-orange-600 text-5xl flex flex-grid gap-3 font-semibold" : ""}>Contact</NavLink>
      <NavLink to="*" className={({isActive}) => isActive ? "bg-gray-600 text-5xl flex flex-grid gap-3 font-semibold" : ""}>NotFound</NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="*">NotFound</Link> */}
    </div>
  )
}

export default Navbar
