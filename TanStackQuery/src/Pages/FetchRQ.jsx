import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsData } from "../API/api";

const FetchRQ = () => {

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
  });

  return (
    <section>
      <div className="text-center my-5 text-xl font-bold">FetchRQ</div>
      {data?.map((post) => (
        <div key={post.id} className="flex justify-center my-10 text-xl">
          {post.title}
        </div>
      ))}
    </section>
  );
};

export default FetchRQ;
