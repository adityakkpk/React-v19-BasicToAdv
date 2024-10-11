import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUsers } from "../API/api";
import { useInView } from "react-intersection-observer";

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage, allPages);
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  // const handleScroll = () => {
  //   const bottom =
  //     window.innerHeight + window.scrollY >=
  //     document.documentElement.scrollHeight - 500;

  //   if (bottom && hasNextPage) {
  //     fetchNextPage();
  //   }
  // };

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);

    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === "loading")
    return <div className="text-center py-4">Loading...</div>;
  if (status === "error")
    return (
      <div className="text-center py-4 text-red-500">Error fetching data</div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Infinite Scroll Users
      </h1>
      {data?.pages?.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((user) => (
            <div
              key={user.id}
              className={`flex items-center bg-white shadow-md rounded-lg p-4 mb-4 ${user.id === 1 ? "bg-gray-400" : ""}`}
            >
              <img
                src={user.avatar_url || "https://via.placeholder.com/50"}
                alt={`${user.login}'s avatar`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl text-black font-semibold">
                  {user.login}
                </h2>
                <p className="text-gray-600">nodeId: {user.node_id}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
      <div ref={ref}>
        {isFetchingNextPage ? <div>Loading more...</div> : hasNextPage ? "Scroll down to load more" : "no more users"}
      </div>
    </div>
  );
};

export default InfiniteScroll;
