import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users',
});

export const getUserDetails = async (username = "adityakkpk") => {
    try {
        const response = await api.get(`/${username}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}