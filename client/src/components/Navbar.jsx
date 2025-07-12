import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          🌍 <span className="text-yellow-300">EcoTrade</span>
        </div>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
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

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-md font-medium">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/calculator" className="hover:text-yellow-300 transition duration-300">Calculator</Link>
          <Link to="/login" className="hover:text-yellow-300 transition duration-300">Login</Link>
          <Link to="/register" className="hover:text-yellow-300 transition duration-300">Register</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4 text-md font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/calculator" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Calculator</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
