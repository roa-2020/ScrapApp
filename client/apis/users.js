import request from 'superagent'

export function apiGetUser(id) {
  return request.get("/api/v1/user/" + id)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}

export function updateUserProfilePic(id, newProfilepic) {
  return request.patch("/api/v1/user/" + id)
    .send({ profilepic: newProfilepic })
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}
