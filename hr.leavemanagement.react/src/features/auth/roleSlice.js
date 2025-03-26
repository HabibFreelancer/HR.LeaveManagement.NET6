// src/features/roleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null,  // Default value for the role
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    clearRole: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, clearRole } = roleSlice.actions;
export default roleSlice.reducer;
