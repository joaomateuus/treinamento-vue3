import axios from 'axios';
import authService from './auth.js'

const API_ENVS = {
    production:'',
    development: '',
    local: 'http://localhost:3000'
};

const httpClient = axios.create({
    baseURL: API_ENVS.local
});

httpClient.interceptors.response.use(()=> response, (error) => {
    const canThrowAnError = error.request.status = 0 || error.request.status === 500

    if(canThrowAnError) {
        throw new Error(error.message);
    }

    return error;
});

export default {
    auth: authService(httpClient)
}