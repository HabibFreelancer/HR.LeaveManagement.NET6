// import React, { useState } from "react";
// import api from "../../api";

// const RegisterForm = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     userName: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post("/register", form);
//       setMessage(`✅ User registered! ID: ${response.data.userId}`);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "❌ Registration failed");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Register</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>First Name</label>
//           <input className="form-control" name="firstName" value={form.firstName} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Last Name</label>
//           <input className="form-control" name="lastName" value={form.lastName} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Username</label>
//           <input className="form-control" name="userName" value={form.userName} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input className="form-control" type="password" name="password" value={form.password} onChange={handleChange} required />
//         </div>
//         <button className="btn btn-primary w-100" type="submit">Register</button>
//       </form>
//       {message && <div className="alert alert-info mt-3">{message}</div>}
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../api";
import { useNavigate } from "react-router-dom";

// Validation schema
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  userName: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/account/register", data);
      setMessage(`✅ User registered! ID: ${response.data.userId}`);
      setTimeout(() => navigate("/login"), 2000); // Redirect after success
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              {...register("firstName")}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              {...register("lastName")}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email")}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className={`form-control ${errors.userName ? "is-invalid" : ""}`}
              {...register("userName")}
            />
            {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password")}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button className="btn btn-primary w-100" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default RegisterForm;
