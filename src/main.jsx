import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importing BrowserRouter, Route, and Routes from react-router-dom for routing
import { Provider } from "react-redux"; // Importing Provider from react-redux for providing the Redux store
import store from "./store/store"; // Importing the Redux store
import EmployeeForm from "./components/EmployeeForm"; // Importing the EmployeeForm component
import ListOfEmployees from "./components/ListOfEmployees"; // Importing the ListOfEmployees component
import Layout from "./Layout"; // Importing the Layout component
import "./index.css"; // Importing CSS styles
import PageNotFound from "./components/PageNotFound.jsx"; // Importing the PageNotFound component

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* Using BrowserRouter for routing */}
      <Routes>
        {" "}
        {/* Routes component for defining routes */}
        <Route path="/" element={<Layout />} /> {/* Default route */}
        <Route path="/add" element={<Layout component={EmployeeForm} />} />{" "}
        {/* Route for adding employee */}
        <Route
          path="/edit/:id"
          element={<Layout component={EmployeeForm} />}
        />{" "}
        {/* Route for editing employee */}
        <Route
          path="/list"
          element={<Layout component={ListOfEmployees} />}
        />{" "}
        {/* Route for listing employees */}
        <Route path="*" element={<PageNotFound />} />{" "}
        {/* Catch-all route for handling page not found */}
      </Routes>
    </BrowserRouter>
  );
};

// Rendering the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Enabling React Strict Mode */}
    <Provider store={store}>
      {" "}
      {/* Providing the Redux store to the entire app */}
      <App /> {/* Rendering the main App component */}
    </Provider>
  </React.StrictMode>
);
