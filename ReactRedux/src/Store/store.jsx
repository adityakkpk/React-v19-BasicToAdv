import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const initialState = {
  task: [],
};

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch";

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return { ...state, task: updatedTask };
    
    case FETCH_TASKS:
      return {...state, task: [...state.task, ...action.payload] };

    default:
      return state;
  }
};

// Action creators : This is not Redux this is just a convention
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (data) => {
  return { type: DELETE_TASK, payload: data };
};

// Create the Redux state using the reducer
// export const store = createStore(taskReducer, composeWithDevTools( applyMiddleware(thunk)));
// console.log(store);

// Using Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

console.log("Initial state", store.getState());

store.dispatch(addTask("Do not talk more to people"));
store.dispatch(addTask("Do not talk more to relatives"));
store.dispatch(addTask("Do not talk more to friends"));

console.log("After adding tasks:", store.getState());

store.dispatch(addTask("Be focused on your goal"));

console.log("After adding task 2:", store.getState());

store.dispatch(deleteTask(2));

console.log("After Deleting task 1:", store.getState());

// To test the thunk middleware
export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
      const data = await response.json();
      dispatch({ type: FETCH_TASKS, payload: data.map((curr) => curr.title) });
    } catch (error) {
      console.error(error);
    }
  };
}