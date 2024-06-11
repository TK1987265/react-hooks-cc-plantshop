import React, { useState } from "react";

function NewPlantForm(props) {
  const [newPlant, setNewPlant] = useState({ name: "", image: "", price: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
  };

  const handleAddPlant = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      });
      if (response.ok) {
        props.fetchPlants(); // Refresh plant list after adding a new plant
        // Reset form fields after successful submission
        setNewPlant({ name: "", image: "", price: 0 });
      }
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddPlant}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
