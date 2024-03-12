import { IoIosCloseCircle } from "react-icons/io";
import styles from "./TaskWindow.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createNewTask } from "./../../../redux/slice";

const TaskWindow = ({ setWindow }) => {
  const [taskName, setTaskName] = useState("");
  const [abouteTask, setAbouteTask] = useState("");
  const [timer, setTimer] = useState("");
  const dispatch = useDispatch();
  const taskId = uuidv4();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (taskName && abouteTask && timer) {
      const newTaskInfo = {
        id: taskId,
        taskName: taskName,
        taskText: abouteTask,
        taskImportant: timer,
      };

      dispatch(createNewTask(newTaskInfo));

      setTaskName("");
      setAbouteTask("");
      setTimer("");
    }
  };

  return (
    <div className={styles.taskWindow}>
      <div className={styles.container}>
        <div className={styles.taskTitleWrapper}>
          <h3>Enter a new task</h3>
          <button className={styles.clouseBtn} onClick={() => setWindow(false)}>
            <IoIosCloseCircle />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Write the title of the task"
            className={styles.inputTitle}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            placeholder="Describe the task"
            className={styles.textarea}
            value={abouteTask}
            onChange={(e) => setAbouteTask(e.target.value)}
          ></textarea>
          <div className={styles.wrapper}>
            <input
              type="time"
              id="timer"
              name="timer"
              required
              className={styles.timer}
              title="Specify the task completion time"
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
            />

            <button className={styles.submitBtn} onSubmit={handleSubmitForm}>
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskWindow;
