import React, { useState } from 'react';
import axios from 'axios';

const TradeForm = ({ onTradeSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    credit_amount: '',
    price_per_tonne: '',
    trade_type: 'buy',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitTrade = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/trade', formData);
      alert('Trade submitted!');
      onTradeSuccess(formData.email); // trigger refresh of history
    } catch (err) {
      console.error(err);
      alert('Trade failed.');
    }
  };

  return (
    <form onSubmit={submitTrade} className="form">
      <h2>Carbon Trade Form</h2>
      <input name="email" placeholder="Your email" onChange={handleChange} required />
      <input name="credit_amount" type="number" placeholder="Credit Amount (tonnes)" onChange={handleChange} required />
      <input name="price_per_tonne" type="number" placeholder="Price per tonne ($)" onChange={handleChange} required />
      <select name="trade_type" onChange={handleChange}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <button type="submit">Submit Trade</button>
    </form>
  );
};

export default TradeForm;
