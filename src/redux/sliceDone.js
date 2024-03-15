import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const doneTask = createSlice({
  name: "DoneTask",
  initialState,
  reducers: {
    done: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const done = doneTask.actions.done;

export default doneTask.reducer;
