import React, { Component } from "react";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      issues: []
    };
  }
  componentDidMount() {
    const { project } = this.props;
    fetch(`http://localhost:8080/api/issues/test`)
      .then(res => res.json())
      .then(issues => this.setState({ issues }))
      .catch(err => console.log(err));
  }

  render() {
    const issueList = this.state.issues.map(
      issue =>
        console.log(issue) || (
          <li key={issue._id}>
            <div>id: {issue._id}</div>
            <div>Title: {issue.issue_title}</div>
            <div>Description: {issue.issue_text}</div>
            <div>Created By: {issue.created_by}</div>
            <div>Assigned To: {issue.assigned_to}</div>
            <div>{issue.open ? "Open" : "Closed"}</div>
            <div>Status: {issue.status_text}</div>
            <div>Updated On: {issue.updated_on}</div>
          </li>
        )
    );
    return <ul>{issueList}</ul>;
  }
}

export default Issues;
