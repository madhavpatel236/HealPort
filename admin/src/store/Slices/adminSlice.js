import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminToken",
  initialState: null,
  reducers: {
    addToken: (state, action) => action.payload,
  },
});

export const { addToken } = adminSlice.actions;
export default adminSlice.reducer;
