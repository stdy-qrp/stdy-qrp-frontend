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
    return null
  }

  const remove = (id) => {
    props.removeGroup(id)
    props.history.push('/')
  }

  return (
    <Grid verticalAlign='middle'>
      <Grid.Column>
        <Header>
          Reservation Details
        </Header>
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
        <Header>
          Ending reservation
        </Header>
        <Segment>
          <p>To end this reservation now, click the 'end' button</p>
          <p>Reservation will end immediately, and room is freed for other groups</p>
          <Button onClick={() => remove(group.id)} negative>End</Button>
        </Segment>
        <Link to='/'>
          <Button>Go Back</Button>
        </Link>
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
