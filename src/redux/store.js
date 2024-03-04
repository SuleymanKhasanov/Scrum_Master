import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slice";

const store = configureStore({
  reducer: {
    newTask: tasks,
  },
});

export default store;
