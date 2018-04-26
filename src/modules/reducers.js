import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import mainReducer from 'modules/mainReducer'

const reducers = combineReducers({
  routing: routerReducer,
  mainReducer: mainReducer,
  form: formReducer,
})

export default reducers
