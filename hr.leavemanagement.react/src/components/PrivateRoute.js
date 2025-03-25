// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/tokenHelper";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token && isTokenValid(token) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
