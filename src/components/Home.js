import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/search">Search</Link>
      <Link to="/new">Create Issue</Link>
    </div>
  );
};

export default Home;
