import axios from 'axios'
<<<<<<< HEAD

const baseUrl = 'http://localhost:3001/api/reservations'
const roomUrl = 'http://localhost:3001/api/rooms'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response.data)
=======
import moment from 'moment'
moment().format()
const baseUrl = 'http://localhost:3001/api'

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/reservations`)
>>>>>>> ec8a825339bc6711adda9333b9d945726749a185
    return response.data
}

const createNew = async group => {
<<<<<<< HEAD
    const object = { 
        name: group.name,
        username: group.username,
        } 
    const response = await axios.post(`${roomUrl}/5c92aa5c1c9d4400003c60be/reservation`, object) 
=======
    const reservation = { 
        name: 'stdy-qrp',
        startTime: moment().format('YYYY-MM-DD HH:mm'),
        endTime: moment().add(1, 'hours').format('YYYY-MM-DD HH:mm'),
        username: 'TheBadMF'
         } 
    console.log('reservation:', reservation)
    const roomId = '5c92aac21c9d4400003c60bf' // <- TODO: should come from the form
    const response = await axios.post(`${baseUrl}/rooms/${roomId}/reservation`, reservation)
    console.log(response)
>>>>>>> ec8a825339bc6711adda9333b9d945726749a185
    return response.data
}

const remove = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default { getAll, createNew, remove }