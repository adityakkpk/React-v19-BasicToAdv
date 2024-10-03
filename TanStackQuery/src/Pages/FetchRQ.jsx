import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsData } from "../API/api";

const FetchRQ = () => {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
    gcTime: 1000,
  });

  if (isPending) return (<div>
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  </div>)
  if (isError) return <div>Error: {error.message}</div>;

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
