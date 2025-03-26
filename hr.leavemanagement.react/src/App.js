


import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "./components/Administrator/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import LoginForm from "./components/Auth/LoginForm";
import { getRoleFromToken } from "./utils/tokenHelper";
import { ADMIN_USER_ROLE, EMPLOYEE_USER_ROLE } from "./utils/constants";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout/Layout";
import RegisterForm from "./components/Auth/RegisterForm";
import PrivateRoute from "./components/Shared/PrivateRoute";
import Employees from './components/UserManagement/Employees'; // New route for employees

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="admin-dashboard" element={<PrivateRoute><AdminDashboard /> </PrivateRoute>} />
        <Route path="employee-dashboard" element={<PrivateRoute><EmployeeDashboard /></PrivateRoute>} />
        <Route path="employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
        <Route path="*" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}

export default App;
