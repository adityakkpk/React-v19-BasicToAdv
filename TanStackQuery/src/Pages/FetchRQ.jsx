import React, { useState } from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPostsData } from "../API/api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNo, setPageNo] = useState(0);

  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo],
    queryFn: () => getPostsData(pageNo),
    // gcTime: 1000,
    // staleTime: 5000,
    // refetchInterval: 10000, // refetch every 10 seconds,
    refetchIntervalInBackground: 10000, // refetch every 10 seconds
    placeholderData: keepPreviousData,
  });

  // mutation function to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNo], (currElem) => {
        return currElem?.filter((post) => post.id !== id);
      });
    }
  });

  if (isPending)
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section>
      <div className="text-center my-5 text-xl font-bold">FetchRQ</div>
      {data?.map((post) => (
        <div
          key={post.id}
          className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4"
        >
          <NavLink to={`/rq/${post.id}`} className="md:flex">
            <div className="p-8">
              <div className="text-sm text-sky-500 font-bold mb-2">
                {post.id}
              </div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {post.title}
              </div>
              <p className="mt-2 text-gray-500">{post.body}</p>
            </div>
          </NavLink>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md m-5" onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        </div>
      ))}
      <div className="flex gap-5 m-10">
        <button
          className="border px-3 py-1 rounded-md hover:bg-gray-900 hover:border-none duration-200 disabled:border-none"
          onClick={() => setPageNo((prev) => prev - 3)}
          disabled={pageNo === 0 ? true : false}
        >
          Prev
        </button>
        <h2>{pageNo / 3 + 1}</h2>
        <button
          className="border px-3 py-1 rounded-md hover:bg-gray-900 hover:border-none duration-200"
          onClick={() => setPageNo((prev) => prev + 3)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default FetchRQ;
