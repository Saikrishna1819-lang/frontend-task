import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav  className='border border-b bg-[#2c4143] p-[12px] fixed w-full z-20 top-0'>
        <div>
            <Link to="/">
            <img src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"></img>
            </Link>
            <ul>
                <li><Link to='/aboutUs'></Link>About Us</li>
                <li><Link to='/contact'></Link>Contact Us</li>
                
            </ul>
        </div>

    </nav>
  )
}

export default Navbar