import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import {useState, useEffect} from "react"

function App() {
  const [plants, setPlants] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

 
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch("http://localhost:6001/plants");
      const data = await response.json();
      setPlants(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} fetchPlants = {fetchPlants} />
    </div>
  );
}

export default App;
