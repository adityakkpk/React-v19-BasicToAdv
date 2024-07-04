import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DateTime from "./DateTime";

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    // if (todos.includes(content)) return;
    const ifTodoAlreadyPresent = todos.find((todo) => todo.content === content);
    if (ifTodoAlreadyPresent) {
      alert("Todo already exists!");
      return;
    }

    setTodos((prev) => [...prev, { id, content, checked }]);
  };

  const handleDelete = (val) => {
    const updatedTodos = todos.filter((todo) => todo.content !== val);
    setTodos(updatedTodos);
  };

  const handleChecked = (val) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.content === val) {
        return {...todo, checked: !todo.checked};
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  return (
    <section className="w-full flex flex-col justify-center">
      <header className="py-4">
        <h1 className="text-4xl font-bold text-white text-center">Todo List</h1>
        <DateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="flex justify-center my-6">
        <ul>
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              data={todo.content}
              handleTodoDelete={handleDelete}
              handleCheckedTodo={handleChecked}
              checked={todo.checked}
            />
          ))}
        </ul>
      </section>
      {todos.length > 0 && (
        <section className="flex justify-center my-6">
          <button
            onClick={() => setTodos([])}
            className="text-white bg-red-400 px-4 py-1 rounded-sm text-lg"
          >
            Clear All
          </button>
        </section>
      )}
    </section>
  );
}

export default Todo;
