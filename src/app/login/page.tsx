
import React from 'react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side with Image */}
        <div className="hidden md:flex md:w-1/2 bg-green-50 justify-center items-center">
          <Image
            src="/images/Group 63.png"
            alt="NUOVA"
            width={320}
            height={240}
            className="rounded"
            priority
          />
        </div>

        {/* Right Side with Form */}
        <div className="flex w-full md:w-1/2 p-8 items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#677E53]">Welcome Back to NUOVA!</h2>

            <form>
              <div className="mb-6 rounded-lg">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center">
              Don’t have an account?{' '}
              <a href="#" className="text-green-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
