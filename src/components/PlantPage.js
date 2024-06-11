import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {
  return (
    <main>
      <NewPlantForm />
      <Search plants ={plants} setPlants={setPlants}/>
      <PlantList plants ={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
