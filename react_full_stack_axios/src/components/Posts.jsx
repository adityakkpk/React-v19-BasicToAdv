import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import PostCard from "./PostCard";

const Posts = () => {
  const [data, setData] = useState([""]);

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data);
    console.log(res.data);
  };

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if(res.status === 200) {
        const newPosts = data.filter((post) => post.id !== id );
        setData(newPosts);
      }else {
        console.log('Failed to delete the post:', res.status);
        
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <ul className="w-full flex flex-wrap justify-center gap-3">
      {data.length > 1 && data.map((post) => <PostCard data={post} handleDelete={handleDeletePost} key={post.id} />)}
    </ul>
  );
};

export default Posts;
