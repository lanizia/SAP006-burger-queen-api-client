import { getUserToken } from '../services/auth';

const BASE_URL = 'https://lab-api-bq.herokuapp.com';

const parseResponse = async (response) => {
  const json = await response.json();
  if (!response.ok) {
    throw json;
  }
  return json;
};
const parseBody = (data) => {
  if (typeof data === 'object') {
    return JSON.stringify(data);
  }
  return data;
};

export const post = (url, data) =>
  fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getUserToken(),
    },
    body: parseBody(data),
  }).then(parseResponse);

export const get = (url) =>
  fetch(`${BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getUserToken(),
    },
  }).then(parseResponse);

export const put = (url, data) =>
  fetch(`${BASE_URL}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getUserToken(),
    },
    body: parseBody(data),
  }).then(parseResponse);
