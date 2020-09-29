import request from 'superagent'

export function addProfilePic(pic, id) {
  return request
    .post("/api/v1/user/" + id)
    .send(pic)
    .then((res) => res.body);
}