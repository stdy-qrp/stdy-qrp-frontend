import React,{useState} from 'react'
import {changeGroup} from '../reducers/groupReducer'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import { Button 
        ,Grid
        ,Header
        ,Segment
        ,Form
        ,Dropdown} from 'semantic-ui-react'


const Body = (props) => {
    //state to save the telegram group selection
    const [telegramGroup, setTelegramGroup] = useState('')

    const getTelegramGroup = (event,{value}) => {
        setTelegramGroup(value)
    }

    const addGroup = async (event) => {
        event.preventDefault()
        const newGroup = {
            name: event.target.groupname.value,
        }
        props.changeGroup(newGroup)
        props.history.push('/')

    }
    return(
        <Grid centered verticalAlign='middle'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                Add A Group
                </Header>
                <Segment>
                    <Form onSubmit={addGroup}>
                        <Form.Field>
                            <label>Group Name</label>
                            <input name='groupname' placeholder="Group Name" />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input name='username' placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Telegram Group</label>
                            <Dropdown
                                name='telegram'
                                placeholder='Select telegram group'
                                options={[{value: 'DIS', text: 'Designing Interactive Systems'}]}
                                selection
                                onChange={getTelegramGroup}
                                />
                        </Form.Field>
                        <Button type='submit'>Add</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return{
        group: state.group,
        room: state.room
    }
}

const mapDispatchToProps =  {
        changeGroup
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Body))