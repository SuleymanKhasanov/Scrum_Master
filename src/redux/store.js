import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasks from "./slice";
import taskDetails from "./sliceMoreDetails";

const store = configureStore({
  reducer: {
    newTask: tasks,
    moreDetails: taskDetails,
  },
});

export default store;
