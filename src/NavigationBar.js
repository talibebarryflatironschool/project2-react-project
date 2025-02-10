import React from 'react';
import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Animal</Link></li>
      </ul>
    </nav>
  );
}
