import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="bubble home__bubble">
      <h1>Issue Tracker</h1>
      <div className="flex">
        <Link className="link home__link" to="/search">
          Search
        </Link>
        <Link className="link home__link" to="/new">
          Create Issue
        </Link>
      </div>
    </div>
  );
};

export default Home;
