import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const actiosFromMobile = createSlice({
  name: "MobileActions",
  initialState,
  reducers: {
    MobileAction: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const MobileAction = actiosFromMobile.actions.MobileAction;

export default actiosFromMobile.reducer;
