import Axios from 'axios'

export const xhr = Axios.create({
    baseURL: 'http://localhost:5000/api/',
})