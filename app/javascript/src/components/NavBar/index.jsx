import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { getFromLocalStorage, setToLocalStorage } from "helpers/storage";

const NavBar = ({ isLoggedIn }) => {
  const logoutHandler = async () => {
    try {
      //await authApi.logout(userId);
      await localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <Link
                to="/"
                className="text-blue-600 text-2xl font-bold  items-center transition duration-75 ease-in-out inline-flex cursor-pointer mt-3 px-5 py-1 h-10 focus:outline-none hover:bg-white focus:border-none hover:text-blue-600"
              >
                PollY
              </Link>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="flex item-center justify-end">
              <Link
                to="/"
                className="font-semibold items-center rounded mx-3 transition duration-75 ease-in-out inline-flex cursor-pointer mt-3  px-6 py-1 h-10 focus:outline-none hover:bg-blue-600 bg-blue-600 focus:border-none text-blue-200"
              >
                Home
              </Link>
              <a
                onClick={logoutHandler}
                className="font-semibold items-center rounded transition duration-75 ease-in-out inline-flex cursor-pointer mt-3 border-2 border-blue-200 px-5 py-1 h-10 focus:outline-none hover:bg-blue-600 focus:border-none"
              >
                Log Out
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-end">
              <Link
                to="/"
                className="font-semibold items-center rounded mx-3 transition duration-75 ease-in-out inline-flex cursor-pointer mt-1  px-6 py-1 h-10 focus:outline-none hover:bg-blue-600 bg-blue-600 focus:border-none text-blue-200"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="font-semibold items-center rounded mx-3 transition duration-75 ease-in-out inline-flex cursor-pointer mt-1 border-2 border-blue-200 px-6 py-1 h-10 focus:outline-none hover:bg-blue-600 focus:border-none"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="font-semibold items-center rounded transition duration-75 ease-in-out inline-flex cursor-pointer mt-1 border-2 border-blue-200 px-5 py-1 h-10 focus:outline-none hover:bg-blue-600 focus:border-none"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
