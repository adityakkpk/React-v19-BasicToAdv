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

export const fetchIndividualPost = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);        
    }
}