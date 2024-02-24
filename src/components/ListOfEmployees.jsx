import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styling/listofemployees.css";
import { deleteEmployee } from "../store/employeeSlice";
import { ToastContainer, toast } from "react-toastify";

// Component to display a list of employee records
const ListOfEmployees = () => {
  // Accessing Redux store to retrieve employee records
  let records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  return (
    <div className="records-container">
      {/* ToastContainer for displaying delete success notification */}
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
      {/* Conditional rendering based on whether records are available */}
      {records.length > 0 ? (
        <>
          {/* Heading for the list of employee records */}
          <h2 className="page-heading">Employee Records</h2>
          {/* Wrapper for the records table */}
          <div className="table-wrapper">
            {/* Table for displaying employee records */}
            <table className="records-table">
              {/* Table header */}
              <thead className="table-head">
                <tr>
                  <th>Full Name</th>
                  <th>Birthdate</th>
                  <th>Department</th>
                  <th>Experience (in years)</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Mapping through records to render each employee */}
                {records.map((employee) => (
                  <tr key={employee.id}>
                    {/* Displaying employee details */}
                    <td>{employee.fullName}</td>
                    <td>{employee.birthdate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.experience}</td>
                    {/* Action icons for editing and deleting records */}
                    <td className="actions-cell">
                      {/* NavLink for editing the record */}
                      <NavLink to={`/edit/${employee.id}`}>
                        <i className="fas fa-edit action-icon"></i>
                      </NavLink>
                      {/* Icon for deleting the record */}
                      <i
                        className="fas fa-trash-alt action-icon"
                        onClick={() => {
                          // Dispatching delete action and displaying success toast
                          toast.success("Record Deleted Successfully");
                          dispatch(deleteEmployee({ employeeId: employee.id }));
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        // Display message when no records are available
        <h1 className="page-heading table-placeholder">No Records to Display</h1>
      )}
    </div>
  );
};

export default ListOfEmployees;
