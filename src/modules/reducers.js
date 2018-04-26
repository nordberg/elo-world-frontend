import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import mainReducer from 'modules/mainReducer'

const reducers = combineReducers({
  routing: routerReducer,
  mainReducer: mainReducer
})

export default reducers
