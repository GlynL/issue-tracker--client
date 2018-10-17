import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { removeIssue } from "../actions/index";

class Issues extends Component {
  render() {
    if (this.props.issues.length === 0) {
      return <div>Search for a valid project to start.</div>;
    }

    const issueList = this.props.issues.map(issue => (
      <li key={issue._id}>
        <div>id: {issue._id}</div>
        <div>Title: {issue.issue_title}</div>
        <div>Description: {issue.issue_text}</div>
        <div>Created By: {issue.created_by}</div>
        <div>Assigned To: {issue.assigned_to}</div>
        <div>{issue.open ? "Open" : "Closed"}</div>
        <div>Status: {issue.status_text}</div>
        <div>Created On: {issue.created_on}</div>
        <div>Updated On: {issue.updated_on}</div>
        <Link to={`/${issue.project.name}/${issue._id}`}>Edit</Link>
        <button onClick={this.props.removeIssue.bind(null, issue)}>
          Delete
        </button>
        ;
      </li>
    ));
    return <ul>{issueList}</ul>;
  }
}

function mapStateToProps({ issues }) {
  return {
    issues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeIssue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
