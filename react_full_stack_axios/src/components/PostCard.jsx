import React from "react";

const PostCard = ({ post, handleDelete, handleUpdatePost }) => {
  return (
    <div className="w-[320px] py-2 px-2 flex flex-col border-l-2 bg-slate-700 rounded">
      <p className="h-[30px]">{post.id}.</p>
      <p className="h-[80px]">Title: {post.title}</p>
      <p className="h-[200px]">News: {post.body}</p>
      <div className="flex gap-3">
        <button className="px-5 py-1 rounded bg-green-500 text-black" onClick={() => handleUpdatePost(post)}>
          Edit
        </button>
        <button className="px-5 py-1 rounded bg-red-500 text-black" onClick={() => {handleDelete(post.id)}}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
