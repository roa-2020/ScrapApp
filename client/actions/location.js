export function setLocation(lat,lng) {
  return  {
    type: SET_LOCATION,
    lat: action.lat,
    lng: action.lng
  }
}