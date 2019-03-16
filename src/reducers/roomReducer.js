const room = ''

export const changeGroup = (newRoom) => {
    return{
        type:'CHANGE',
        data: newRoom
    }
}
const groupReducer = (state = room, action )=> {
    switch(action.type){
        case 'CHANGE':
            return action.data
        default:
            return state
    }
}

export default groupReducer