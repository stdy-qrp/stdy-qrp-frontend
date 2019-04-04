import React from 'react'
import { changeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Button, Header, Segment, Form, Dropdown } from 'semantic-ui-react'

const AddGroupForm = (props) => {

  const addGroup = async (event) => {
    event.preventDefault()

    // todo: validation and better modal / pop up than this :) 
    if (!selectedChannel){
      alert('Select channel, plz')
      return
    }
    const newGroup = {
      name: event.target.groupname.value,
      username: event.target.username.value,
      channelId: selectedChannel
    }

    await props.changeGroup(newGroup, props.selectedRoom.id)
    props.history.push('addgroup/done')
  }

  let selectedChannel;

  const handleSelect =  (e, { value }) => {
    selectedChannel = value
  }
  
  return (
    <>
      <Header as="h2" textAlign="center">
        Add A Group
      </Header>

      <Segment>
        <Form onSubmit={addGroup}>
          <Form.Field>
            <label>Group Name</label>
            <input name='groupname' placeholder="Group Name" />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input name='username' placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Telegram Group</label>
            <Dropdown
              name='telegram'
              placeholder='Select telegram group'
              options={props.channels}
              selection
              onChange = {handleSelect}
            />
          </Form.Field>
          <Link to='/'>
            <Button>Cancel</Button>
          </Link>
          <Button disabled={props.selectedRoom === null} type='submit' positive>Add</Button>
        </Form>
      </Segment>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedRoom: state.resources.selectedRoom,
    channels: state.channels.map(c => {
      console.log(c)
      return {
        key: c.channelId,
        text: c.name.toUpperCase() + ` - ${c.description}`,
        value: c.channelId
      }

    })
  }
}

const mapDispatchToProps =  {
  changeGroup
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddGroupForm))
