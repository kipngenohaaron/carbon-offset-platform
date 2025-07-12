import React from "react";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">🌍 EcoTrade</h3>
          <p className="text-sm mt-2">Empowering sustainable action through carbon offset trading.</p>
        </div>

        <div className="text-sm">
          <p>Email: <a href="mailto:kipngenohaaron@gmail.com" className="text-yellow-300">kipngenohaaron@gmail.com</a></p>
          <p>Phone: <span className="text-yellow-300">0724828197 / 0724279400</span></p>
        </div>

        <div className="flex space-x-4 text-yellow-300 text-xl">
          <a href="https://github.com/kipngenohaaron" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} EcoTrade. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
