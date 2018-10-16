import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Search from "./Search";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default App;
