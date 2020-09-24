import request from 'superagent'

const apiURL = '/api/v1'

export function APIgetUser(id) {
  return request.get(apiURL + "/user/" + id)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}