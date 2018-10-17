import { FETCH_ISSUES, REMOVE_ISSUE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return action.payload.data;
    case REMOVE_ISSUE:
      const issues = state.filter(issue => issue._id !== action.payload.id);
      return issues;
    default:
      return state;
  }
}
