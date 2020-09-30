import request from 'superagent'

export function addProfilePic(file, id) {
  return request
    .post("/api/v1/user/" + id)
    .attach('profilepic', file)
    .then((res) => res.body);
}