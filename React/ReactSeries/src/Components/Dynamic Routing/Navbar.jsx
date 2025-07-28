import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav className='mt-10 items-center justify-center flex gap-4'>

        <Link to='/'>Home</Link>
        <Link to='/user'>Users</Link>
        <Link to='/about'>About</Link>
    </nav>
    </>
  )
}

export default Navbar