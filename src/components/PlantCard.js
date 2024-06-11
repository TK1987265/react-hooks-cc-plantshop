import React, { useState } from "react";

function PlantCard({plants, setPlants}) {
  // const [plants, setPlants] = useState([])
  // Within the App component where plants are rendered
function toggleStock(id) {
  setPlants(plants => plants.map(plant => plant.id === id ? { ...plant, inStock: !plant.inStock } : plant));
}

return (
  <div>
    {plants.map(plant => (
      <div key={plant.id} data-testid="plant-item">
        <h4>{plant.name}</h4>
        <img src={plant.image} alt={plant.name} />
        <p>Price: {plant.price}</p>
        <button onClick={() => toggleStock(plant.id)}>
          {plant.inStock ? 'In Stock' : 'Out of Stock'}
        </button>
      </div>
    ))}
  </div>
);

  // return (
  //   <li className="card" data-testid="plant-item">
  //     <img src={plant.image ? plant.image : "https://via.placeholder.com/400"} alt={plant.name} />
  //     <h4>{plant.name}</h4>
  //     <p>Price: {plant.price}</p>
  //     {plant.soldOut == true ? (
  //         <button>Out of Stock</button>
       
  //     ) : (
  //       <button className="primary">In Stock</button>
  //     )}
  //   </li>
  // );
}

export default PlantCard;
