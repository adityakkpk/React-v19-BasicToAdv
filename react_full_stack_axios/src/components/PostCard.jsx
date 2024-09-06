import React from "react";

const PostCard = ({ data }) => {
  return (
    <div className="w-[320px] py-2 px-2 flex flex-col border-l-2 bg-slate-700 rounded">
      <p className="h-[30px]">{data.id}.</p>
      <p className="h-[80px]">Title: {data.title}</p>
      <p className="h-[200px]">News: {data.body}</p>
      <div className="flex gap-3">
        <button className="px-5 py-1 rounded bg-green-500 text-black">
          Edit
        </button>
        <button className="px-5 py-1 rounded bg-red-500 text-black">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
