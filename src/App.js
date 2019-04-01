import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initGroups } from './reducers/groupReducer'
import { getRoom, initRooms } from './reducers/roomReducer'
import './App.css'
import AddGroup from './components/AddGroup'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import GroupDetails from './components/GroupDetails'
import RoomSelection from './components/RoomSelection'
import { Grid, Message, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'

const  App = (props) => {
  useEffect(() => {
    props.initGroups()
    props.initRooms()
    getParams()
  },[])

  const getParams = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const room = searchParams.get('room')
    if (room) {
      props.getRoom(room)
    }
  }

  const showInfo = () => (
    <Segment>
      <Message positive>
        {props.selectedRoom ? (
          <Message.Header>Looks like you&apos;re in {props.selectedRoom.name}</Message.Header>
        ) : (
          <Link to={'/selectroom'}>
            <Button primary>Start by choosing a room</Button>
          </Link>
        )}
      </Message>
    </Segment>
  )

  return (
    <Router>
      <div>
        <HeaderBar />
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <Route exact path='/' render = {(/* { match } */) =>
              <div>
                {showInfo()}
                <GroupList />
              </div>
            }/>
            <Route exact path="/addgroup" render={(/* { match } */) =>
              <AddGroup />
            } />
            <Route exact path="/details/:id" render={({ match }) =>
              <GroupDetails groupId={match.params.id} />
            }/>
            <Route exact path="/selectroom" render={(/* { match } */) =>
              <RoomSelection />
            } />
          </Grid.Column>
        </Grid>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedRoom: state.resources.selectedRoom,
    rooms: state.resources.rooms
  }
}

const mapDispatchToProps = {
  initGroups,
  getRoom,
  initRooms
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
