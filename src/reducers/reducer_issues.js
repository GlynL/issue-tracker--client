import { FETCH_ISSUES } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return action.payload.data;
    default:
      return state;
  }
}
