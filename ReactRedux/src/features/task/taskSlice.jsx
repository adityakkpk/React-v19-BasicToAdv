import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
      // return { ...state, task: [...state.task, action.payload] };
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      // const updatedTask = state.task.filter((currTask, index) => {
      //   return index !== action.payload;
      // });
      // return { ...state, task: updatedTask };
    },
  },
});

export const { addTask, deleteTask } = taskReducer.actions;
export default taskReducer.reducer;