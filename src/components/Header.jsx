import React, { useContext, useState } from "react";

const Header = () => {



  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-6 px-4 shadow-md rounded-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          My Sports Equipment
        </h1>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search equipment..."
            className="px-4 py-2 w-full md:w-72 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg transition dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Display Premium Equipment 
        </button>
      </div>
    </header>
  );
};

export default Header;
