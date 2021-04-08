import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <Link to="/" className="text-xl text-blue-600 font-bold mt-6">
                PollY
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/login"
              className="inline-flex items-center px-1 pt-1 text-sm
             font-semibold leading-5 text-bb-gray-600 text-opacity-50
             transition duration-150 ease-in-out border-b-2
             border-transparent hover:text-bb-gray-600 focus:outline-none
             focus:text-bb-gray-700 cursor-pointer"
            >
              login
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-1 pt-1 text-sm
             font-semibold leading-5 text-bb-gray-600 text-opacity-50
             transition duration-150 ease-in-out border-b-2
             border-transparent hover:text-bb-gray-600 focus:outline-none
             focus:text-bb-gray-700 cursor-pointer"
            >
              signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
