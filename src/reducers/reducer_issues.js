import { FETCH_ISSUES, REMOVE_ISSUE, UPDATE_ISSUE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return action.payload.data;
    case REMOVE_ISSUE: {
      const issues = state.filter(issue => issue._id !== action.payload.id);
      return issues;
    }
    case UPDATE_ISSUE: {
      const issues = state.filter(issue => {
        console.log(action.payload.data);
        return issue._id === action.payload.data._id
          ? action.payload.data
          : issue;
      });
      return issues;
    }
    default:
      return state;
  }
}
