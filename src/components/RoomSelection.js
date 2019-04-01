import React from 'react'
import { connect } from 'react-redux'
import { Select, Form, Button } from 'semantic-ui-react'
import { getRoom } from '../reducers/roomReducer'
import { withRouter, Link } from 'react-router-dom'

const SelectRoom = (props) => {
  const changeActiveRoom = (value) => {
    props.getRoom(value)
    props.history.push('/')
  }

  const roomOptions = props.rooms.map(room => ({ value:room.code, text:room.name }))
  console.log(roomOptions)

  return (
    <Form>
      <Form.Field>
        <label>Room</label>
        <Select
          placeholder='Select room'
          onChange={(e, { value }) => changeActiveRoom(value)}
          options={roomOptions}>
        </Select>
      </Form.Field>
      <Link to={'/'}>
        <Button default>Back</Button>
      </Link>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedRoom: state.resources.selectedRoom,
    rooms: state.resources.rooms
  }
}

export default connect(
  mapStateToProps,
  { getRoom }
)(withRouter(SelectRoom))
