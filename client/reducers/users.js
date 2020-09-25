import { RECIEVE_USER } from '../actions/users'

import { apiGetUser } from '../apis/users'

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_USER:
      return apiGetUser(action.id).then(data => data)
    default:
      return state
  }
}

export default reducer