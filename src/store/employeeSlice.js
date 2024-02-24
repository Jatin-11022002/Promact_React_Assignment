import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state for the employee records slice
const initialState = {
  records: [],
};

// Redux slice for managing employee records
const employeeSlice = createSlice({
  name: "record", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function for adding a new employee record
    addEmployee: (state, action) => {
      // Extracting payload data
      const { fullName, birthdate, department, experience } = action.payload;
      // Creating a new employee record object
      const employeeRecord = {
        id: nanoid(), // Generating a unique ID
        fullName,
        birthdate,
        department,
        experience,
      };
      // Adding the new record to the state
      state.records.push(employeeRecord);
    },

    // Reducer function for updating an existing employee record
    updateEmployee: (state, action) => {
      // Extracting payload data
      const {
        employeeId: id,
        fullName,
        birthdate,
        department,
        experience,
      } = action.payload;
      // Updating the records array with the updated employee record
      state.records = state.records.map((employee) =>
        employee.id === id
          ? { ...employee, fullName, birthdate, department, experience }
          : employee
      );
    },

    // Reducer function for deleting an employee record
    deleteEmployee: (state, action) => {
      // Extracting payload data
      const { employeeId: id } = action.payload;
      // Filtering out the deleted employee record
      state.records = state.records.filter((employee) => employee.id !== id);
    },
  },
});

// Exporting action creators
export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

// Exporting the reducer function
export default employeeSlice.reducer;
