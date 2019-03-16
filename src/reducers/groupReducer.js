const groups = [
    {
        name: 'FullStack tehtava 1 tukiryhma',
        creatorName: 'user1',
        Location: 'A111',
        startTime: '10:58',
        active: true,
        id: 1
    }
]



export const changeGroup = (data) => {
    
    return{
        type:'ADD',
        data
    }
}
const groupReducer = (state = groups, action )=> {
    switch(action.type){
        case 'ADD':
            console.log(action.data)
            return [...state, action.data]
        default:
            return state
    }
}

export default groupReducer