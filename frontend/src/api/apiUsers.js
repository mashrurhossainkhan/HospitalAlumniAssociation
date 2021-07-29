import { API } from '../utils/config';
import axios from 'axios';

export const getUsers = () => {
    return axios.get(`${API}/user/allusers`)
}

export const getUserDetails = (id) => {
    return axios.get(`${API}/user/allusers/${id}`)
}

export const getActivityWithDetails = () => {
    return axios.get(`${API}/detail`)
}

export const getUniqueActivityWithDetails = (id) => {
    return axios.get(`${API}/api/detail/${id}`)
}

export const updateProfile = (token, data) => {
    return axios.put(`${API}/user/allusers/${data._id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const deleteUser = (token, data) => {
    return axios.delete(`${API}/user/allusers/${data._id}`), {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

export const deleteDetails = (token, data) => {
    return axios.delete(`${API}/detail/${data._id}`), {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}




