import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to="/brand">Brands</NavLink>
              <NavLink to="/profile">My Profile</NavLink>
              <NavLink to="/devloper">About Developer</NavLink>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Discount PRO</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to="/brand">Brands</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/devloper">About Developer</NavLink>
          </ul>
        </div>
        <div class="navbar-end">
          <NavLink to="/auth/login" class="btn btn-primary">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
