import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export const fetchGroups = async () => {
    return axios.get(`${BASE_URL}/groups`)
}

export const fetchPeople = async () => {
    return axios.get(`${BASE_URL}/person`)
}