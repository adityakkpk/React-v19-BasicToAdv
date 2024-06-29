import React, { useState } from "react";
import {MdCheck, MdDeleteForever} from 'react-icons/md';

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (val) => {
    setInputValue(val);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!inputValue) {
        setInputValue("");
        return;
    }

    if(todos.includes(inputValue)) return;

    setTodos((prev) => [...prev, inputValue]);
    setInputValue("");
  }

  return (
    <section className="w-full flex flex-col justify-center">
      <header className="py-4">
        <h1 className="text-4xl font-bold text-white text-center">Todo List</h1>
      </header>
      <section className="flex justify-center my-6">
        <form className="flex" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              className="h-10 w-[400px] rounded-l-lg focus:outline-none text-lg px-2"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="h-10 flex items-center text-sm px-2 bg-sky-700 text-white rounded-r-lg"
            >
              Add Todo
            </button>
          </div>
        </form>
      </section>
      <section className="flex justify-center my-6">
        <ul>
            {todos.map((todo) => (
                <li className="h-10 my-4 bg-white flex items-center text-lg px-4 rounded-lg" key={todo}>
                  <p className="w-80">{todo}</p>
                  <button className="border mx-2 p-2 rounded bg-slate-300">
                    <MdCheck className="text-green-600" />
                  </button>
                  <button className="border mx-2 p-2 rounded bg-slate-300">
                    <MdDeleteForever className="text-red-600" />
                  </button>
                </li>
            ))}
        </ul>
      </section>
    </section>
  );
}

export default Todo;
