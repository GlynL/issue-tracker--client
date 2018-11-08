import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIssues } from "../actions/index";
import Issues from "./Issues";
import Form from "../components/Form";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      error: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Search Issues</h1>
        <Form formAction={this.props.fetchIssues} type="search" />
        <Issues />
        {this.state.error && <p>{this.state.error}</p>}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIssues }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
