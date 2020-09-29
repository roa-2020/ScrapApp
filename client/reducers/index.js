import { combineReducers } from 'redux'

import auth from './auth'
import scraps from './scraps'
import newScrap from './newScrap'
import filter from './filter'

export default combineReducers({
  auth,
  scraps,
  newScrap,
  filter
})
