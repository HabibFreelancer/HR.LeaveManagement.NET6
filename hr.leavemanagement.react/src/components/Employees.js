import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getRoleFromToken } from "../utils/tokenHelper";
import { ADMIN_USER_ROLE } from "../utils/constants";



const Employees = () => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // const decodedToken = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const decodedRole = getRoleFromToken(token);
      if (decodedRole !== ADMIN_USER_ROLE)
        navigate("/");  // Redirect non-admin users 
      else
        fetchEmployees();
    }
  }, [token, navigate]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://localhost:7273/api/employees/employees", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h3>Employees List</h3>
      <div className="row">
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                  <p className="card-text"><strong>Email:</strong> {employee.email}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No employees found.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Employees;
