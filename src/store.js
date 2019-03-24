import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import groupReducer from './reducers/groupReducer'
import roomReducer from './reducers/roomReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  group: groupReducer,
  resources: roomReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store