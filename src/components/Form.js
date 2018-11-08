import React, { Component } from "react";
import "../styles/form.css";

const defaultIssue = {
  _id: "",
  issue_title: "",
  issue_text: "",
  created_by: "",
  assigned_to: "",
  status_text: "",
  created_on: "",
  updated_on: "",
  open: null
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: (this.props.issue && this.props.issue.project.name) || "",
      filter: this.props.issue || defaultIssue
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
    const readOnly = this.props.type === "edit" ? true : false;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            name="project"
            type="text"
            placeholder="*Project name"
            onChange={this.handleChange}
            value={project}
            required
            readOnly={readOnly}
          />
          <input
            className="form__input"
            name="_id"
            type="text"
            placeholder="_id"
            onChange={this.handleChange}
            value={filter._id}
            readOnly={readOnly}
          />
          <input
            className="form__input"
            name="issue_title"
            type="text"
            placeholder="title"
            onChange={this.handleChange}
            value={filter.issue_title}
          />
          <input
            className="form__input"
            name="issue_text"
            type="text"
            placeholder="text"
            onChange={this.handleChange}
            value={filter.issue_text}
          />
          <input
            className="form__input"
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={filter.created_by}
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
          <input
            className="form__input"
            name="created_on"
            type="text"
            placeholder="created_on"
            onChange={this.handleChange}
            value={filter.created_on}
            readOnly
          />
          <input
            className="form__input"
            name="updated_on"
            type="text"
            placeholder="updated_on"
            onChange={this.handleChange}
            value={filter.updated_on}
            readOnly
          />
          <div className="form__group">
            <div className="form__group">
              <input
                className="form__input"
                id="open"
                name="open"
                type="radio"
                placeholder="open"
                onChange={this.handleChange}
                value={true}
              />
              <label className="form__label" htmlFor="open">
                open
              </label>
            </div>
            <div className="form__group">
              <input
                className="form__input"
                id="closed"
                name="open"
                type="radio"
                placeholder="closed"
                onChange={this.handleChange}
                value={false}
              />
              <label className="form__label" htmlFor="closed">
                closed
              </label>
            </div>
          </div>

          <button className="btn btn--form">Submit</button>
        </form>{" "}
      </div>
    );
  }
}

export default Form;
