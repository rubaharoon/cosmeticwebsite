import React from "react";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#FDF9EE] shadow-md">
        <img src="../images/logo.png" alt="NUOVA Logo" className="h-10" />
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-[#000000] hover:text-[#677E53]">HOME</a></li>
          <li><a href="/shop" className="text-[#000000] hover:text-[#677E53]">SHOP</a></li>
          <li><a href="/about" className="text-[#000000] hover:text-[#677E53]">ABOUT US</a></li>
          <li><a href="/contact" className="text-[#000000] hover:text-[#677E53]">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
        </button>
        <button>
          <a href="/login">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5M8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0"/></svg>
      </a>  </button>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/><path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"/></g></svg>
        </button>
      </div>
    </header>
  );
};
