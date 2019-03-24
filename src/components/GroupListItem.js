import React from 'react'
import { List } from 'semantic-ui-react'
import Moment from 'react-moment'
import {
  Link
} from 'react-router-dom'

const GroupListItem = ({ group }) => {
  return(
    <List.Item>
      <List.Content>
        <Link to={`deleteGroup/${group.id}`}>
          <List.Header>{group.name}</List.Header>
        </Link>
        <List.Description>
          At {group.Location}<br/>
          <Moment format="HH:mm">{group.startTime}</Moment>
          -
          <Moment format="HH:mm">{group.endTime}</Moment>
        </List.Description>
      </List.Content>
    </List.Item>

  )
}

export default GroupListItem
