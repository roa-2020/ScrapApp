export const RECIEVE_USER = 'RECIEVE_USER'

export function apiGetUser(user) {
  return {
    type: RECIEVE_USER,
    user
  }
}
