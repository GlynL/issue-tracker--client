import { combineReducers } from "redux";
import issuesReducer from "./reducer_issues";

const rootReducer = combineReducers({
  issues: issuesReducer
});

export default rootReducer;
