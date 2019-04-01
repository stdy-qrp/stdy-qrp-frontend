import React from 'react'
import { changeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Button, Header, Segment, Form, Dropdown } from 'semantic-ui-react'

const AddGroupForm = (props) => {

  const addGroup = async (event) => {
    event.preventDefault()
    const newGroup = {
      name: event.target.groupname.value,
      username: event.target.username.value
    }
    await props.changeGroup(newGroup, props.selectedRoom.id)
    props.history.push('addgroup/done')
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
              options={[{ value: 'qrp', text: 'Impromptu Study Group' }]}
              selection
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
    selectedRoom: state.resources.selectedRoom
  }
}

const mapDispatchToProps =  {
  changeGroup
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddGroupForm))
