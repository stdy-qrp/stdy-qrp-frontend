import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { initGroups } from './reducers/groupReducer'
import './App.css'
import Body from './components/body'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import DeleteGroup from './components/DeleteGroup'
import { Grid } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'

const  App = (props) => {
  useEffect(() => {
    props.initGroups()
  },[])

  const groupById = (id) => props.groups.find(g => g.id === id)

  return (
    <Router>
      <div>
        <HeaderBar />
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <Route exact path="/" render={() =>
              <GroupList />
            } />
            <Route exact path="/addgroup" render={() =>
              <Body/>
            } />
            <Route exact path="/deleteGroup/:id" render={({ match }) =>
              <DeleteGroup group={groupById(match.params.id)} />
            }/>
          </Grid.Column>
        </Grid>

      </div>
    </Router>
  )
}


const mapStateToProps = (state) => {
  return{
    groups: state.group
  }
}

export default connect(mapStateToProps, { initGroups })(App)
