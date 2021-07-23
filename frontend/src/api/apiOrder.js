import axios from 'axios';
import { API } from '../utils/config';


export const getProfile = token => {
    return axios.get(`${API}/user/allusers/${user._id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const updateProfile = (token, data) => {
    return axios.post(`${API}/user/allusers/${user._id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

