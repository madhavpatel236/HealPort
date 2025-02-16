import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
  name: "adminToken",
  initialState: null,
  reducers: {
    addToken: (state, action) => action.payload,
    removeToken: (state, action) => null,
  },
});

export const { addToken, removeToken } = adminSlice.actions;
export default adminSlice.reducer;
