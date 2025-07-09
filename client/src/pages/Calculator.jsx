import React, { useState } from "react";

function Calculator() {
  const [inputs, setInputs] = useState({
    transport_km: "",
    electricity_kwh: "",
    flights_hours: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow rounded bg-white">
      <h2 className="text-xl font-bold text-green-600 mb-4">Carbon Offset Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>🚗 Transport Distance (km):</label>
          <input
            type="number"
            name="transport_km"
            value={inputs.transport_km}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>💡 Electricity Usage (kWh):</label>
          <input
            type="number"
            name="electricity_kwh"
            value={inputs.electricity_kwh}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>✈️ Flight Duration (hours):</label>
          <input
            type="number"
            name="flights_hours"
            value={inputs.flights_hours}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-50 p-4 rounded">
          <p><strong>Total Emissions:</strong> {result.total_kg} kg CO₂</p>
          <p><strong>≈ {result.total_tonnes} tonnes CO₂</strong></p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
