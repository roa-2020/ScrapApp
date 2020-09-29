import {
  RECIEVE_SCRAP,
  RECIEVE_ALL_SCRAPS,
  DELETE_SCRAP,
} from "../actions/scraps";

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_SCRAP:
      return action.scrapDetails;
    case DELETE_SCRAP:
      return state.filter((scrap) => {
        return scrap.id !== action.id;
      });

    case RECIEVE_ALL_SCRAPS:
      return action.scraps;

    default:
      return state;
  }
};

export default reducer;
