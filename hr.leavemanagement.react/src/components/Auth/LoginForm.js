// // src/components/LoginForm.js
// import React, { useState } from "react";
// import api from "../../api";

// const LoginForm = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post("/login", {
//         email: form.email,
//         password: form.password,
//       });
//       localStorage.setItem("token", response.data.token);
//       setMessage("✅ Login successful!");
//       window.location.href = "/";
//     } catch (error) {
//       setMessage(error.response?.data?.message || "❌ Login failed");
//     }
//   };

//   return (
//     <div className="card p-4">
//       <h2 className="mb-4">🔑 Login</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password too short").required("Password is required"),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {

      const response = await api.post("/account/login", data);
      dispatch(loginSuccess(response.data));
      toast.success("Login successful!");
      navigate(response.data.role === "Administrator" ? "/admin-dashboard" : "/employee-dashboard");
      //   window.location.href = "/";
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            placeholder="Enter email"
            {...register("email")}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
