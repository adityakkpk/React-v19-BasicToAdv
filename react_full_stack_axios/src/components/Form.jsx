import React from "react";

const Form = () => {
  return (
    <form className="flex gap-2 rounded bg-gray-600 p-3">
      <input
        type="text"
        className="text-black px-3 py-1 rounded outline-none border-none"
      />
      <input
        type="text"
        className="text-black px-3 py-1 rounded outline-none border-none"
      />
      <button className="px-5 py-1 rounded bg-green-500 text-black">ADD</button>
    </form>
  );
};

export default Form;
