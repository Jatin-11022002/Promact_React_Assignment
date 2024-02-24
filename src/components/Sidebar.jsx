import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/sidebar.css";

// Component for rendering the sidebar navigation menu
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar menu with list of navigation links */}
      <ul className="sidebar-menu">
        {/* Navigation link for the home page */}
        <li className="sidebar-menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => {
              // Dynamically apply classes based on whether the link is active
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            {/* Icon and text for the home page link */}
            <span className="sidebar-menu-icon">🏠</span>
            <span className="sidebar-menu-text">Home</span>
          </NavLink>
        </li>
        {/* Navigation link for adding a new employee */}
        <li className="sidebar-menu-item">
          <NavLink
            to="/add"
            className={({ isActive }) => {
              // Dynamically apply classes based on whether the link is active
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            {/* Icon and text for the add employee page link */}
            <span className="sidebar-menu-icon">👨‍💼</span>
            <span className="sidebar-menu-text">Add Employee</span>
          </NavLink>
        </li>
        {/* Navigation link for viewing all employees */}
        <li className="sidebar-menu-item">
          <NavLink
            to="/list"
            className={({ isActive }) => {
              // Dynamically apply classes based on whether the link is active
              return `sidebar-menu-link ${isActive ? "active-menu-link" : ""}`;
            }}
          >
            {/* Icon and text for the view all employees page link */}
            <span className="sidebar-menu-icon">📃</span>
            <span className="sidebar-menu-text">All Employees</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
