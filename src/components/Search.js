import React, { useState } from "react";

function Search({ setPlants, allPlants }) {
  // Expect allPlants to be the original complete list
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setPlants(allPlants); // If query is empty, reset to the original plant list
    } else {
      // Filter the plants based on the search query
      const filteredPlants = allPlants.filter((plant) =>
        plant.name.toLowerCase().includes(query)
      );
      setPlants(filteredPlants);
      console.log(filteredPlants);
    }
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
