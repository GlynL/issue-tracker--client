import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIssues, updateIssue } from "../actions/index";
import Form from "../components/Form";

class EditIssue extends Component {
  async componentDidMount() {
    const { project, id } = this.props.match.params;
    this.props.fetchIssues(project, { _id: id });
  }

  render() {
    if (this.props.issues.length === 0) return <div>Loading...</div>;
    return (
      <div>
        <div>edit issue</div>
        <Form
          type="edit"
          issue={this.props.issues[0]}
          formAction={this.props.updateIssue}
          project={this.props.match.params.project}
        />
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
