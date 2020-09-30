// ** SCRAP FRONTEND API CALLS ** //

import request from "superagent";
import { getAuthorizationHeader } from 'authenticare/client';

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
    .set(getAuthorizationHeader())
    .send(scrap)
    .then((res) => res.body);
}

// ** API - DELETE SCRAPS ** //
export function apiDeleteScraps(id) {
  return request
    .delete('/api/v1/' + id)
    .then(res => res.body)
}
