import {
  APPLY_FILTER,
} from "../actions/filter";

const filter = (state = [], action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.category
    default:
      return state;
  }
};

export default filter;
