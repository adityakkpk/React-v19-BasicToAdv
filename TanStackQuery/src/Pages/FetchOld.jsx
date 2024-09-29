import React, { useEffect, useState } from "react";
import { getPostsData } from "../API/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await getPostsData();
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      <div className="text-center my-5 text-xl font-bold">FetchOld</div>
      {posts?.map((data) => (
        <div key={data.id} className="flex justify-center my-10 text-xl">{data.title}</div>
      ))}
    </section>
  );
};

export default FetchOld;
