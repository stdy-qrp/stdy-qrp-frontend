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
      text: 'Osa 0, Web-sovellusten toiminnan perusteet',
      key: 0,
      value: 'Osa 0, Web-sovellusten toiminnan perusteet'
    }, {
        text: 'Osa 1, Reactin perusteet',
      key: 1,
        value: 'Osa 1, Reactin perusteet'
    }, {
        text: 'Osa 2, Palvelimen kanssa tapahtuva kommunikointi',
      key: 2,
        value: 'Osa 2, Palvelimen kanssa tapahtuva kommunikointi'
    }, {
        text: 'Osa 3, Palvelimen ohjelmointi NodeJS:n Express-kirjastolla',
      key: 3,
        value: 'Osa 3, Palvelimen ohjelmointi NodeJS:n Express-kirjastolla'
    }, {
        text: 'Osa 4, Express-sovellusten testaaminen, käyttäjänhallinta',
      key: 4,
        value: 'Osa 4, Express-sovellusten testaaminen, käyttäjänhallinta'
    }, {
        text: 'Osa 5, React-sovelluksen testaaminen, custom hookit',
      key: 5,
        value: 'Osa 5, React-sovelluksen testaaminen, custom hookit'
    }, {
        text: 'Osa 6, Sovelluksen tilan hallinta Redux-kirjastolla',
      key: 6,
      value: 'Osa 6, Sovelluksen tilan hallinta Redux-kirjastolla'
    }, {
      text: 'Osa 7, React router, tyylikirjastot ja webpack',
      key: 7,
        value: 'Osa 7, React router, tyylikirjastot ja webpack'
    }, {
      text: 'Osa 8, GraphQL',
      key: 8,
      value: 'Osa 8, GraphQL'
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
