import React from 'react'
import { connect } from 'react-redux'
import {getRoom} from '../reducers/roomReducer'
import { List, Header, Button, Segment } from 'semantic-ui-react'
import GroupListItem from './GroupListItem'
import {
  Link
} from 'react-router-dom'

const GroupList = (props) => {
  return(
    <Segment placeholder textAlign='center'>
      <Header as="h2" textAlign="center">
            Active Groups
      </Header>
      {props.activeGroups.length < 1 ?
        <p>No active groups. Maybe create a group? </p> :
        <List divided relaxed animated>
          {props.activeGroups.map(g => <GroupListItem key={g.id} group={g}/>)}
        </List>
      }
      <Link to={'/addgroup'}>
        <Button disabled={props.selectedRoom === null} primary>Add new group</Button>
      </Link>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return{
    activeGroups: state.group,
    selectedRoom: state.resources.selectedRoom
  }
}

export default connect(
  mapStateToProps,
  { getRoom }
)(GroupList)
