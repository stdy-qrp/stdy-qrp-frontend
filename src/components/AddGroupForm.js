import React from 'react'
import { changeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Button, Header, Segment, Form, Dropdown, TextArea } from 'semantic-ui-react'

const AddGroupForm = (props) => {
  const addGroup = async (event) => {
    event.preventDefault()

    // todo: validation and better modal / pop up than this :) 
    if (props.selectedRoom.code === '123' && !selectedGroupName) {
      alert('Select group name, plz')
      return 
    }
    if (!selectedChannel){
      alert('Select channel, plz')
      return
    }

    // if room.code 123, use dropdown 
    const groupName = props.selectedRoom.code === '123' ? selectedGroupName : event.target.description.value
    const newGroup = {
      name: groupName,
      username: event.target.username.value,
      channelId: selectedChannel
    }

    await props.changeGroup(newGroup, props.selectedRoom.id)
    props.history.push('addgroup/done')
  }

  let selectedChannel;
  let selectedGroupName;
  const handleSelect =  (e, { value }) => {
    selectedChannel = value
  }
  const handleSelectedLesson = (e, {value}) => {
    selectedGroupName = value
  }

  return (
    <>
      <Header as="h2" textAlign="center">
        Add A Group
      </Header>

      <Segment>
        <Form onSubmit={addGroup}>
        { console.log(props.selectedRoom)}
        { props.selectedRoom && props.selectedRoom.code === '123' 
          ?
          <Form.Field>
            <label>Group Name</label>
             <Dropdown
              name = 'groupname'
              placeholder='Select group name'
              options={getGroupOptions()}
              selection
              onChange = {handleSelectedLesson}
            />
          </Form.Field>
           : 
           <Form.Field>
            <label>Description</label>
            <TextArea name='description' placeholder='Description of the subject' />
          </Form.Field>
           }
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
  const getGroupOptions = () => {
    return [{
      text: 'Osa 0',
      key: 0,
      value: 0
    }, {
      text: 'Osa 1',
      key: 1,
      value: 1
    }, {
      text: 'Osa 2',
      key: 2,
      value: 2
    }, {
      text: 'Osa 3',
      key: 3,
      value: 3
    }, {
      text: 'Osa 4',
      key: 4,
      value: 4
    }, {
      text: 'Osa 5',
      key: 5,
      value: 5
    }, {
      text: 'Osa 6',
      key: 6,
      value: 6
    }, {
      text: 'Osa 7',
      key: 7,
      value: 7
    }, {
      text: 'Osa 8',
      key: 8,
      value: 8
    }]
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
