import React from "react";

const Todo = () => {
  return (
    <section className="container mx-auto p-4 flex justify-center items-center">
      <div className="px-10 py-5 border rounded-md shadow-lg bg-slate-700">
        <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Add a new todo"
            className="border p-2 mr-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Todo
          </button>
        </form>
        <ul className="space-y-2 h-72 overflow-y-scroll border border-red-400 p-1 rounded">
          <li className="flex items-center border p-2 rounded-md">
            <input type="checkbox" className="mr-2" />
            <span className="text-white">Sample todo item</span>
            <button className="ml-auto text-white px-2 py-1 rounded bg-red-400 hover:bg-slate-600 duration-300 active:bg-red-400">Delete</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Todo;
