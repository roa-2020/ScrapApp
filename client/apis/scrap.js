// ** SCRAP FRONTEND API CALLS ** //

import request from "superagent";
import scraps from "../../server/db/scraps";

// ** API - GET SCRAPS ** //
export function apiGetScraps() {
  return request.get("/api/v1")
  .then((res) => res.body);
}

// ** API - ADD SCRAPS ** //
export function apiAddScraps() {
  return request
    .post("/api/v1")
    .send(scraps)
    .then((res) => res.body);
}

// ** API - DELETE SCRAPS ** //
export function apiDeleteScraps() {
  return request
  .delete('/api/v1' + id)
  .then(res => res.body)
}

// ** API - UPDATE SCRAPS ** //
export function apiUpdateScraps() {
  return request
  .update('/api/v1')
  .send(scraps)
  .then(res => res.body)
}
