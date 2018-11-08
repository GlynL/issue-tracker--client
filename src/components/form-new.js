import React, { Component } from "react";

const defaultIssue = {
  issue_title: "",
  issue_text: "",
  created_by: "",
  assigned_to: "",
  status_text: "",
  open: null
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: "",
      filter: defaultIssue
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { project, filter } = this.state;
    this.props.formAction(project, filter);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "project") return this.setState({ [name]: value });
    const filter = { ...this.state.filter, [name]: value };
    this.setState({ filter });
  }

  render() {
    const { project, filter } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            name="project"
            type="text"
            placeholder="Project name"
            onChange={this.handleChange}
            value={project}
            required
          />
          <input
            className="form__input"
            name="issue_title"
            type="text"
            placeholder="title"
            onChange={this.handleChange}
            value={filter.issue_title}
            required
          />
          <input
            className="form__input"
            name="issue_text"
            type="text"
            placeholder="text"
            onChange={this.handleChange}
            value={filter.issue_text}
            required
          />
          <input
            className="form__input"
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={filter.created_by}
            required
          />
          <input
            className="form__input"
            name="assigned_to"
            type="text"
            placeholder="assigned_to"
            onChange={this.handleChange}
            value={filter.assigned_to}
          />
          <input
            className="form__input"
            name="status_text"
            type="text"
            placeholder="status_text"
            onChange={this.handleChange}
            value={filter.status_text}
          />
          <button className="btn btn--form">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
