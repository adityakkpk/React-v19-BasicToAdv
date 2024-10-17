import { createStore } from "redux";

const initialState = {
  task: [],
};

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return { ...state, task: updatedTask };

    default:
      return state;
  }
};

// Create the Redux state using the reducer
const store = createStore(taskReducer);
console.log(store);

console.log("Initial state", store.getState());

store.dispatch({type: ADD_TASK, payload: "Do not talk more to people" });

console.log("After adding task 1:", store.getState());

store.dispatch({type: ADD_TASK, payload: "Be focused on your goal" });

console.log("After adding task 2:", store.getState());

store.dispatch({type: DELETE_TASK, payload: 0 });

console.log("After Deleting task 1:", store.getState());