import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">EcoTrade Platform</h1>
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
}

export default App;
