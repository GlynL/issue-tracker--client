import React, { Component } from "react";

class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      issue: {
        _id: "",
        issue_title: "",
        issue_text: "",
        created_by: "",
        assigned_to: "",
        status_text: "",
        created_on: "",
        updated_on: "",
        open: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "project") return this.setState({ [name]: value });
    if (name === "open") {
    }
    const issue = { ...this.state.issue, [name]: value };
    this.setState({ issue });
  }

  render() {
    const { onProjectSearch } = this.props;
    const { project, issue } = this.state;
    return (
      <div>
        <form onSubmit={onProjectSearch.bind(null, project, issue)}>
          <input
            name="project"
            type="text"
            placeholder="Project name"
            onChange={this.handleChange}
            value={project}
            required
          />
          <input
            name="_id"
            type="text"
            placeholder="_id"
            onChange={this.handleChange}
            value={issue._id}
          />
          <input
            name="issue_title"
            type="text"
            placeholder="title"
            onChange={this.handleChange}
            value={issue.issue_title}
          />
          <input
            name="issue_text"
            type="text"
            placeholder="text"
            onChange={this.handleChange}
            value={issue.issue_text}
          />
          <input
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={issue.created_by}
          />
          <input
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={issue.created_by}
          />
          <input
            name="assigned_to"
            type="text"
            placeholder="assigned_to"
            onChange={this.handleChange}
            value={issue.assigned_to}
          />
          <input
            name="status_text"
            type="text"
            placeholder="status_text"
            onChange={this.handleChange}
            value={issue.status_text}
          />
          <input
            name="created_on"
            type="text"
            placeholder="created_on"
            onChange={this.handleChange}
            value={issue.created_on}
          />
          <input
            name="updated_on"
            type="text"
            placeholder="updated_on"
            onChange={this.handleChange}
            value={issue.updated_on}
          />
          <input
            id="open"
            name="open"
            type="radio"
            placeholder="open"
            onChange={this.handleChange}
            value={true}
          />
          <label htmlFor="open">open</label>
          <input
            id="closed"
            name="open"
            type="radio"
            placeholder="closed"
            onChange={this.handleChange}
            value={false}
          />
          <label htmlFor="closed">closed</label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ProjectSearch;
