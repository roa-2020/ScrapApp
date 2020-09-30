export const SET_LOCATION = 'SET_LOCATION'
export const SET_ADDRESS = 'SET_ADDRESS'

export function setLocation(lat,lng) {
  return  {
    type: SET_LOCATION,
    lat: lat,
    lng: lng
  }
}

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address: address
  }
}