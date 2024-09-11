import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getPosts = () => {
    return api.get("/posts");
};

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const addPost = (data) => {
    return api.post("/posts", data);
} 

//PUT method
export const updatePost = (id, data) => {
    return api.put(`/posts/${id}`, data);
}