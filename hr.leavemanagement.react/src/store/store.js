import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roleReducer from '../features/auth/roleSlice';
import employeeReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        role: roleReducer,
        employees: employeeReducer, // Manages only employees data
    },
});

export default store;
