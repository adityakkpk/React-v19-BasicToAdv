import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import PostCard from "./PostCard";

const Posts = ({data, setData, updateData, setUpdateData}) => {
  

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data);
    // console.log(res.data);
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

  const handleUpdatePost = (post) => setUpdateData(post);

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <ul className="w-full flex flex-wrap justify-center gap-3">
      {data.length > 1 && data.map((post) => <PostCard post={post} handleDelete={handleDeletePost} key={post.id} handleUpdatePost={handleUpdatePost} />)}
    </ul>
  );
};

export default Posts;
