import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <main className="bg-gray-800">
      <h1 className="text-center text-4xl py-5 text-white">React Redux</h1>
      <Todo />
    </main>
  );
};

export default App;
