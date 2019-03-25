import React from 'react'
import { Grid, Header, Button, List, Segment } from 'semantic-ui-react'
import { removeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const GroupDetails = (props) => {
  const { group } = props

  if (!group) {
    // Wait for asynchronous operation
    return null
  }

  const remove = (id) => {
    props.removeGroup(id)
    props.history.push('/')
  }

  return (
    <Grid verticalAlign='middle'>
      <Grid.Column>
        <Segment>
          <Header as="h2" textAlign="center">
            {group.name}
          </Header>
          <List.Item>
            <List.Content>
              <List.Description>
                {group.room && (<>{group.room.name}<br/></>)}
                <Moment format="HH:mm">{group.startTime}</Moment>
                -
                <Moment format="HH:mm">{group.endTime}</Moment>
              </List.Description>
            </List.Content>
          </List.Item>
        </Segment>

        <p>You are ending group: {group.name}</p>
        <Link to='/'>
          <Button>Cancel</Button>
        </Link>
        <Button onClick={() => remove(group.id)} negative>End</Button>

      </Grid.Column>
    </Grid>
  )
}

const getGroupById = (groups, id) => groups.find(g => g.id === id)

const mapStateToProps = (state, ownProps) => {
  return {
    group: getGroupById(state.groups, ownProps.groupId),
  }
}

const mapDispatchToProps =  {
  removeGroup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GroupDetails))
