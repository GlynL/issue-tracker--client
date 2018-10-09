import React, { Component } from "react";

class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }

  render() {
    const { onProjectSearch } = this.props;
    return (
      <div>
        <form onSubmit={onProjectSearch.bind(null, this.state.value)}>
          <input
            type="text"
            placeholder="Project name"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

export default ProjectSearch;
