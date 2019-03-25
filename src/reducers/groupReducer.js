import groupService from '../services/groups'

export const inactivate = (id) => {
  return{
    type: 'INACTIVATE',
    data: id
  }
}

export const changeGroup = (group, roomId) => {
  return async dispatch => {
    const newGroup = await groupService.createNew(group, roomId)
    dispatch({
      type: 'ADD',
      data: newGroup
    })
  }
}

export const initGroups = () => {
  return async dispatch => {
    const groups = await groupService.getAll()
    dispatch({
      type: 'INIT_GROUPS',
      data: groups
    })
  }
}

export const removeGroup = (id) => {
  return async dispatch => {
    await groupService.remove(id)
    dispatch({
      type: 'REMOVE',
      data:{
        id
      }
    })
  }
}

const groupReducer = (state = [], action ) => {
  switch(action.type){
  case 'ADD':
    return [...state, action.data]
  case 'INACTIVATE': {
    const id = action.data.id
    const groupToChange = state.find(g => g.id === id)
    const inactiveGroup = {
      ...groupToChange,
      active: false
    }
    return state.map(g =>
      g.id === id ? inactiveGroup : g)
  }
  case 'INIT_GROUPS':
    return action.data
  case 'REMOVE':
    return [...state].filter(g => g.id !== action.data.id)
  default:
    return state
  }
}

export default groupReducer
