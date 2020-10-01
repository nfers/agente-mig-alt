import axios from 'axios'

const API_URL = 'http://localhost:3030'

const api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
       },
})


export { api }