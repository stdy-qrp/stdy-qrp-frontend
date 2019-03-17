import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import {initGroups} from './reducers/groupReducer'
import './App.css';
import Body from './components/body'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import DeleteGroup from './components/DeleteGroup'

import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const  App = (props) => {
  useEffect(() => {    
    props.initGroups()
    },[])

    const groupById = (id) => {
      console.log('finding group')
      props.groups.find(group => group.id === Number(id))
    }

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
        <Route exact path="/deleteGroup/:id" render={({match}) => 
          <DeleteGroup group={groupById(match.params.id)} />
        }/>
      </div>
    </Router>
    );
}


const mapStateToProps = (state) => {
  return{
      groups: state.group
  }
}

export default connect(mapStateToProps, { initGroups })(App)
