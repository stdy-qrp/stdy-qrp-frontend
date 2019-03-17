import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import {initGroups} from './reducers/groupReducer'
import './App.css';
import Body from './components/body'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const  App = (props) => {
  useEffect(() => {    
    props.initGroups()
    },[])

  return (
    <Router>
      <div>
        <HeaderBar />
        <Route exact path="/" render={() =>
          <GroupList />
        } />
        <Route exact path="/addgroup" render={() =>
          <Body/>
        } />
      </div>
    </Router>
    );
}

export default connect(null, { initGroups })(App)
