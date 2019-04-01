import groupService from '../services/groups'

export const initRooms = () => {
  return async dispatch => {
    const rooms = await groupService.getRooms()
    dispatch({
      type: 'INIT',
      data: rooms
    })
  }
}

export const getRoom = (code) => {
  return async dispatch => {
    const room = await groupService.getRoom(code)
    dispatch({
      type: 'CHANGE',
      data: room
    })
  }
}

const initState = {
  selectedRoom: null,
  rooms: []
}

const groupReducer = (state = initState, action) => {
  switch(action.type){
  case 'INIT':
    return { ...state, rooms: action.data }
  case 'CHANGE':
    return { ...state, selectedRoom: action.data }
  default:
    return state
  }
}

export default groupReducer
