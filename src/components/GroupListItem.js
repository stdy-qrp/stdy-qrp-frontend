import React from 'react'
import {List} from 'semantic-ui-react'

const GroupListItem = ({group}) => {
    return(
        <List.Item> 
            <List.Content>
                <List.Header>{group.name}</List.Header>
                <List.Description>At {group.Location} from {group.startTime}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default GroupListItem