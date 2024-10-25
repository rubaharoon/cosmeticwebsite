"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[#677E53] text-white ">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Brand Name */}
          <div className="text-3xl font-bold">Nuova</div>

          {/* Desktop Menu */}
          
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-white hover:text-[#585c53]">Home</a>
            <a href="/about" className="text-white hover:text-[#585753]">About</a>
            <a href="/shop" className="text-white hover:text-[#585c53]">Shop</a>
            <a href="/contact" className="text-white hover:text-[#585c53]">Contact</a>
            {/* Cart Icon in Desktop Menu */}
            <a href="#" className="relative hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
             </a>
          </nav>

          {/* Cart Icon and Burger Menu Button for Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Icon */}
            <a href="/" className="relative hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
            </a>
            

            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-green-500 hover:text-gray-300 focus:outline-none"
            >
              {/* SVG Icon for Hamburger Menu / Close Button */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#677E53]">
          <nav className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="block text-base text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/about" className="block text-base text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              About
            </a>
            <a href="/shop" className="block text-base text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              Shop
            </a>
            <a href="/contact" className="block text-base text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
