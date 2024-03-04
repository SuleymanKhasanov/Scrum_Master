import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasks = createSlice({
  name: "NewTask",
  initialState,
  reducers: {
    createNewTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const createNewTask = tasks.actions.createNewTask;

export default tasks.reducer;
