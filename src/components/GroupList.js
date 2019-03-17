import React from 'react'
import { connect } from 'react-redux'
import {List ,Grid, Header, Button} from 'semantic-ui-react'
import GroupListItem from './GroupListItem'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const GroupList = (props) => {
    return(
        <Grid verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Active Groups
                </Header>
                {props.activeGroups.length < 1 ?  <p>No active groups. Maybe create a group? </p> : 
                <List divided relaxed animated>
                    {props.activeGroups.map(g => <GroupListItem group={g}/>)}
                </List>
                }
                <Link to='/addgroup'>
                    <Button>Add new group</Button>
                </Link>
        </Grid.Column>
        </Grid>
    )
}

const activeGroups = (groups) => {
    const activeGroups = groups.filter(g => g.active === true)
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