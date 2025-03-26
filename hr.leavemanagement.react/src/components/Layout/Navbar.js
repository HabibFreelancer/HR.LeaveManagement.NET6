// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getUserFromToken } from "../../utils/tokenHelper";


// const Navbar = () => {

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!token);
//   const email = getUserFromToken(token);
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-dark bg-dark shadow-sm">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         <Link className="navbar-brand" to="/">🌐 AuthApp</Link>

//         {isLoggedIn ? (
//           <div className="d-flex align-items-center">
//             <span className="text-light me-3">👋 {email}</span>
//             <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div>
//             <Link className="btn btn-outline-light btn-sm me-2" to="/login">Login</Link>
//             <Link className="btn btn-outline-light btn-sm" to="/register">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );

// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice"; // Assume you have a logout action
import { setRole } from "../../features/auth/roleSlice";
import { getRoleFromToken } from "../../utils/tokenHelper";
import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "../../utils/constants";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector(state => state.role.role);
  const user = useSelector((state) => state.auth.user); // Assuming you store user details in Redux
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedRole = getRoleFromToken(token);
      dispatch(setRole(decodedRole));  // Store the role in the Redux store
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logout()); // Logout from Redux
    localStorage.removeItem("token");
    dispatch(setRole(null));  // Clear the role in the Redux store
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🌐 AuthApp</Link>

        {role ? (
          <div className="d-flex align-items-center">
            <span className="text-light me-3">👋 {user ? user.email : "Guest"}</span>

            {/* Conditional rendering for admin/employee dashboards */}
            {role === ADMIN_USER_ROLE && (
              <Link to="/admin-dashboard" className="btn btn-outline-light btn-sm me-2">Admin Dashboard</Link>
            )}
            {role === EMPLOYEE_USER_ROLE && (
              <Link to="/employee-dashboard" className="btn btn-outline-light btn-sm me-2">Employee Dashboard</Link>
            )}

            {/* Logout button */}
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
