import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState("");
  const [filterAdopted, setFilterAdopted] = useState("all");
  const [filterVaccinated, setFilterVaccinated] = useState("all");

  useEffect(() => {
    fetch("http://localhost:4000/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const updateAnimals = (updatedAnimal) => {
    setAnimals(prevAnimals => prevAnimals.map(animal => animal.id === updatedAnimal.id ? updatedAnimal : animal));
  };

  const filteredAnimals = animals.filter(animal => 
    animal.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterAdopted === "all" || animal.adopted === (filterAdopted === "adopted")) &&
    (filterVaccinated === "all" || animal.vaccinated === (filterVaccinated === "vaccinated"))
  );

  return (
    <div>
      <h1>Animal List</h1>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <select onChange={(e) => setFilterAdopted(e.target.value)}>
        <option value="all">All</option>
        <option value="adopted">Adopted</option>
        <option value="not-adopted">Not Adopted</option>
      </select>
      <select onChange={(e) => setFilterVaccinated(e.target.value)}>
        <option value="all">All</option>
        <option value="vaccinated">Vaccinated</option>
        <option value="not-vaccinated">Not Vaccinated</option>
      </select>
      <div className="animal-list">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} updateAnimals={updateAnimals} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
