"use client";
// pages/contact.js
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    isClicked:true
    setIsClicked(true);
  };

  return (
   
    <div className="min-h-screen flex items-center justify-center bg-[#F8F4EB] py-10">
      <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-lg relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Left Section (Image + Text) */}
          <div className="relative">
          {/* "Contact Us" Heading */}
            <h2 className="text-3xl font-semibold text-[#677E53] mb-2">Contact Us</h2>
            <p className="text-lg font-bold text-[#C4B494] mb-4">We'd Love to Hear From You!</p>
            <p className="text-[#000000] mb-8">
              At Nuova, we value our customers and are always here to help with any questions, feedback, or concerns you may have. 
              Whether you need assistance with a product, want to learn more about our brand, or have any other inquiries, 
              please feel free to get in touch with us.
            </p>
{/* Image Section */}
<div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/images/formpic.png"
            alt="Product Bottle"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg w-[544px] h-[586px]"
          />
        </div>
      </div>
         
         
          </div>

          {/* Right Section (Form) */}
          <div className="bg-[#F3EDE4] p-8 rounded-xl shadow-md flex flex-col justify-center">
                      <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#677E53]">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border border-[#EAE2CB] border-opacity-50 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#677E53]">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border border-[#EAE2CB] border-opacity-50 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#677E53]">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border border-[#EAE2CB] border-opacity-50 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#677E53]">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-2 w-full border border-[#EAE2CB] border-opacity-50 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>

              <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 text-[#C4B494] font-semibold">
          Thank you for reaching out to Nuova. We look forward to assisting you!
        </div>
      </div>
    </div>
  );
}


      