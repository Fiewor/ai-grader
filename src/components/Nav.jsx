import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="brand-name">AI-Grader</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};
