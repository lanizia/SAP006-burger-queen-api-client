const BASE_URL = 'https://lab-api-bq.herokuapp.com'

export const post = (url, data, token) => {
    return fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(async (response) => {
        const json = await response.json();
        if(!response.ok) {
            throw json;
        }
        return json;
    
})}