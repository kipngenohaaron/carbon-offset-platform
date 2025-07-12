// import React, { useState } from 'react';
// import TradeForm from './components/TradeForm';
// import TradeHistory from './components/TradeHistory';
// import './App.css';

// function App() {
//   const [email, setEmail] = useState('');

//   const handleTradeSuccess = (emailUsed) => {
//     setEmail(emailUsed); // pass email to TradeHistory
//   };

//   return (
//     <div className="App">
//       <h1>Carbon Offset Platform</h1>
//       <TradeForm onTradeSuccess={handleTradeSuccess} />
//       {email && <TradeHistory email={email} />}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

// Add your other pages here (e.g., Calculator, Login, Register)
import Calculator from "./pages/Calculator";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />

      {/* MAIN PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
