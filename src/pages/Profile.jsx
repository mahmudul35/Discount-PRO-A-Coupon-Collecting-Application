import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <div className="bg-base-100 p-6 border rounded-lg mb-7">
        <h1>{user.email}</h1>
        <button className="btn ">Update</button>
      </div>
    </div>
  );
};

export default Profile;
