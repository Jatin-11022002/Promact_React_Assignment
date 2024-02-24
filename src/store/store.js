import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

// Configuring the Redux store with the employeeReducer
const store = configureStore({
  reducer: employeeReducer, // Setting the reducer for the store
});

export default store; // Exporting the configured Redux store
