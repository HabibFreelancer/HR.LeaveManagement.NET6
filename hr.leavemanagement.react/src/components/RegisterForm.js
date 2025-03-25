import React, { useState } from "react";
import api from "../api";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", form);
      setMessage(`✅ User registered! ID: ${response.data.userId}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input className="form-control" name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input className="form-control" name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input className="form-control" name="userName" value={form.userName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary w-100" type="submit">Register</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default RegisterForm;
