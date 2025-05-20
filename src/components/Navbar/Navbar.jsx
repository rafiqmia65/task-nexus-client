import React from "react";
import logo from "../../assets/TaskNexus.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg font-medium">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to={"/addTask"}>Add Task</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to={"/BrowseTasks"}>Browse Tasks</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to={"/myPostedTasks"}>My Posted Tasks</NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-base-200 shadow-sm">
      <div className="navbar container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="">
            <img
              className="w-[150px] cursor-pointer"
              src={logo}
              alt="Task Nexus"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
            <NavLink to={"/login"} className="btn">Login</NavLink>
            <NavLink to={"/register"} className="btn">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
