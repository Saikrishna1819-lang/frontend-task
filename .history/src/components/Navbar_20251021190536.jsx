// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav  className='border border-b bg-[#2c4143] p-[12px] fixed w-full z-20 top-0'>
//         <div>
//             <Link to="/">
//             <img src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"></img>
//             </Link>
//             <ul>
//                 <li><Link to='/aboutUs'></Link>About Us</li>
//                 <li><Link to='/contact'></Link>Contact Us</li>

//             </ul>
//         </div>

//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg"
            alt="NeoGreens Logo"
            className="h-10"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <a
            href="https://neogreens.com/about-us/"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-green-600 transition"
          >
            About Us
          </a>
          <a
            href="https://neogreens.com/contact-us/"
            className="block px-3 py-2 text-gray-700 font-medium hover:text-green-600 transition"
          >
            Contact Us
          </a>
          <a
            href="https://neogreens.com/product-page/"
            className="block px-3 py-2 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-600 hover:text-white transition"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
