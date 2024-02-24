import React from "react";
import Sidebar from "./components/Sidebar"; // Importing the Sidebar component
import "./styling/layout.css"; // Importing the CSS file for layout styling

function Layout({ component: Component }) {
  return (
    <div className="layout">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Main Content Section */}
      <div className="main-content">
        {/* Rendering the Component if it's provided, otherwise displaying a placeholder */}
        {Component ? (
          <Component />
        ) : (
          <div className="content-placeholder">
            <h1>Nothing to Display</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
