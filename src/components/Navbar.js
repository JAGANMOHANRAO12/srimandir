import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Sri Mandir</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/puja">Puja</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
