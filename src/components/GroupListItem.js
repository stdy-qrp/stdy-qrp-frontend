import React from 'react'
import {List} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const GroupListItem = ({group}) => {
    return(
        <Link to={`DeleteGroup/${group.id}`}>
        <List.Item> 
            <List.Content>
                <List.Header>{group.name}</List.Header>
                <List.Description>At {group.Location} from </List.Description>
            </List.Content>
        </List.Item>
        </Link>
    )
}

export default GroupListItem