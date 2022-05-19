import axios from "axios"

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const get = (path, queryParams, data) => {
    return axios.get(`${apiEndpoint}${path}`, {
        params: queryParams ? queryParams : {},
        data: data ? data : {}
    })
}

export const post = (path, queryParams, data) => {
    return axios.post(`${apiEndpoint}${path}`, data, {
        params: queryParams ? queryParams : {}
    })
}

export const put = (path, queryParams, data) => {
    return axios.put(`${apiEndpoint}${path}`, data, {
        params: queryParams ? queryParams : {}
    })
}

export const deleteReq = (path, queryParams, data) => {
    return axios.delete(`${apiEndpoint}${path}`, {
        params: queryParams ? queryParams : {},
        data: data ? data : {}
    })
}