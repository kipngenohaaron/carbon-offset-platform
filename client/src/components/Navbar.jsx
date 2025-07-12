import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold mb-2 md:mb-0">
        🌍 <span className="text-yellow-300">EcoTrade</span>
      </div>
      <div className="flex space-x-6 text-md font-medium">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
        <Link to="/calculator" className="hover:text-yellow-300 transition duration-300">Calculator</Link>
        <Link to="/login" className="hover:text-yellow-300 transition duration-300">Login</Link>
        <Link to="/register" className="hover:text-yellow-300 transition duration-300">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
