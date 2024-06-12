import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onMarkSoldOut={() => onToggleSoldOut(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;
