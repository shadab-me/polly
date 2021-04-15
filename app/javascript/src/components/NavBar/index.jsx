import React, { useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../helpers/storage";

const NavBar = ({ isLoggedIn }) => {
  const username = getFromLocalStorage("name");
  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
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
            <AuthHeader username={username} logoutHandler={logoutHandler} />
          ) : (
            <UnAuthHeader />
          )}
        </div>
      </div>
    </nav>
  );
};

const AuthHeader = ({ username, logoutHandler }) => {
  return (
    <div className="flex item-center justify-end">
      <p className="text-dark font-semibold mt-3 p-2">{username}</p>
      <Link
        to="/createpoll"
        className="font-semibold items-center rounded mx-3 transition duration-75 ease-in-out inline-flex cursor-pointer mt-3  px-6 py-1 h-10 focus:outline-none hover:bg-blue-600 focus:border-none text-blue-200"
      >
        Create Poll
      </Link>
      <a
        onClick={logoutHandler}
        className="font-semibold items-center rounded transition duration-75 ease-in-out inline-flex cursor-pointer mt-3 border-2 border-blue-200 px-5 py-1 h-10 focus:outline-none hover:bg-blue-600 focus:border-none"
      >
        Log Out
      </a>
    </div>
  );
};

const UnAuthHeader = () => {
  return (
    <div className="flex items-center justify-end">
      <Link
        to="/"
        className="font-semibold items-center rounded mx-3 transition duration-75 ease-in-out inline-flex cursor-pointer mt-1  px-6 py-1 h-10 focus:outline-none hover:bg-blue-600 bg-blue-600 focus:border-none text-blue-200"
      >
        <span className="text-white"> Home </span>
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
  );
};

export default NavBar;
