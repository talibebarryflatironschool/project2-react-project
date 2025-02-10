
import React, { useState } from 'react';

const AnimalForm = ({ addAnimal }) => {
  const [formData, setFormData] = useState({
    name: "",
    scientific_name: "",
    image: "",
    habitat: "",
    diet: "",
    conservation_status: "",
    description: ""
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/animals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, adopted: false, vaccinated: false })
    })
      .then(res => res.json())
      .then((newAnimal) => {
        addAnimal(newAnimal);
        setFormData({
          name: "",
          scientific_name: "",
          image: "",
          habitat: "",
          diet: "",
          conservation_status: "",
          description: ""
        });
      });
  }

  return (
    <div>
      <h1>Add Animal</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="scientific_name" placeholder="Scientific Name" value={formData.scientific_name} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input type="text" name="habitat" placeholder="Habitat" value={formData.habitat} onChange={handleChange} required />
        <input type="text" name="diet" placeholder="Diet" value={formData.diet} onChange={handleChange} required />
        <input type="text" name="conservation_status" placeholder="Conservation Status" value={formData.conservation_status} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
};

export default AnimalForm;
