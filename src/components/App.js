import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Search from "../containers/Search";
import EditIssue from "../containers/edit-issue";
import NewIssue from "../containers/new-issue";
import Navbar from "../components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/new" component={NewIssue} />
        <Route path="/:project/:id" component={EditIssue} />
      </Switch>
    </>
  );
};

export default App;
