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

export const post = (url, data, token) =>
    fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Authorization: token
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