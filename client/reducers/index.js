import {combineReducers} from 'redux'

import auth from './auth'
import scraps from './scraps'

export default combineReducers({
  auth,
  scraps  
})
