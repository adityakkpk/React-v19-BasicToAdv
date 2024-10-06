import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsData } from "../API/api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
    // gcTime: 1000,
    // staleTime: 5000,
    // refetchInterval: 10000, // refetch every 10 seconds,
    refetchIntervalInBackground: 10000, // refetch every 10 seconds
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
        <div key={post.id} className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
          <NavLink to={`/rq/${post.id}`} className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
              <p className="mt-2 text-gray-500">{post.body}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </section>
  );
};

export default FetchRQ;
