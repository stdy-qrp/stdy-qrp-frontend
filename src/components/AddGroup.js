import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import AddGroupForm from './AddGroupForm'
import AddGroupFinish from './AddGroupFinish'

const AddGroup = (props) => {
  return (
    <Grid centered verticalAlign='middle'>
      <Grid.Column>
        <Route exact path={props.match.path} component={AddGroupForm} />
        <Route path={`${props.match.path}/done`} component={AddGroupFinish} />
      </Grid.Column>
    </Grid>
  )
}

export default withRouter(AddGroup)
