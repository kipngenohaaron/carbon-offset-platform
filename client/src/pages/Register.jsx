import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful! You can now log in.");
        navigate("/login");
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow bg-white">
      <h2 className="text-xl font-bold text-green-600 mb-4">Register</h2>
      {message && <p className="text-blue-600">{message}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
