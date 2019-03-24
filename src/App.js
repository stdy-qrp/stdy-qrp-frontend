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
  console.log(props)
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
            <Route exact path='/' render = {({match}) =>
              <GroupList /> 
            }/>
            <Route exact path="/:code" render= {({ match }) => 
              <GroupList thisRoom={match.params.code} /> 
            }/>
            <Route exact path="/addgroup" render={({ match }) =>
              <Body />
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
    groups: state.group,
    rooms: state.room
  }
}

const mapDispatchToProps = {
  initGroups,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
