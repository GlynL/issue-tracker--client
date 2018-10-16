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
