import React from 'react'
import {List ,Grid, Header, Button} from 'semantic-ui-react'

const DeleteGroup = ({group}) => {
    console.log(group)
    return(
        <Grid verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Delete Group 
                </Header>
        </Grid.Column>
        </Grid>
    )
}

export default DeleteGroup