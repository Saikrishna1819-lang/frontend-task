import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav  className='border border-b bg-[#2c4143] p-[20px] fixed w-full z-20 top-0'>
        <div className='flex justify-between'>
            <Link to="/">
            <img src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"></img>
            </Link>
            <ul className='flex text-white'>
                <li><Link className='text-[18px]' to='/aboutUs'>About Us</Link></li>
                <li><Link to='/contact'></Link>Contact Us</li>
                <li>Comming Soon</li>
                
            </ul>
        </div>

    </nav>
  )
}

export default Navbar