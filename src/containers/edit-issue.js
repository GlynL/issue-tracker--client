import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIssues, updateIssue } from "../actions/index";

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

class EditIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      filter: defaultIssue
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { project, id } = this.props.match.params;
    await this.props.fetchIssues(project, { _id: id });
    this.setState({ project, filter: this.props.issues[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { project, filter } = this.state;
    this.props.updateIssue(project, filter);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "project") return this.setState({ [name]: value });
    const filter = { ...this.state.filter, [name]: value };
    this.setState({ filter });
  }

  render() {
    if (this.props.issues.length === 0) return <div>Loading...</div>;
    const { project, filter } = this.state;
    return (
      <div>
        <div>edit issue</div>
        <form onSubmit={this.handleSubmit}>
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
            value={filter._id}
          />
          <input
            name="issue_title"
            type="text"
            placeholder="title"
            onChange={this.handleChange}
            value={filter.issue_title}
          />
          <input
            name="issue_text"
            type="text"
            placeholder="text"
            onChange={this.handleChange}
            value={filter.issue_text}
          />
          <input
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={filter.created_by}
          />
          <input
            name="created_by"
            type="text"
            placeholder="created_by"
            onChange={this.handleChange}
            value={filter.created_by}
          />
          <input
            name="assigned_to"
            type="text"
            placeholder="assigned_to"
            onChange={this.handleChange}
            value={filter.assigned_to}
          />
          <input
            name="status_text"
            type="text"
            placeholder="status_text"
            onChange={this.handleChange}
            value={filter.status_text}
          />
          <input
            name="created_on"
            type="text"
            placeholder="created_on"
            onChange={this.handleChange}
            value={filter.created_on}
          />
          <input
            name="updated_on"
            type="text"
            placeholder="updated_on"
            onChange={this.handleChange}
            value={filter.updated_on}
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
        </form>{" "}
      </div>
    );
  }
}

function mapStateToProps({ issues }) {
  return {
    issues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIssues, updateIssue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditIssue);
