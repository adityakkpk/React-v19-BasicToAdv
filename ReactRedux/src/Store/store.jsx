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

// Action creators : This is not Redux this is just a convention 
const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
}

const deleteTask = (data) => {
  return { type: DELETE_TASK, payload: data };
}

// Create the Redux state using the reducer
export const store = createStore(taskReducer);
console.log(store);

console.log("Initial state", store.getState());

store.dispatch(addTask("Do not talk more to people"));
store.dispatch(addTask("Do not talk more to relatives"));
store.dispatch(addTask("Do not talk more to friends"));

console.log("After adding tasks:", store.getState());

store.dispatch(addTask("Be focused on your goal"));

console.log("After adding task 2:", store.getState());

store.dispatch(deleteTask(2));

console.log("After Deleting task 1:", store.getState());
