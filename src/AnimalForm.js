import React, { useState } from 'react';

export function AnimalForm() {
  const [formData, setFormData] = useState({
    name: "",
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
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newAnimal => console.log("Added: ", newAnimal));
  }

  return (
    <div>
      <h1>Add Animal</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="text" name="habitat" placeholder="Habitat" onChange={handleChange} />
        <input type="text" name="diet" placeholder="Diet" onChange={handleChange} />
        <input type="text" name="conservation_status" placeholder="Conservation Status" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}
