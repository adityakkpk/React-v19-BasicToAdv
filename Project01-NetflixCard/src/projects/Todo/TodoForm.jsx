import React, { useState } from "react";

const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (val) => {
    setInputValue(val);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  }

  return (
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
  );
};

export default TodoForm;
