import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const processedTask = createSlice({
  name: "ProcessedTask",
  initialState,
  reducers: {
    processed: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const processed = processedTask.actions.processed;

export default processedTask.reducer;
