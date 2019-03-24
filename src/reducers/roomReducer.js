import groupService from '../services/groups'

export const initRooms = () => {
  return async dispatch => {
    const groups = await groupService.getRooms()
    dispatch({
      type: 'INIT',
      data: groups
    })
  }
}
const groupReducer = (state = [], action ) => {
  switch(action.type){
  case 'INIT':
    return action.data
  default:
    return state
  }
}

export default groupReducer