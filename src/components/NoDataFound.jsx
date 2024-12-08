import React from 'react';

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="No Data"
          className="w-48 h-48 mx-auto"
        />
        <h1 className="text-2xl font-bold text-gray-700 mt-4">
          No Equipment Found
        </h1>
        <p className="text-gray-500 mt-2">
          You haven’t added any equipment yet. Start adding to see them here!
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-500 transition"
          onClick={() => console.log('Redirect to Add Equipment Page')}
        >
          Add Equipment
        </button>
      </div>
    </div>
  );
};

export default NoDataFound;
