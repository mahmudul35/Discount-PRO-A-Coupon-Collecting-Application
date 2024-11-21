import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className=" bg-red-300 bg-opacity-50 w-full p-6 text-green-700">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Welcome, {user.displayName}!
        </h1>
      </div>
      <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-288px)]">
        <div className="card bg-base-100 w-96 shadow-xl h-[400px]">
          <div className="relative h-[150px] bg-gray-700 rounded-lg">
            <figure>
              <img
                src={user?.photoURL}
                alt="Shoes"
                className="w-28 h-28 rounded-full absolute -bottom-8"
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <div className="card-actions ">
              <Link to={"/profile/update"} className="w-full">
                <button className="btn bg-green-500 w-full">Update User</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
