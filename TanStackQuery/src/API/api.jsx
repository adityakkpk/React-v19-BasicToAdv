import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPostsData = async () => {
    try {
        const response = await api.get(`/posts`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}