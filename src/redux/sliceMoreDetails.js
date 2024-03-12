import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskDetails = createSlice({
  name: "MoreDetails",
  initialState,
  reducers: {
    moreDetails: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const moreDetails = taskDetails.actions.moreDetails;

export default taskDetails.reducer;
