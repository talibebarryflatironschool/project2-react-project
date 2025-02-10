
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Animal</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
