const BASE_URL = 'https://lab-api-bq.herokuapp.com'

export const post = (url, data, token) => 
    fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())