import React, { Component } from "react";
import ProjectSearch from "./ProjectSearch";
import Issues from "./Issues";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      issues: [],
      error: "",
      url: "http://localhost:8080/api/issues/"
    };

    this.handleProjectSearch = this.handleProjectSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleProjectSearch(project, query, e) {
    e.preventDefault();
    this.setState({ search: "", issues: [], error: "" });
    let queryString = "?";
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        console.log(key, value);
        queryString += `${key}=${value}&`;
      }
    });
    fetch(`${this.state.url}/${project}${queryString}`)
      .then(res => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then(issues => this.setState({ issues, search: project }))
      .catch(err => {
        err
          .json()
          .then(response => this.setState({ error: response.error.message }));
      });
  }

  async handleClick(issue, e) {
    const id = issue._id;
    const project = issue.project.name;
    try {
      const res = await fetch(`${this.state.url}/${project}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          _id: id
        })
      });
      if (!res.ok) throw res;
      const data = await res.json();
      console.log(data);
      const issues = this.state.issues.filter(issue => issue._id !== id);
      this.setState({ issues });
    } catch (err) {
      err
        .json()
        .then(response => this.setState({ error: response.error.message }));
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProjectSearch onProjectSearch={this.handleProjectSearch} />
        {this.state.issues && (
          <Issues issues={this.state.issues} onClick={this.handleClick} />
        )}
        {this.state.error && <p>{this.state.error}</p>}
      </React.Fragment>
    );
  }
}

export default Search;
