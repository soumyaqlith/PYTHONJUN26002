import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to="/" className='bg-red-600'>Home </Link>
        <Link to="/service">Service </Link>
    </div>
  )
}

export default Navbar