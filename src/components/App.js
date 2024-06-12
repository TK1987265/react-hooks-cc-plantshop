import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage"; // Assuming PlantPage uses PlantList

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    const response = await fetch("http://localhost:6001/plants");
    const data = await response.json();
    setPlants(data);
  };

  const toggleSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <PlantPage
        fetchPlants={fetchPlants}
        plants={plants}
        onToggleSoldOut={toggleSoldOut}
        setPlants={setPlants}
      />
    </div>
  );
}

export default App;
