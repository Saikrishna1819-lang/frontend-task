// // import React, { useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import { FiMenu, FiX } from 'react-icons/fi'

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen)
// //   }

// //   const closeMenu = () => {
// //     setIsMenuOpen(false)
// //   }

// //   return (
// //     <nav className='border border-b-[#8e978d] bg-[#2c4143] py-3 lg:py-[12px]   px-4 md:px-12 lg:px-[12%] fixed w-full z-50 top-0'>
// //       <div className='flex justify-between items-center py-[6px] md:py-[12px] lg:py-[18px] max-w-7xl mx-auto'>
// //         {/* Logo */}
// //         <Link to="/" onClick={closeMenu}>
// //           <img 
// //             src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" 
// //             alt="NeoGreens Logo" 
// //             className=''
// //           />
// //         </Link>

// //         {/* Desktop Menu */}
// //         <ul className='hidden lg:flex text-white gap-6 lg:gap-8 font-medium items-center'>
// //           <li>
// //             <Link 
// //               className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
// //               to='/aboutUs'
// //             >
// //               About Us
// //             </Link>
// //           </li>
// //           <li>
// //             <Link 
// //               className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
// //               to='/contact'
// //             >
// //               Contact Us
// //             </Link>
// //           </li>
// //           <li>
// //             <span className='text-base lg:text-[18px] border border-[#8e978d] px-4 py-4 rounded-full text-[#8e978d] cursor-default'>
// //               Coming Soon
// //             </span>
// //           </li>
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <button 
// //           className='lg:hidden text-[#efecd6] text-2xl p-1'
// //           onClick={toggleMenu}
// //           aria-label="Toggle menu"
// //         >
// //           {isMenuOpen ? <FiX /> : <FiMenu />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div className={`md:hidden absolute top-full left-0 w-full bg-[#2c4143] border-t border-gray-600 transition-all duration-300 ease-in-out ${
// //         isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
// //       }`}>
// //         <ul className='flex flex-col p-4 space-y-4'>
// //           <li>
// //             <Link 
// //               className='block text-white text-lg py-2 px-4 hover:bg-[#3a5254] rounded transition-colors duration-200' 
// //               to='/aboutUs'
// //               onClick={closeMenu}
// //             >
// //               About Us
// //             </Link>
// //           </li>
// //           <li>
// //             <Link 
// //               className='block text-white text-lg py-2 px-4 hover:bg-[#3a5254] rounded transition-colors duration-200' 
// //               to='/contact'
// //               onClick={closeMenu}
// //             >
// //               Contact Us
// //             </Link>
// //           </li>
// //           <li>
// //             <span className='block text-lg py-2 px-4 text-[#8e978d] border border-[#8e978d] rounded-full text-center cursor-default'>
// //               Coming Soon
// //             </span>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Overlay for mobile menu */}
// //       {isMenuOpen && (
// //         <div 
// //           className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-16'
// //           onClick={closeMenu}
// //         />
// //       )}
// //     </nav>
// //   )
// // }

// // export default Navbar




// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FiMenu, FiX } from 'react-icons/fi'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const closeMenu = () => {
//     setIsMenuOpen(false)
//   }

//   return (
//     <nav className='border border-b-[#8e978d] bg-[#2c4143] py-3 lg:py-[12px] px-4 md:px-12 lg:px-[12%] fixed w-full z-50 top-0'>
//       <div className='flex justify-between items-center py-[6px] md:py-[12px] lg:py-[18px] max-w-7xl mx-auto'>
//         {/* Logo */}
//         <Link to="/" onClick={closeMenu}>
//           <img 
//             src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" 
//             alt="NeoGreens Logo" 
//             className=''
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='hidden lg:flex text-white gap-6 lg:gap-8 font-medium items-center'>
//           <li>
//             <Link 
//               className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
//               to='/aboutUs'
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link 
//               className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
//               to='/contact'
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <span className='text-base lg:text-[18px] border border-[#8e978d] px-4 py-4 rounded-full text-[#8e978d] cursor-default'>
//               Coming Soon
//             </span>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button 
//           className='lg:hidden text-[#efecd6] text-2xl p-1'
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu - Full Screen Height */}
//       <div className={`lg:hidden fixed top-16 left-0 w-full h-screen bg-[#2c4143] z-40 transition-all duration-300 ease-in-out ${
//         isMenuOpen 
//           ? 'opacity-100 visible translate-y-0' 
//           : 'opacity-0 invisible -translate-y-4'
//       }`}>
//         <ul className='flex flex-col items-center justify-center h-full space-y-8'>
//           <li className='transform transition-all duration-300 delay-100'>
//             <Link 
//               className='block text-white text-2xl py-4 px-6 hover:text-[#8e978d] transition-all duration-200 hover:scale-110' 
//               to='/aboutUs'
//               onClick={closeMenu}
//             >
//               About Us
//             </Link>
//           </li>
//           <li className='transform transition-all duration-300 delay-150'>
//             <Link 
//               className='block text-white text-2xl py-4 px-6 hover:text-[#8e978d] transition-all duration-200 hover:scale-110' 
//               to='/contact'
//               onClick={closeMenu}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li className='transform transition-all duration-300 delay-200'>
//             <span className='block text-2xl py-4 px-8 text-[#8e978d] border-2 border-[#8e978d] rounded-full text-center cursor-default transition-all duration-200 hover:scale-110'>
//               Coming Soon
//             </span>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='border border-b-[#8e978d] bg-[#2c4143] py-3 lg:py-[12px] px-4 md:px-12 lg:px-[12%] fixed w-full z-50 top-0 h-20 md:h-24'>
      <div className='flex justify-between items-center py-[6px] md:py-[12px] lg:py-[18px] max-w-7xl mx-auto h-full'>
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img 
            src="https://neogreens.com/wp-content/uploads/2025/06/neogreens-logo.svg" 
            alt="NeoGreens Logo" 
            className='h-8 md:h-10'
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex text-white gap-6 lg:gap-8 font-medium items-center'>
          <li>
            <Link 
              className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
              to='/aboutUs'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              className='text-base lg:text-lg hover:text-[#8e978d] transition-colors duration-200' 
              to='/contact'
            >
              Contact Us
            </Link>
          </li>
          <li>
            <span className='text-base lg:text-[18px] border border-[#8e978d] px-4 py-4 rounded-full text-[#8e978d] cursor-default'>
              Coming Soon
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-[#efecd6] text-2xl p-1'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Height */}
      <div className={`lg:hidden fixed top-20 left-0 w-full h-screen bg-[#2c4143] z-40 transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4'
      }`}>
        <ul className='flex flex-col items-center justify-center h-full space-y-8'>
          <li className='transform transition-all duration-300 delay-100'>
            <Link 
              className='block text-white text-2xl py-4 px-6 hover:text-[#8e978d] transition-all duration-200 hover:scale-110' 
              to='/aboutUs'
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className='transform transition-all duration-300 delay-150'>
            <Link 
              className='block text-white text-2xl py-4 px-6 hover:text-[#8e978d] transition-all duration-200 hover:scale-110' 
              to='/contact'
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='transform transition-all duration-300 delay-200'>
            <span className='block text-2xl py-4 px-8 text-[#8e978d] border-2 border-[#8e978d] rounded-full text-center cursor-default transition-all duration-200 hover:scale-110'>
              Coming Soon
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar