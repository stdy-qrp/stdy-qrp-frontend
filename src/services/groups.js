import axios from 'axios'
import moment from 'moment'
moment().format()
const baseUrl = '/api'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/reservations`)
  return response.data
}

const getRooms = async () => {
  const response = await axios.get(`${baseUrl}/rooms`)
  return response.data
}

const getRoom = async (code) => {
  const response = await axios.get(`${baseUrl}/rooms/${code}`)
  return response.data
}

const createNew = async (group, roomId) => {
  const object = {
    name: group.name,
    username: group.username,
    channelId: group.channelId
  }
  const response = await axios.post(`${baseUrl}/rooms/${roomId}/reservation`, object)
  return response.data
}

const remove = async id => {
  const response = await axios.delete(`${baseUrl}/reservations/${id}`)
  return response.data
}
const getChannels = async (code) => {
  const response = await axios.get(`${baseUrl}/channels/`)
  return response.data
}

export default { getAll, createNew, remove, getRooms, getRoom, getChannels }
