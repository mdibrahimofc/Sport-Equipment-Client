import React from "react";
import { Link } from "react-router-dom";

const Headers = ({ user, onLogout }) => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Logo and Name */}
        <Link to="/" className="text-2xl font-bold">
          Lotus EquiSports
        </Link>

        {/* Navbar Links */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/all-products" className="hover:text-green-400">All Sports Equipment</Link>
          {user && (
            <>
              <Link to="/add-equipment" className="hover:text-green-400">Add Equipment</Link>
              <Link to="/my-equipment" className="hover:text-green-400">My Equipment List</Link>
            </>
          )}
        </nav>

        {/* User Authentication or Profile Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
                title={user.displayName}
              />
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-lg px-4 py-2 rounded bg-green-600 hover:bg-green-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headers;
