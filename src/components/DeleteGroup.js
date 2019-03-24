import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import { removeGroup } from '../reducers/groupReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const DeleteGroup = (props) => {
  console.log(props)
  const remove = (id) => {
    props.removeGroup(id)
    props.history.push('/')

  }
  return(
    <Grid verticalAlign='middle'>
      <Grid.Column>
        <Header as="h2" textAlign="center">
                Delete Group
        </Header>
        <p>You are deleting group:  {props.group.name}</p>
        <Button
          onClick={() => remove(props.group.id)}
        >Delete</Button>
      </Grid.Column>
    </Grid>
  )
}
const mapDispatchToProps =  {
  removeGroup
}
export default connect(
  null,
  mapDispatchToProps
)(withRouter(DeleteGroup))
