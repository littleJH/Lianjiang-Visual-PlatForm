import axios from 'axios'

const request = axios.create({
  baseURL: 'http://106.53.120.252:7070'
})

export default request
