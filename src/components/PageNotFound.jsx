import React from "react";
import { Link } from "react-router-dom";
import "../styling/notfoundpage.css";

// Component for rendering a 404 page not found error
const PageNotFound = () => {
  return (
    <div className="wrapper">
      {/* Container for the 404 page */}
      <div className="not-found-container">
        {/* Heading indicating the error */}
        <h2 className="not-found-header">404 - Page Not Found</h2>
        {/* Message informing the user about the error */}
        <p className="not-found-message">
          The page you are looking for does not exist.
        </p>
        {/* Link to navigate back to the home page */}
        <Link to="/" className="back-to-home-link">
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
