// src/services/api.js
import axios from 'axios';
import storage from '../utils/localStorage';
import { dadosAmbiente } from "../utils/env"

const api = axios.create({
    baseURL: dadosAmbiente.urlBaseApi,
});

api.interceptors.request.use((config) => {
    const token = storage.get("TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;