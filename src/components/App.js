import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Search from "./Search";
import EditIssue from "../containers/edit-issue";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/:project/:id" component={EditIssue} />
    </Switch>
  );
};

export default App;
