// ** SCRAP FRONTEND API CALLS ** //

import request from "superagent";

// ** API - GET SCRAPS ** //
export function apiGetScraps() {
  return request.get("/api/v1")
    .then((res) => {
      return res.body
    });
}

// ** API - ADD SCRAPS ** //
export function apiAddScraps(scrap) {
  return request
    .post("/api/v1")
    .send(scrap)
    .then((res) => res.body);
}

// ** API - DELETE SCRAPS ** //
export function apiDeleteScraps(id) {
  return request
    .delete('/api/v1/' + id)
    .then(res => res.body)
}

// ** API - UPDATE SCRAPS ** //
export function apiUpdateScraps(id, scrap) {
  return request
    .patch('/api/v1/' + id)
    .send(scrap)
    .then(res => res.body)
}
