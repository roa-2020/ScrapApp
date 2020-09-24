export const RECIEVE_USER = 'RECIEVE_USER'

export function getUser(id) {
    return {
        type: RECIEVE_USER,
        id: id 
    }
}