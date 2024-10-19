import React from "react";

const Todo = () => {
  return (
    <section className="container mx-auto p-4 flex justify-center items-center">
      <div className="px-10 py-5 border rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Add a new todo"
            className="border p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Todo
          </button>
        </form>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Sample todo item</span>
            <button className="ml-auto text-red-500">Delete</button>
          </li>
          {/* More todo items would be dynamically added here */}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
