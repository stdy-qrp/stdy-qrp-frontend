import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/reservations`)
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
    const roomId = 1 // <- TODO: should come from the form
    const response = await axios.post(`${baseUrl}/${roomId}/reservations`, object)
    console.log(response)
    return response.data
}

export default { getAll, createNew }