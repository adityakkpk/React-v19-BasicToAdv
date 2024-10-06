import { useParams, Link } from "react-router-dom";
import { fetchIndividualPost } from "../../API/api";
import { useQuery } from "@tanstack/react-query";

export default function FetchIndv() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchIndividualPost(id),
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
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 p-5">
      <div className="p-8">
        <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
          Post ID: {id}
        </h2>
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
          {data?.title}
        </h3>
        <p className="mt-2 text-gray-500">{data?.body}</p>
      </div>
      <Link
        to="/rq"
        className="px-6 mt-10 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </Link>
    </div>
  );
}
