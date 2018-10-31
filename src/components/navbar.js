import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="link nav-link nav-link--main">
        Issue Tracker
      </Link>
      <Link to="/search" className="link nav-link">
        Search
      </Link>
      <Link to="/new" className="link nav-link">
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
