import { SET_LOCATION } from "../actions/newScrap"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
  return {
    lat:action.lat,
    long:action.lng
  }
    default:
      return state
  }
}

export default reducer