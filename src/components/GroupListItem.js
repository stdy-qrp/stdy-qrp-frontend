import React from 'react'
import {List} from 'semantic-ui-react'
import Moment from 'react-moment'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const GroupListItem = ({group}) => {
    return(
        
        <List.Item> 
            <List.Content>
                <Link to={`deleteGroup/${group.id}`}>
                    <List.Header>{group.name}</List.Header>
                </Link>
                <List.Description>
                At {group.Location} 
                Start time: <Moment format="HH:mm DD/MM/YYYY"
                >{group.startTime}</Moment> 
                </List.Description>
            </List.Content>
        </List.Item>
        
    )
}

export default GroupListItem