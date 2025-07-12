import React, { useState } from 'react';
import TradeForm from './components/TradeForm';
import TradeHistory from './components/TradeHistory';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleTradeSuccess = (emailUsed) => {
    setEmail(emailUsed); // pass email to TradeHistory
  };

  return (
    <div className="App">
      <h1>Carbon Offset Platform</h1>
      <TradeForm onTradeSuccess={handleTradeSuccess} />
      {email && <TradeHistory email={email} />}
    </div>
  );
}

export default App;
