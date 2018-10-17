import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIssues } from "../actions/index";

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
      issue: defaultIssue
    };
  }

  async componentDidMount() {
    const { project, id } = this.props.match.params;
    const issues = await this.props.fetchIssues(project, { _id: id });
    this.setState({ project, issue: issues[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {}

  render() {
    if (this.props.issues.length === 0) return <div>Loading...</div>;
    const {
      issue_title,
      issue_text,
      created_by,
      assigned_to,
      open,
      status_text,
      created_on
    } = this.props.issues[0];
    return (
      <div>
        <div>edit issue</div>
        <form onSubmit={this.handleSubmit} />
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
  return bindActionCreators({ fetchIssues }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditIssue);
