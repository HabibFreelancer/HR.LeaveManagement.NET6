import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { getRoleFromToken } from "../utils/tokenHelper";
import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "../utils/constants";


const Sidebar = () => {

    const [role, setRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedRole = getRoleFromToken(token);
            setRole(decodedRole);
        }
    }, []);


    return (



        <aside className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar py-4">
            <ul className="nav flex-column">
                {role === ADMIN_USER_ROLE && (
                    <>

                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/admin-dashboard">📝 Admin Dashboard</Link>
                        </li>

                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/employees">📝 Employees</Link>
                        </li>
                    </>
                )}

                {role === EMPLOYEE_USER_ROLE && (
                    <>
                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/employee-dashboard">📝 Employee Dashboard</Link>
                        </li>
                    </>
                )}

                {/* <li className="nav-item mb-2">
                    <Link className="nav-link" to="/employees">📝 Employees</Link>
                </li>
 */}
            </ul>
        </aside>


    );
};

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/login'; // Redirect to login after logout
};

export default Sidebar;
