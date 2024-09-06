import React, { useEffect, useState } from "react";
import { getPosts } from "../api/PostApi";
import PostCard from "./PostCard";

const Posts = () => {
  const [data, setData] = useState([""]);

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center gap-3">
      {data.map((post, index) => {
        return <PostCard key={index} data={post} />;
      })}
    </div>
  );
};

export default Posts;
