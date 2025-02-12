// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const AnimalDetailPage = () => {
//   const { id } = useParams();
//   const [animal, setAnimal] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/animals/${id}`)
//       .then((res) => res.json())
//       .then((data) => setAnimal(data));
//   }, [id]);

//   if (!animal) return <p>Loading...</p>;

//   return (
//     <div className="animal-detail-container">
//       <h1>{animal.name}</h1>
//       <img src={animal.image} alt={animal.name} style={{ width: '300px' }} />
//       <p><strong>Habitat:</strong> {animal.habitat}</p>
//       <p><strong>Diet:</strong> {animal.diet}</p>
//       <p><strong>Conservation Status:</strong> {animal.conservation_status}</p>
//       <p><strong>Description:</strong> {animal.description}</p>
//     </div>
//   );
// };

// export default AnimalDetailPage;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetailPage = ({ updateAnimals }) => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/animals/${id}`)
      .then((res) => res.json())
      .then((data) => setAnimal(data));
  }, [id]);

  if (!animal) return <p>Loading...</p>;

  const handleUpdate = (field, value) => {
    fetch(`http://localhost:4000/animals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value })
    })
      .then((res) => res.json())
      .then((updatedAnimal) => {
        setAnimal(updatedAnimal);
        updateAnimals(updatedAnimal); // ✅ Ensure updateAnimals is called
      });
  };

  return (
    <div>
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} style={{ width: '300px' }} />
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <p><strong>Conservation Status:</strong> {animal.conservation_status}</p>
      <p><strong>Description:</strong> {animal.description}</p>
      <button onClick={() => handleUpdate("adopted", !animal.adopted)}>
        {animal.adopted ? "Undo Adoption" : "Adopt"}
      </button>
      <button onClick={() => handleUpdate("vaccinated", !animal.vaccinated)}>
        {animal.vaccinated ? "Undo Vaccination" : "Vaccinate"}
      </button>
    </div>
  );
};

export default AnimalDetailPage;
