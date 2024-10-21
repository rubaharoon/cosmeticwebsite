import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-[#68794c] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Flex Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section (About NUOVA) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About NUOVA</h3>
            <p className="text-sm">
              Welcome to Nuova, where beauty meets innovation. Our mission is to empower individuals to embrace their unique beauty with confidence. With a commitment to quality and excellence, we offer a curated collection of cosmetics, skincare, and fragrances crafted to elevate your daily routine.
            </p>
            <div className="flex space-x-2">
              {/* Social Icons */}
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" className="w-6 h-6" /></svg>
                  {/* Social Icon SVG */}
                </a>
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"className="w-6 h-6"/></svg>
                  {/* facebook Icon SVG */}
                 </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"className="w-6 h-6"/> </svg>
                  {/* LinkedIn Icon SVG */}
              </a>
            </div>
          </div>

          {/* Middle Section (Explore) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:underline">Home</a></li>
              <li><a href="#" className="text-sm text-white hover:underline">Shop</a></li>
              <li><a href="#" className="text-sm text-white hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm text-white hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section (Customer Service) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <p className="text-sm">
              Have questions or need assistance? Our dedicated customer service team is here to help. Contact us:
            </p>
            <p className="text-sm font-bold"><strong>Phone:</strong> 0645678923</p>
            <p className="text-sm font-bold"><strong>Email:</strong> NUOVA@gmail.com</p>
          </div>

        </div>

        {/* Footer Copyright */}
        <div className="border-t border-white mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Nuova Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
