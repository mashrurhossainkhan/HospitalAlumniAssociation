import { API } from '../utils/config';
import axios from 'axios';

export const getUsers = () => {
    return axios.get(`${API}/user/allusers`)
}

export const getUserDetails = (id) => {
    return axios.get(`${API}/user/allusers/${id}`)
}


export const updateProfile = (token, data) => {
    return axios.put(`${API}/user/allusers/${data._id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}



