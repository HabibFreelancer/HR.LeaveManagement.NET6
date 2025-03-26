// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getRoleFromToken } from "../../utils/tokenHelper";
// import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "../../utils/constants";


// const Sidebar = () => {

//     const [role, setRole] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             const decodedRole = getRoleFromToken(token);
//             setRole(decodedRole);
//         }
//     }, []);


//     return (



//         <aside className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar py-4">
//             <ul className="nav flex-column">
//                 {role === ADMIN_USER_ROLE && (
//                     <>

//                         <li className="nav-item mb-2">
//                             <Link className="nav-link" to="/admin-dashboard">📝 Admin Dashboard</Link>
//                         </li>

//                         <li className="nav-item mb-2">
//                             <Link className="nav-link" to="/employees">📝 Employees</Link>
//                         </li>
//                     </>
//                 )}

//                 {role === EMPLOYEE_USER_ROLE && (
//                     <>
//                         <li className="nav-item mb-2">
//                             <Link className="nav-link" to="/employee-dashboard">📝 Employee Dashboard</Link>
//                         </li>
//                     </>
//                 )}

//                 {/* <li className="nav-item mb-2">
//                     <Link className="nav-link" to="/employees">📝 Employees</Link>
//                 </li>
//  */}
//             </ul>
//         </aside>


//     );
// };



// export default Sidebar;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRoleFromToken } from "../../utils/tokenHelper";
import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../features/auth/roleSlice";

const Sidebar = () => {

    const dispatch = useDispatch();
    const role = useSelector(state => state.role.role);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedRole = getRoleFromToken(token);
            dispatch(setRole(decodedRole));  // Store the role in the Redux store
        }
    }, [dispatch]);


    return (
        <aside className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar py-4">
            <ul className="nav flex-column">
                {role === ADMIN_USER_ROLE && (
                    <>
                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/admin-dashboard">📝 Admin Dashboard</Link>
                        </li>

                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/employees">👥 Employees</Link>
                        </li>

                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/settings">⚙️ Settings</Link>
                        </li>
                    </>
                )}

                {role === EMPLOYEE_USER_ROLE && (
                    <>
                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/employee-dashboard">📝 Employee Dashboard</Link>
                        </li>

                        <li className="nav-item mb-2">
                            <Link className="nav-link" to="/leave-requests">📝 Leave Requests</Link>
                        </li>
                    </>
                )}

                {/* You can add other common links for both roles */}
                {role && (
                    <li className="nav-item mb-2">
                        <Link className="nav-link" to="/profile">👤 Profile</Link>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
