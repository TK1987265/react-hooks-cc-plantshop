import React, { useState } from "react";

function Search({ plants, setPlants }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the plants based on the search query
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query)
    );

    // Update the plants based on the search query,
    // or reset to the original list if the query is empty
    setPlants(query ? filtered : plants);
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
