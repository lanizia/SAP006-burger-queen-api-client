import {
    getUserToken
} from "../services/auth";

const BASE_URL = 'https://lab-api-bq.herokuapp.com'

const parseResponse = async (response) => {
        const json = await response.json();
        if (!response.ok) {
            throw json;
        }
        return json;
    }

export const post = (url, data) =>
    fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Authorization: getUserToken()
        },
        body: JSON.stringify(data)
    })
    .then(parseResponse) 
  

export const get = (url) =>
    fetch(`${BASE_URL}${url}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            Authorization: getUserToken()
        },
    })
    .then(parseResponse)

 export const put = (url, data) =>
    fetch(`${BASE_URL}${url}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
            Authorization: getUserToken()
        },
        body: JSON.stringify(data)
    })
    .then(parseResponse)