import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function AnimalDetailPage() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/animals/${id}`)
      .then(res => res.json())
      .then(data => setAnimal(data));
  }, [id]);

  if (!animal) return <p>Loading...</p>;

  return (
    <div>
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} style={{ width: '300px' }} />
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <p><strong>Conservation Status:</strong> {animal.conservation_status}</p>
      <p><strong>Description:</strong> {animal.description}</p>
    </div>
  );
}
