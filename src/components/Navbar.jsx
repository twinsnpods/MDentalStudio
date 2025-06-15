import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black fixed top-0 z-50 w-full h-auto shadow-md">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <img 
            src="DentalStudio2.png"
            className="h-6 w-auto hover:scale-150 transition-transform duration-300" 
            alt="Dental Studio Logo"
          />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
            <a href="#treatments" className="hover:text-blue-400 transition">Treatments</a>
            <a href="#about-us" className="hover:text-blue-400 transition">About us</a>
            <a href="#contact-us" className="hover:text-blue-400 transition">Contact us</a>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 py-1 rounded-full hover:scale-105 transition">
              Book Now <FaArrowRight />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 text-lg pb-4 md:hidden">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#blog" className="hover:text-blue-400">Blog</a>
            <a href="#treatments" className="hover:text-blue-400">Treatments</a>
            <a href="#about-us" className="hover:text-blue-400">About us</a>
            <a href="#contact-us" className="hover:text-blue-400">Contact us</a>
            <button className="flex items-center text-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 py-1 rounded-full hover:scale-105 transition">
              Book Now <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

