import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';

export function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/animals")
      .then(res => res.json())
      .then(data => setAnimals(data));
  }, []);

  return (
    <div>
      <h1>Animal List</h1>
      <div className="animal-list">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
