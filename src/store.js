import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import groupReducer from './reducers/groupReducer'
import roomReducer from './reducers/roomReducer'
import channelReducer from './reducers/channelReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  groups: groupReducer,
  resources: roomReducer,
  channels: channelReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
