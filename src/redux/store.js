import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slice";
import taskDetails from "./sliceMoreDetails";
import rejectTask from "./sliceReject";
import deleteTask from "./sliceDelete";

const store = configureStore({
  reducer: {
    newTask: tasks,
    moreDetails: taskDetails,
    rejectTask: rejectTask,
    deleteTask: deleteTask,
  },
});

export default store;
