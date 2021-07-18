import { API } from '../utils/config';
import axios from 'axios';

export const getUsers = () => {
    return axios.get(`${API}/user/allusers`)
}

export const getUserDetails = (id) => {
    return axios.get(`${API}/user/allusers/${id}`)
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

export const getFilteredProducts = (skip, limit, filters = {}, order, sortBy) => {
    const data = {
        order: order,
        sortBy: sortBy,
        limit: limit,
        skip: skip,
        filters: { ...filters }
    }
    return axios.post(`${API}/product/filter`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}