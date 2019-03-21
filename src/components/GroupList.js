import React from 'react'
import { connect } from 'react-redux'
import {List ,Grid, Header, Button, Segment} from 'semantic-ui-react'
import GroupListItem from './GroupListItem'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
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
        <Link to='/addgroup'>
            <Button primary>Add new group</Button>
        </Link>
  </Segment>
    )
}

const activeGroups = (groups) => {
    const activeGroups = groups
    return activeGroups
}
const mapStateToProps = (state) => {
    return{
        activeGroups: activeGroups(state.group)
    }
}

export default connect(
    mapStateToProps,
    null
)(GroupList)