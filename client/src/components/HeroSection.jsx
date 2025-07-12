import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Offset Carbon. <span className="text-yellow-300">Empower the Planet.</span>
        <h1 className="text-4xl font-bold">THIS IS THE HERO SECTION TEST</h1>

        </h1>
        <p className="text-lg md:text-xl mb-8">
          EcoTrade helps you calculate your carbon footprint and trade verified carbon credits with full compliance to the Kyoto Protocol.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/calculator">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-full transition">
              Calculate My Emissions
            </button>
          </Link>
          <Link to="/register">
            <button className="border border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-full transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
