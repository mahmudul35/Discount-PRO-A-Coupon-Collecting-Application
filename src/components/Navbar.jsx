import React, { useContext } from "react";
import { FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

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
          <a class="btn btn-ghost text-xl text-green-500 hidden md:inline">
            Discount PRO
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-6">
            <NavLink to={"/"}>
              <span className=" flex items-center gap-1">
                <FaHome />
                Home
              </span>{" "}
            </NavLink>
            <NavLink to="/brand">
              {" "}
              <span className=" flex items-center gap-1">
                <FaShoppingBag /> Brands
              </span>{" "}
            </NavLink>
            {user ? (
              <NavLink to="/profile">
                {" "}
                <span className=" flex items-center gap-1">
                  <FaUser />
                  My Profile
                </span>{" "}
              </NavLink>
            ) : (
              ""
            )}
            <NavLink to="/devloper">
              {" "}
              <span className=" flex items-center gap-1">
                <FaUser />
                About Developer
              </span>{" "}
            </NavLink>
          </ul>
        </div>

        <div class="navbar-end space-x-5">
          {user ? <p>{user?.email}</p> : ""}
          {user ? (
            <img
              src={user.photoURL ? user.photoURL : userLogo}
              alt="user"
              class="rounded-full h-10 w-10"
            />
          ) : (
            <img src={userLogo} alt="" />
          )}
          {user ? (
            <button onClick={signOutUser} class="btn  bg-green-500 text-white">
              Logout
            </button>
          ) : (
            <NavLink to="/auth/login">
              <button class="btn  bg-green-500 text-white">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
