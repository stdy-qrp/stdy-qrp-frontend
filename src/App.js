import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { initGroups } from './reducers/groupReducer'
import { getRoom, initRooms } from './reducers/roomReducer'
import './App.css'
import Body from './components/body'
import GroupList from './components/GroupList'
import HeaderBar from './components/HeaderBar'
import DeleteGroup from './components/DeleteGroup'
import { Grid, Message, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'

const  App = (props) => {
  console.log(props)
  useEffect(() => {
    props.initGroups()
    props.initRooms()
    getParams()

  },[])

  const getParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const room = searchParams.get('room')
    console.log(room)
    if(room){
      props.getRoom(room)
    }
  }
  const groupById = (id) => props.groups.find(g => g.id === id)
  
  const showInfo = () => (
    <Segment>
      <Message positive>
       {props.selectedRoom ? <Message.Header>Looks like you're in {props.selectedRoom.name}</Message.Header>
        :  <Link to={'/selectroom'}>
          <Button primary>Start by choosing a room</Button>
      </Link>
     }
      </Message>
    </Segment>

)

  return (
    <Router>
      <div>
        <HeaderBar />
       {showInfo()}
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <Route exact path='/' render = {({match}) =>
              <GroupList /> 
            }/>
            <Route exact path="/addgroup" render={({ match }) =>
              <Body />
            } />
            <Route exact path="/deleteGroup/:id" render={({ match }) =>
              <DeleteGroup group={groupById(match.params.id)} />
            }/>
            <Route exact path="/selectroom" render={({ match }) =>
              <div>
                <h3>Under construction!</h3>
                <p>Use QR code :)</p>
                <Link to={'/'}>
                  <Button default>Back</Button>
                </Link>
              </div>
            } />
          </Grid.Column>
        </Grid>

      </div>
    </Router>
  )
}


const mapStateToProps = (state) => {
  return{
    groups: state.group,
    rooms: state.resources.rooms,
    selectedRoom: state.resources.selectedRoom
  }
}

const mapDispatchToProps = {
  initGroups,
  getRoom,
  initRooms
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
