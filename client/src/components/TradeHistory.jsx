import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradeHistory = ({ email }) => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    if (email) {
      axios.get(`http://127.0.0.1:5000/api/trades/${email}`)
        .then(res => setTrades(res.data))
        .catch(err => console.error(err));
    }
  }, [email]);

  return (
    <div className="history">
      <h2>Trade History for {email}</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount (T)</th>
            <th>Price ($)</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.id}>
              <td>{trade.type}</td>
              <td>{trade.amount}</td>
              <td>{trade.price}</td>
              <td>{trade.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
