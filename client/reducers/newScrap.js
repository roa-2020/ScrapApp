import { SET_LOCATION, SET_ADDRESS } from "../actions/newScrap"


const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
  return {
    ...state,
    lat:action.lat,
    long:action.lng
  }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.address
      }
    default:
      return state
  }
}

export default reducer