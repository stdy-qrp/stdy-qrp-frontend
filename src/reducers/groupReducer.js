const groups = [
    {
        name: 'FullStack tehtava 1 tukiryhma',
        creatorName: 'user1',
        Location: 'A111',
        startTime: new Date(),
        endTime: new Date(),
        active: true,
        id: 1
    }
]
export const checkIfGroupActive = () => {

}


export const changeGroup = (group) => {
    
    return{
        type:'ADD',
        data: toObject(group)
        
    }
}

const toObject = (group) => {
    //get current time
    const startTime = new Date() 
     
    
    const groupObject = {
        name: group.name,
        creatorName: group.creatorName,
        Location: group.Location,
        startTime,
        endTime: startTime.setHours(startTime.getHours() + 1),
        active: true,
        id: 1,

    }
    return groupObject
}
const groupReducer = (state = groups, action )=> {
    switch(action.type){
        case 'ADD':
            console.log(action.data)
            return [...state, action.data]
        case 'INACTIVATE':
            const time = Date.now()
            const activeGroups = [...groups].filter(g => g.endTime < time)
            return activeGroups
        default:
            return state
    }
}

export default groupReducer