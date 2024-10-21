import React from "react";

export default function Profile() {
    return (
      <div className="min-h-screen bg-[#f9f4ee] flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          
            <h1 className="text-3xl font-semibold text-[#C4B494]">Hello, khadija!</h1>
          
  
          {/* Log out Button */}
          <button className="bg-[#5F734C] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#4f5e3c] transition-all">
            Log out
          </button>
        </header>
  
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="hidden md:block w-1/4 bg-[#6F5E3C]"></div>
  
          {/* Main Content */}
          <div className="flex-1 bg-[#f9f4ee] flex flex-col items-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center mt-4">
              {/* Profile Image */}
              <div className="relative mb-4">
                <img
                  src="../images/profile.png" 
                  alt="Khadija"
                  className="w-24 h-24 rounded-full mb-2"
                />
  
                {/* Pencil Icon Positioned on Profile Image */}
                <div className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 p-1 rounded-full shadow-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#677E53" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                </div>
              </div>
  
              {/* User Info */}
              <h2 className="text-2xl font-semibold text-[#000000]">khadija</h2>
              <p className="text-[#6F5E3C]">khadija@gmail.com</p>
            </div>
  
            {/* Edit Profile Section */}
            <div className="mt-8 w-full max-w-lg px-8">
              <h3 className="text-lg font-semibold mb-4">Edit your profile:</h3>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Edit your firstName"
                  className="p-3 border border-gray-300 rounded-lg bg-[#f5f1ec] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Edit your lastName"
                  className="p-3 border border-gray-300 rounded-lg bg-[#f5f1ec] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Edit your email"
                  className="p-3 border border-gray-300 rounded-lg bg-[#f5f1ec] focus:outline-none"
                />
                <button className="bg-[#5F734C] text-white py-3 rounded-lg">
                  Save changes
                </button>
              </form>
            </div>
  
            {/* Orders Section */}
            <div className="mt-12 w-full max-w-5xl px-8">
              <h3 className="text-lg font-semibold mb-4">Your orders:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Order Card */}
                <div className="flex flex-col shadow-lg rounded-lg p-4">
                  <img
                    src="../images/cosmeticProduct.png" // Replace with the actual path to product image
                    alt="Hydra Boost Moisturizer"
                    className="w-full h-48 object-cover mb-4 rounded-lg" // Rounded corners applied
                  />
                  <h4 className="text-lg font-semibold">Hydra Boost Moisturizer</h4>
                  <p className="text-gray-500 text-sm mb-2">
                    A hydrating moisturizer that nourishes and revitalizes the skin.
                  </p>
                  <p className="font-bold text-lg">$54</p>
                </div>
  
                {/* Repeat Order Card */}
                <div className="flex flex-col bg-white shadow-lg rounded-lg p-4">
                  <img
                    src="/images/cosmeticProduct.png" // Replace with the actual path to product image
                    alt="Hydra Boost Moisturizer"
                    className="w-full h-48 object-cover mb-4 rounded-lg" // Rounded corners applied
                  />
                  <h4 className="text-lg font-semibold">Hydra Boost Moisturizer</h4>
                  <p className="text-gray-500 text-sm mb-2">
                    A hydrating moisturizer that nourishes and revitalizes the skin.
                  </p>
                  <p className="font-bold text-lg">$54</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  