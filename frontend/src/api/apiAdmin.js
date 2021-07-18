import { API } from '../utils/config';
import axios from 'axios';

export const createActivity = (token, data) => {
    return axios.post(`${API}/activity`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const createDetail = (token, data) => {
    return axios.post(`${API}/detail`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getActivity = () => {
    return axios.get(`${API}/activity`)
}