import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/reservations'
const roomUrl = 'http://localhost:3001/api/rooms'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
}

const createNew = async group => {
    const object = { 
        name: group.name,
        username: group.username,
        } 
    const response = await axios.post(`${roomUrl}/5c92aa5c1c9d4400003c60be/reservation`, object) 
    return response.data
}

const remove = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default { getAll, createNew, remove }