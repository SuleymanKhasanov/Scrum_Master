import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const rejectTask = createSlice({
  name: "RejectTask",
  initialState,
  reducers: {
    reject: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const reject = rejectTask.actions.reject;

export default rejectTask.reducer;
