import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createIssue } from "../actions/index";
import NewForm from "../components/form-new";

class NewIssue extends Component {
  render() {
    return (
      <div>
        <div>new issue</div>
        <NewForm formAction={this.props.createIssue} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createIssue }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(NewIssue);
