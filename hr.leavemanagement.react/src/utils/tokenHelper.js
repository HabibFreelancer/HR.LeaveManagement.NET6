// src/utils/tokenHelper.js
import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const getUserFromToken = (token) => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.email; // assuming "email" exists in the JWT claims
  } catch {
    return null;
  }
};


export const getRoleFromToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      return role;
    } catch (error) {
      console.error("Error decoding JWT token", error);
      return null;
    }
  };