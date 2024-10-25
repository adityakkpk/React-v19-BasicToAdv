import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, fetchTasks } from "../Store/store";

const Todo = () => {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.task);
  console.log(tasks);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    dispatch(addTask(task));
    setTask("");
  };

  const handleFetchTasks = () => {
    dispatch(fetchTasks());
  };

  return (
    <section className="container mx-auto p-4 flex justify-center items-center">
      <div className="px-10 py-5 border rounded-md shadow-lg bg-slate-700">
        <h1 className="text-2xl font-bold mb-4 text-white">Task List</h1>
        <form className="mb-4" onSubmit={handleForm}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new todo"
            className="border p-2 mr-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </form>

        <button
          onClick={handleFetchTasks}
          className="my-5 text-white px-2 py-1 rounded bg-green-400 hover:bg-slate-600 duration-300 active:bg-red-400"
        >
          Fetch Tasks
        </button>

        <ul className="space-y-2 h-72 overflow-y-scroll border border-red-400 p-1 rounded">
          {tasks.map((taskItem, idx) => {
            return (
              <li
                key={Math.random()}
                className="flex items-center border p-2 rounded-md text-white"
              >
                <span>{idx + 1 + " : " + taskItem}</span>
                <button
                  onClick={() => dispatch(deleteTask(idx))}
                  className="ml-auto text-white px-2 py-1 rounded bg-red-400 hover:bg-slate-600 duration-300 active:bg-red-400"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
