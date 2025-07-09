import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <span className="font-bold text-lg">EcoTrade</span>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/calculator" className="hover:underline">Calculator</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
