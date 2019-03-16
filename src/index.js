import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
//import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import groupReducer from './reducers/groupReducer'
import roomReducer from './reducers/roomReducer'

const reducer = combineReducers({
    group: groupReducer,
    room: roomReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'))



