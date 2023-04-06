import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

api.interceptors.request.use(function (config) {
    config.headers = config.headers || {};
    config.headers.Authorization = localStorage.getItem('token');
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;