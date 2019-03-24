import axios from 'axios'
import moment from 'moment'
moment().format()
const baseUrl = 'http://localhost:3001/api'

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/reservations`)
    return response.data
}

const createNew = async group => {
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
    return response.data
}

const remove = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export default { getAll, createNew, remove }