import React, { Component } from "react";

class Issues extends Component {
  render() {
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
        <button>Edit</button>
        <button onClick={this.props.onClick.bind(null, issue)}>Delete</button>
      </li>
    ));
    return <ul>{issueList}</ul>;
  }
}

export default Issues;
