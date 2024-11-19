import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
