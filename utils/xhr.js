import Axios from 'axios'
import { Platform } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5555/api' : 'http://192.168.1.13:5555/api';

export const xhr = Axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
