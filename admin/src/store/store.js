import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/adminSlice";
const store = configureStore({
  reducer: {
    adminToken: adminReducer,
  },
});

export default store;
