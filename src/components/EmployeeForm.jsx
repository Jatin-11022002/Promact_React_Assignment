import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeSlice";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import "../styling/employeeForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component for adding or editing employee records
const EmployeeForm = () => {
  // State variables to manage form inputs
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  // Hook for navigating between pages
  const navigate = useNavigate();

  // Extracting employee ID from URL params
  const { id: employeeId } = useParams();

  // Accessing Redux store for existing records
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  // Effect to prefill form data for editing existing record
  useEffect(() => {
    if (employeeId) {
      // Find the employee data from Redux store based on the ID
      let employeeData = records.find((employee) => employee.id === employeeId);
      // If employee data found, populate form fields with the data
      if (employeeData) {
        setFullName(employeeData.fullName);
        setBirthdate(employeeData.birthdate);
        setDepartment(employeeData.department);
        setExperience(employeeData.experience);
      }
    } else {
      // If no employee ID provided (i.e., adding a new employee), reset form fields
      resetInputFields();
    }
  }, [employeeId]);

  // Function to reset form input fields
  const resetInputFields = () => {
    setFullName("");
    setBirthdate("");
    setDepartment("");
    setExperience("");
  };

  // Callback functions to handle input changes with validations
  const handleFullNameChange = useCallback((e) => {
    // Allow only alphabets and spaces in the full name input
    const value = e.target.value.replace(/[^A-Za-z\s]/gi, "");
    setFullName(value);
  }, []);

  const handleExperienceChange = useCallback((e) => {
    // Allow only numeric characters in the experience input
    const value = e.target.value.replace(/[^0-9]/g, "");
    setExperience(value);
  }, []);

  // Function to validate form inputs
  const checkForValidInputs = () => {
    if (!fullName.trim()) {
      return "Please Enter Valid Full Name";
    } else if (!birthdate) {
      return "Please Enter Valid Birth Date";
    } else if (!department.trim()) {
      return "Please Enter Valid Department";
    } else if (!experience) {
      return "Please Enter Valid Experience";
    }

    return "";
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for valid inputs before submission
    const message = checkForValidInputs();
    if (message !== "") {
      // Display error toast if validation fails
      toast.error(message);
      return;
    }

    // Dispatch appropriate action based on whether it's a new record or an update
    if (!employeeId) {
      dispatch(addEmployee({ fullName, birthdate, department, experience }));
      // Reset form fields after adding a new employee
      resetInputFields();
      // Display success toast after adding a new record
      toast.success("Record Added Successfully");
    } else {
      dispatch(
        updateEmployee({
          employeeId,
          fullName,
          birthdate,
          department,
          experience,
        })
      );

      // Navigating to List Page after updating record
      navigate("/list", { state: { updated: true } });
    }
  };

  // JSX rendering of the employee form
  return (
    <div className="form-container">
      {/* ToastContainer to display notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="form-heading">
        {/* Dynamic heading based on whether it's adding or editing an employee */}
        {employeeId ? "Edit Employee" : "Add Employee"}
      </h1>
      {/* Form element with onSubmit event handler */}
      <div onSubmit={handleSubmit} className="form">
        {/* Input fields for employee details */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate" className="form-label">
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="form-input"
            // Restricting future dates for birthdate input
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="form-label">
            Experience (in years)
          </label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={handleExperienceChange}
            className="form-input"
          />
        </div>
        {/* Button to submit the form */}
        <button type="submit" className="form-submit" onClick={handleSubmit}>
          {/* Dynamic text based on whether it's adding or editing */}
          {employeeId ? "Save Changes" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;
