import React, { useState } from "react";

const Header = ({ onSort, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    if (onSort) {
      onSort(newSortOrder);
    }
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-6 px-4 shadow-md rounded-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          My Sports Equipment
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search equipment..."
            className="px-4 py-2 w-full md:w-72 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg transition dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
        </button>
      </div>
    </header>
  );
};

export default Header;
