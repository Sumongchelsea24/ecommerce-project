import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Make sure the path to your authSlice file is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Registers your auth slice
  },
});

export default store;
