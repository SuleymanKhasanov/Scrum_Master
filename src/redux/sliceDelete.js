import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const deleteTask = createSlice({
  name: "DeleteTask",
  initialState,
  reducers: {
    deleteCard: (state, action) => {
      if (state.filter((element) => element.id === action.payload.id)) {
        return [];
      }
    },
  },
});

export const deleteCard = deleteTask.actions.deleteCard;

export default deleteTask.reducer;
