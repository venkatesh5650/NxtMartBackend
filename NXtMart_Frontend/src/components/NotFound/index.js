// components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // import the CSS file

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link to="/login" className="notfound-btn">
          Go Back to Login
        </Link>
      </div>
      <div className="notfound-glow"></div>
    </div>
  );
};

export default NotFound;
