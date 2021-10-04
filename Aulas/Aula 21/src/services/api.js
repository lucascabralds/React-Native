import axios from 'axios';
//rn-api/?api=posts
const api = axios .create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;