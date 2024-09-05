import axios from 'axios';
import { backendConfig } from './config';

const baseURL = backendConfig.backendUrl;
const token = JSON.parse(localStorage.getItem('session'))?.token;

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
});

axios.defaults.withCredentials = true;

/* USERS */

export const getUser = async (userIdOrUsername) => {
    try {
        const response = await api.get(`/users/${userIdOrUsername}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter usuário');
    }
};

export const searchUsers = async ({ search, page, limit}) => {
    try {
        const response = await api.get(`/users/searchUsers?page=${page}&limit=${limit}&search=${search}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const checkFollowing = async ({userId, userToCheckId}) => {
    try {
        const response = await api.get(`/users/${userId}/checkFollowing?userToCheckId=${userToCheckId}`);
        return response.data.isFollowing;
    } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao checar');
    }
}

export const followUnfollowUser = async ({userId, userToFollowId, operation}) => {
    try {
        const response = await api.patch(`/users/${userId}/followUnfollow?operation=${operation}&userToFollowId=${userToFollowId}`);

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getUserFollowersIng = async ({myUserId, username, page, limit, seeFollow, search}) => {
    try {
        const response = await api.get(`/users/${username}/followersIng?page=${page}&limit=${limit}&myUserId=${myUserId}&seeFollow=${seeFollow}&search=${search}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const editProfile = async (userId, formData) => {
    try {
        const response = await api.post(`/users/${userId}/editProfile`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao criar post');
    }
};

/* POSTS */

export const createPost = async (formData) => {
    try {
        const response = await api.post(`/posts/createPost`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao criar post');
    }
};

export const getPosts = async (userId, page, limit) => {
    try {
        const response = await api.get(`/posts/${userId}/posts?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter posts');
    }
};