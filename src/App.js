import React from 'react';
import './App.css';
import Body from './components/body'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const  App = (props) => {
  
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

export default App;
