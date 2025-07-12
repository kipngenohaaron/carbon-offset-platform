import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-300 transition duration-300";

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          🌍 <span className="text-yellow-300">EcoTrade</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-md font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/calculator" className={linkClass}>Calculator</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
          <NavLink to="/register" className={linkClass}>Register</NavLink>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-md font-medium">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/calculator" onClick={() => setIsOpen(false)} className={linkClass}>Calculator</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)} className={linkClass}>Login</NavLink>
          <NavLink to="/register" onClick={() => setIsOpen(false)} className={linkClass}>Register</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
