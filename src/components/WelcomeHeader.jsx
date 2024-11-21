import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const WelcomeHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-red-300 p-6 rounded-lg my-6">
      <p className="text-center text-2xl">
        <span>
          Welcome, <br />{" "}
        </span>{" "}
        {user?.displayName}
      </p>
    </div>
  );
};

export default WelcomeHeader;
