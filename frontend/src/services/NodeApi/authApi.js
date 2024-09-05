import axios from 'axios';
import { backendConfig } from './config';

const baseURL = backendConfig.backendUrl;

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Something went wrong');
    }
};

// Função para fazer login
export const loginUser = async (userData) => {
    try {
        const response = await api.post('/auth/login', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg || 'Something went wrong');
    }
};

export default api;
