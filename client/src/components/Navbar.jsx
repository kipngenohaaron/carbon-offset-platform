import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 shadow-md text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <span className="text-2xl font-extrabold tracking-wide">
        🌍 Eco<span className="text-yellow-300">Trade</span>
      </span>
      <div className="space-x-6 text-md font-medium">
        <Link to="/" className="hover:text-yellow-300 transition duration-200">
          Home
        </Link>
        <Link to="/calculator" className="hover:text-yellow-300 transition duration-200">
          Calculator
        </Link>
        <Link to="/login" className="hover:text-yellow-300 transition duration-200">
          Login
        </Link>
        <Link to="/register" className="hover:text-yellow-300 transition duration-200">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
