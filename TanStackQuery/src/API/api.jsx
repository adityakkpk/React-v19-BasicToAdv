import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// export const getPostsData = async () => {
//     try {
//         const response = await api.get(`/posts`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

export const getPostsData = async (pageNo) => {
  try {
    const response = await api.get(`/posts?_start=${pageNo}&_limit=3`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchIndividualPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "Updated Title" });
};


export const fetchUsers = async ({pageParams}) => {
  try {
    const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParams}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};