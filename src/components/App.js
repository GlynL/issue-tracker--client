import React, { Component } from "react";
import "../styles/App.css";
import Issues from "./Issues";
import ProjectSearch from "./ProjectSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
    this.handleProjectSearch = this.handleProjectSearch.bind(this);
  }

  handleProjectSearch(project, e) {
    e.preventDefault();
    this.setState({ project });
  }

  render() {
    return (
      <div className="App">
        <p>Try 'test' project name</p>
        <ProjectSearch onProjectSearch={this.handleProjectSearch} />
        {this.state.project && <Issues project={this.stateproject} />}
      </div>
    );
  }
}

export default App;
