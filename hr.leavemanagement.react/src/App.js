import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/Administrator/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Employees from './components/Employees'; // New route for employees
import { getRoleFromToken } from "./utils/tokenHelper";
import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "./utils/constants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthRedirect />} /> {/* Handles automatic redirects */}
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="admin-dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="employee-dashboard" element={<PrivateRoute><EmployeeDashboard /></PrivateRoute>} />
          <Route path="employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
          <Route path="*" element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

// ✅ Move authentication logic inside a component
function AuthRedirect() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const decodedRole = getRoleFromToken(token);
      if (decodedRole === ADMIN_USER_ROLE) navigate("/admin-dashboard");
      else if (decodedRole === EMPLOYEE_USER_ROLE) navigate("/employee-dashboard");
      else navigate("/");
    }
  }, [token, navigate]);

  return <div>👋 Redirecting...</div>;
}

export default App;
