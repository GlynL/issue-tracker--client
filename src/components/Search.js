import React, { Component } from "react";
import ProjectSearch from "../containers/ProjectSearch";
import Issues from "../containers/Issues";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      error: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <ProjectSearch />
        <Issues />
        {this.state.error && <p>{this.state.error}</p>}
      </React.Fragment>
    );
  }
}

export default Search;
