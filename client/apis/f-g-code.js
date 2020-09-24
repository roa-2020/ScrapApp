import request from 'superagent'

const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
const wellySuffix = 'Wellington%20New%20Zealand.json?access_token=' + process.env.REACT_APP_MAPBOX_TOKEN

export function getAddressData() {
  return request.get(baseUrl)
  .then(response => response.body)
}