import React from "react";
import PlantCard from "./PlantCard"
function PlantList({ plants, setPlants }) {
  const handleMarkSoldOut = async (id) => {
    try {
      // Send a PATCH or PUT request to mark the plant as sold out
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH", // or "PUT"
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ soldOut: true }),
      });

      if (response.ok) {
        // Update the plants list after marking the plant as sold out
        const updatedPlants = plants.map((plant) =>
          plant.id === id ? { ...plant, soldOut: true } : plant
        );
        setPlants(updatedPlants);
      } else {
        console.error("Failed to mark plant as sold out");
      }
    } catch (error) {
      console.error("Error marking plant as sold out:", error);
    }
  };

  return (
    <div>
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard
          setPlants = {setPlants}
            key={plant.id}
            plant={plant}
            onMarkSoldOut={() => handleMarkSoldOut(plant.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
