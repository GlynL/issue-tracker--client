import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchIssues, updateIssue } from "../actions/index";
import Form from "../components/Form";

class EditIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      issue: {}
    };
  }

  async componentDidMount() {
    const { project, id } = this.props.match.params;
    await this.props.fetchIssues(project, { _id: id });
    this.setState({ project, issue: this.props.issues[0] });
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
    return (
      <div>
        <div>edit issue</div>
        <Form
          type="edit"
          issue={this.state.issue}
          formAction={this.props.updateIssue}
          project={this.state.project}
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
