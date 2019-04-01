import React/* ,{ useState } */ from 'react'
import { changeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter, Link, Route } from 'react-router-dom'
import { Button, Grid, Header, Segment, Form, Dropdown } from 'semantic-ui-react'

const AddGroup = (props) => {

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
    <Grid centered verticalAlign='middle'>
      <Grid.Column>

        <Route
          path={`${props.match.path}/done`}
          render={() => {
            return (
              <>
                <h3>Group created!</h3>
                <p>
                  We&apos;ve informed your friends at&nbsp;
                  <a target="_blank" rel="noopener noreferrer" href="https://t.me/stdy_qrp">t.me/stdy_qrp</a>
                </p>
                <Link to={'/'}>
                  <Button primary>Done</Button>
                </Link>
              </>
            )
          }}
        />

        <Route
          exact
          path={props.match.path}
          render={() => {
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
          }}
        />

      </Grid.Column>
    </Grid>
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
)(withRouter(AddGroup))
