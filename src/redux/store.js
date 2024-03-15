import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slice";
import taskDetails from "./sliceMoreDetails";
import rejectTask from "./sliceReject";
import processedTask from "./sliceProcessed";
import doneTask from "./sliceDone";

const store = configureStore({
  reducer: {
    newTask: tasks,
    moreDetails: taskDetails,
    rejectTask: rejectTask,
    processedTask: processedTask,
    doneTask: doneTask,
  },
});

export default store;
