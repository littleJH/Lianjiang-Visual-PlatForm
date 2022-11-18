import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api_lianjiang.mgaronya.com'
})

export default request
