import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, fetchPlants, onToggleSoldOut }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <NewPlantForm fetchPlants={fetchPlants} />
      <Search
        setSearchQuery={setSearchQuery}
        allPlants={plants}
        setPlants={setPlants}
      />
      <PlantList
        plants={plants}
        onToggleSoldOut={onToggleSoldOut}
        setPlants={setPlants}
      />
    
    </main>
  );
}

export default PlantPage;
