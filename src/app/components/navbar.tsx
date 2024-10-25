"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-black text-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-3xl font-bold">Nuova</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/shop" className="hover:text-gray-300">Shop</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </nav>

          {/* Burger Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#67753F] hover:text-gray-300 focus:outline-none">
              {/* Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <nav className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="block text-base text-[#67753F]  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</a>
            <a href="/about" className="block text-base text-[#67753F] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</a>
            <a href="/shop" className="block text-base text-[#67753F] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Shop</a>
            <a href="/contact" className="block text-base text-[#67753F] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
