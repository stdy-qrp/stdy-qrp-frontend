import groupService from '../services/groups'

export const initChannels = () => {
    return async dispatch => {
        const channels = await groupService.getChannels()
        dispatch({
            type: 'INIT_CHANNELS',
            data: channels
        })
    }
}

const channelReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_CHANNELS':
            return action.data
        default:
            return state
    }
}

export default channelReducer
