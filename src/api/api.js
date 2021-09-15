const BASE_URL = 'https://lab-api-bq.herokuapp.com'

export const post = (url, data, parseToJSON=true) => {
    return fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(async (response) => {
        if(!parseToJSON){
            return response
        }
        const json = await response.json();
        console.log('numero 1')
        if(!response.ok) {
            console.log('numero 2')
            throw json;
        }
        console.log('numero 3')
        return json;
    
})}