import React, { useState } from 'react';
import man from '../assets/persion.png';
import { Menu, X, Home, Info, CarFront, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent w-full">
        {/* Logo */}
        <Link to="/" className="text-3xl sm:text-4xl font-bold text-white">
          carspace
        </Link>

        {/* Navigation Links for large screens */}
        <ul className="hidden lg:flex space-x-8 text-white text-lg">
          <li>
            <Link to="/home" className="hover:text-red-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-400 transition">About Us</Link>
          </li>
          <li>
            <Link to="/pre-owned" className="hover:text-red-400 transition">Certified Pre-Owned</Link>
          </li>
        </ul>

        {/* Right Side: Button & Profile (desktop only) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md">
              Contact Us
            </button>
          </Link>
          <img
            src={man}
            alt="profile"
            className="w-8 h-8 rounded-lg border-2 border-red-500"
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            aria-label="Toggle Sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="focus:outline-none"
          >
            {sidebarOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-[#FDE4AF] z-50 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 ease-in-out">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <img
              src={man}
              alt="profile"
              className="w-14 h-14 rounded-full border-2 border-red-500"
            />
            <button onClick={() => setSidebarOpen(false)} className="text-red-600 text-2xl">
              <X />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="mt-10 space-y-6 text-lg text-gray-800">
            <li onClick={() => setSidebarOpen(false)}>
              <Link to="/" className="flex items-center gap-2 hover:text-red-500 transition">
                <Home size={20} />
                Home
              </Link>
            </li>
            <li onClick={() => setSidebarOpen(false)}>
              <Link to="/about" className="flex items-center gap-2 hover:text-red-500 transition">
                <Info size={20} />
                About Us
              </Link>
            </li>
            <li onClick={() => setSidebarOpen(false)}>
              <Link to="/pre-owned" className="flex items-center gap-2 hover:text-red-500 transition">
                <CarFront size={20} />
                Certified Pre-Owned
              </Link>
            </li>
            <li onClick={() => setSidebarOpen(false)}>
              <Link to="/contact" className="flex items-center gap-2 hover:text-red-500 transition">
                <Phone size={20} />
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Bottom CTA Button */}
          <Link to="/start">
            <button className="mt-10 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
