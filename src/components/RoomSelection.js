import React from 'react'
import { connect } from 'react-redux'
import {Form, Select, Header, Button, Segment } from 'semantic-ui-react'

import {
  Link
} from 'react-router-dom'

const RoomSelection = (props) => {
    console.log(props)
  return(
    <Segment placeholder textAlign='center'>
      <Header as="h2" textAlign="center">
            Select Room
      </Header>
        <Form>
            <select>
                {props.rooms.map(room => <option key={room.code}>{room.code}: {room.name}</option>)}
            </select>
        </Form>
            
     
      <Link to={'/'}>
        <Button primary> Select</Button>
      </Link>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return{
    activeGroups: state.group,
    selectedRoom: state.resources.selectedRoom,
    rooms: state.resources.rooms
  }
}

export default connect(
  mapStateToProps,
  null
)(RoomSelection)