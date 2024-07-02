import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DateTime from "./DateTime";

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    
    if (todos.includes(inputValue)) return;

    setTodos((prev) => [...prev, inputValue]);
  };

  

  return (
    <section className="w-full flex flex-col justify-center">
      <header className="py-4">
        <h1 className="text-4xl font-bold text-white text-center">Todo List</h1>
        <DateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="flex justify-center my-6">
        <ul>
            {todos.map((todo, index) => (
                <TodoList key={index} data={todo} />
            ))}
        </ul>
      </section>
    </section>
  );
}

export default Todo;
