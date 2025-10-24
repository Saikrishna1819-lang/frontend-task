import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav  className='border border-b bg-[#2c4143] py-[12px] px-[12%] fixed w-full z-20 top-0'>
        <div className='flex justify-between  items-center'>
            <Link to="/">
            <img src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"></img>
            </Link>
            <ul className='flex text-white gap-[32px] items-center  '>
                <li><Link className='text-[18px]' to='/aboutUs'>About Us</Link></li>
                <li><Link className='text-[18px]' to='/contact'>Contact Us</Link></li>
                <li className='text-[18px] border  px-4 py-4 rounded-full text-[#8e978d]'>Comming Soon</li>
                
            </ul>
            {/* <div className='text-[#efecd6] md:hidden '>
              <FiMenu/>
            </div> */}
        </div>

    </nav>
  )
}

export default Navbar