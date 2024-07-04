import {MdCheck, MdDeleteForever} from 'react-icons/md';
import React from "react";

const TodoList = ({data, handleTodoDelete, handleCheckedTodo, checked}) => {
  return (
    <li
      className="h-10 my-4 bg-white flex items-center text-lg px-4 rounded-lg"
    >
      <p className={`w-80 ${checked ? "line-through" : ""}`}>{data}</p>
      <button className="border mx-2 p-2 rounded bg-slate-300" onClick={() => handleCheckedTodo(data)}>
        <MdCheck className="text-green-600" />
      </button>
      <button className="border mx-2 p-2 rounded bg-slate-300" onClick={() => handleTodoDelete(data)}>
        <MdDeleteForever className="text-red-600" />
      </button>
    </li>
  );
};

export default TodoList;
