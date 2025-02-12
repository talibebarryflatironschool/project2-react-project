// import React, { useState, useEffect } from 'react';
// import AnimalCard from './AnimalCard';

// const AnimalList = () => {
//   const [animals, setAnimals] = useState([]);                     //they are state
//   const [search, setSearch] = useState("");
//   const [filterAdopted, setFilterAdopted] = useState("all");
//   const [filterVaccinated, setFilterVaccinated] = useState("all");

//   useEffect(() => {
//     fetch("http://localhost:4000/animals")
//       .then((res) => res.json())              //Uses .then() to process the response and convert it into JSON format.
//       .then((data) => setAnimals(data));
//   }, []);     //The [] ensures that useEffect runs only once when the component mounts

//   const updateAnimals = (updatedAnimal) => {                              //this a stated updapte, that map is needed because it create a new array and we alredy have the opption to add new animal
//     setAnimals(prevAnimals => prevAnimals.map(animal => animal.id === updatedAnimal.id ? updatedAnimal : animal));       //event handler with map
//   };

//   const filteredAnimals = animals.filter(animal => 
//     animal.name.toLowerCase().includes(search.toLowerCase()) &&         // array filter methode .filter()
//     (filterAdopted === "all" || animal.adopted === (filterAdopted === "adopted")) &&
//     (filterVaccinated === "all" || animal.vaccinated === (filterVaccinated === "vaccinated"))
//   );

//   return (
//     <div>
//       <h1>Animal List</h1>
//       <input 
//         type="text" 
//         placeholder="Search by name" 
//         value={search} 
//         onChange={(e) => setSearch(e.target.value)}      // input with state 
//       />
//       <select onChange={(e) => setFilterAdopted(e.target.value)}>
//         <option value="all">All</option>
//         <option value="adopted">Adopted</option>
//         <option value="not-adopted">Not Adopted</option>
//       </select>
//       <select onChange={(e) => setFilterVaccinated(e.target.value)}>
//         <option value="all">All</option>
//         <option value="vaccinated">Vaccinated</option>
//         <option value="not-vaccinated">Not Vaccinated</option>
//       </select>
//       <div className="animal-list">
//         {filteredAnimals.map(animal => (
//           <AnimalCard key={animal.id} animal={animal} updateAnimals={updateAnimals} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalList;





import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalList = ({ animals }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Animal List</h1>
      <div className="row">
        {animals.map(animal => (
          <div key={animal.id} className="col-md-4">
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
