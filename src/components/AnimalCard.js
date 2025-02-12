import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal, updateAnimals }) => {
  const [adopted, setAdopted] = useState(animal.adopted);
  const [vaccinated, setVaccinated] = useState(animal.vaccinated);

  const handleUpdate = (field, value) => {
    fetch(`http://localhost:4000/animals/${animal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value })
    })
      .then(res => res.json())
      .then(updatedAnimal => {
        if (field === 'adopted') setAdopted(updatedAnimal.adopted);
        if (field === 'vaccinated') setVaccinated(updatedAnimal.vaccinated);
        updateAnimals(updatedAnimal);
      });
  };

  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} style={{ width: '200px' }} />
      <h3>{animal.name}</h3>
      <p><strong>Scientific Name:</strong> {animal.scientific_name}</p>
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <p><strong>Conservation Status:</strong> {animal.conservation_status}</p>
      <p><strong>Description:</strong> {animal.description}</p>
      <p><strong>Status:</strong> {adopted ? "Adopted" : "Available"}</p>
      <p><strong>Vaccination:</strong> {vaccinated ? "Vaccinated" : "Not Vaccinated"}</p>
      <button className="btn-adopt"onClick={() => handleUpdate('adopted', !adopted)}>{adopted ? "Undo Adoption" : "Adopt"}</button>
      <button className="btn-vaccinate"onClick={() => handleUpdate('vaccinated', !vaccinated)}>{vaccinated ? "Undo Vaccination" : "Vaccinate"}</button>
      <Link to={`/animals/${animal.id}`}>View Details</Link>
    </div>
  );
};

export default AnimalCard;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const AnimalCard = ({ animal, updateAnimals }) => {
//   const [adopted, setAdopted] = useState(animal.adopted);
//   const [vaccinated, setVaccinated] = useState(animal.vaccinated);

//   const handleUpdate = (field, value) => {
//     fetch(`http://localhost:4000/animals/${animal.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ [field]: value })
//     })
//       .then(res => res.json())
//       .then(updatedAnimal => {
//         updateAnimals(updatedAnimal); // ✅ Ensures state updates
//       });
//   };

//   return (
//     <div className="card animal-card text-center">
//       <img src={animal.image} alt={animal.name} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{animal.name}</h5>
//         <p><strong>Habitat:</strong> {animal.habitat}</p>
//         <p><strong>Diet:</strong> {animal.diet}</p>
//         <p><strong>Conservation Status:</strong> {animal.conservation_status}</p>
//         <button className="btn btn-adopt m-1" onClick={() => handleUpdate('adopted', !adopted)}>
//           {adopted ? "Undo Adoption" : "Adopt"}
//         </button>
//         <button className="btn btn-vaccinate m-1" onClick={() => handleUpdate('vaccinated', !vaccinated)}>
//           {vaccinated ? "Undo Vaccination" : "Vaccinate"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AnimalCard;
