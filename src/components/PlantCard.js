import React from "react";

function PlantCard({ plant, onMarkSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={onMarkSoldOut}>
        {plant.soldOut ? (
           <button>Out of Stock</button>
       
      ) : (
        <button className="primary">In Stock</button>
      )}
      </button>
    </li>
  );
}

export default PlantCard;
