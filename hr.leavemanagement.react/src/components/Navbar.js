import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserFromToken } from "../utils/tokenHelper";


const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const email = getUserFromToken(token);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🌐 AuthApp</Link>

        {isLoggedIn ? (
          <div className="d-flex align-items-center">
            <span className="text-light me-3">👋 {email}</span>
            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link className="btn btn-outline-light btn-sm me-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light btn-sm" to="/register">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );

};

export default Navbar;
