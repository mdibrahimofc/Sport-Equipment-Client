import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const htmlElement = document.documentElement;
  const theme = localStorage.getItem("theme")
  console.log(theme);
  useEffect(()=>{
    
    if(theme === null){
      return localStorage.setItem("theme", "light")
    }
    htmlElement.setAttribute("data-theme", theme);




    
  },[theme])

  const handleTheme = () => {
 
    setDark(!dark)
    if(theme === 'dark'){

      localStorage.setItem("theme", "light");
    }
    else if(theme === "light"){
      localStorage.setItem("theme", "dark");
    }
  }
  const links = (
    <>
      <NavLink to="/">
        <li className=" border-lime-300 dark:border-blue-800 border-2 rounded-full text-xl mr-2 font-medium">
          Home
        </li>
      </NavLink>
      <NavLink to="/all-sports-equipments">
        <li className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium">
          All Sports Equipment
        </li>
      </NavLink>
      <NavLink to="/add-equipments">
        <li className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium">
          Add Equipment
        </li>
      </NavLink>
      <NavLink to="/my-equipments-list">
        <li className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium">
          My Equipment List
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-blue-400 pb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EquiSports</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end items-center">
        <div className="mr-4 mt-2 flex items-center gap-1">
          <p className="font-medium">{dark ? "Dark Mode" : "Light Mode"}</p>
        <input onClick={handleTheme} type="checkbox" className="toggle" checked={theme === "dark"} />
        </div>
        {user ? (
          <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="flex items-center justify-center gap-2">
            <div>
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={user?.photoURL}
                />
              </div>
              <div className="text-red-700 z-50"><Tooltip id="my-tooltip" /></div>
            </div>
            <button
              onClick={logout}
              className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium"
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className=" border-lime-300 border-2 rounded-full text-xl mr-2 font-medium">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
