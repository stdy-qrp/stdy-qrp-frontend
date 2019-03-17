import axios from 'axios'

const baseUrl = 'http://localhost:3001/groups'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async group => {
    console.log('creating new')
    console.log(group)
    const object = { 
        name: group.name,
        startTime: new Date(),
    //end time needs tweaking. Needs to be an hour after startTime!
        endTime: new Date(),
        active: true
         } 
    console.log(object)
    const response = await axios.post(baseUrl, object) 
    console.log(response)
    return response.data
}

export default { getAll, createNew }