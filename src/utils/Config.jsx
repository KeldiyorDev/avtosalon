import axios from "axios";

export const API = axios.create({
    baseURL: "https://cartestwebapp.herokuapp.com/",
});

API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});