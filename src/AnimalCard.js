import React from 'react';
import { Link } from 'react-router-dom';

export function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} style={{ width: '200px' }} />
      <h3>{animal.name}</h3>
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <Link to={`/animals/${animal.id}`}>View Details</Link>
    </div>
  );
}
