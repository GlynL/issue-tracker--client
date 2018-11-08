import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { removeIssue } from "../actions/index";
import "../styles/issues.css";

class Issues extends Component {
  render() {
    if (this.props.issues.length === 0) {
      return (
        <div className="issues__message">
          Search for a valid project to start.
        </div>
      );
    }

    const issueList = this.props.issues.map(issue => (
      <li key={issue._id} className="issues__item">
        <div className="issues__info">id: {issue._id}</div>
        <div className="issues__info">Title: {issue.issue_title}</div>
        <div className="issues__info">Description: {issue.issue_text}</div>
        <div className="issues__info">Created By: {issue.created_by}</div>
        <div className="issues__info">Assigned To: {issue.assigned_to}</div>
        <div className="issues__info">{issue.open ? "Open" : "Closed"}</div>
        <div className="issues__info">Status: {issue.status_text}</div>
        <div className="issues__info">Created On: {issue.created_on}</div>
        <div className="issues__info">Updated On: {issue.updated_on}</div>
        <div className="issues__btns">
          <Link
            className="btn link mgn-r"
            to={`/${issue.project.name}/${issue._id}`}
          >
            Edit
          </Link>
          <button
            className="btn"
            onClick={this.props.removeIssue.bind(null, issue)}
          >
            Delete
          </button>
        </div>
      </li>
    ));
    return <ul className="issues">{issueList}</ul>;
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
