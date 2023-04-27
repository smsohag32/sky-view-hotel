import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  //   navigate er vitor ekta state prop er vitor location set kora hoisy .. current location a fire aser jonno.
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
