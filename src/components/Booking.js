// src/components/Booking.js
import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pujaType, setPujaType] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:3001/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, pujaType })
  });
  const data = await response.json();
  console.log('Booking response:', data);
};
  return (
    <div className="booking">
      <h1>Book a Puja</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Puja Type</label>
          <input type="text" value={pujaType} onChange={(e) => setPujaType(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
