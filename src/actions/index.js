import axios from "axios";
const ROOT_URL = "http://localhost:8080/api";

export const FETCH_ISSUES = "FETCH_ISSUES";

export function fetchIssues(project, filter) {
  let queryString = "?";
  Object.entries(filter).forEach(([key, value]) => {
    if (value) {
      queryString += `${key}=${value}&`;
    }
  });
  const url = `${ROOT_URL}/issues/${project}${queryString}`;
  const request = axios.get(url);
  return {
    type: FETCH_ISSUES,
    payload: request
  };
}

export const REMOVE_ISSUE = "REMOVE_ISSUE";

export function removeIssue(issue) {
  const id = issue._id;
  const project = issue.project.name;
  const request = axios.delete(`${ROOT_URL}/issues/${project}/${id}`);
  return {
    type: REMOVE_ISSUE,
    payload: { request, id }
  };
}

export const UPDATE_ISSUE = "UPDATE_ISSUE";

export function updateIssue(project, issue) {
  const request = axios.put(`${ROOT_URL}/issues/${project}`, issue);
  return {
    type: UPDATE_ISSUE,
    payload: request
  };
}

export const CREATE_ISSUE = "CREATE_ISSUE";

export function createIssue(project, issue) {
  console.log(issue);
  const request = axios.post(`${ROOT_URL}/issues/${project}`, issue);
  return {
    type: CREATE_ISSUE,
    payload: request
  };
}
