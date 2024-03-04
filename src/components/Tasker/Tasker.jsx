import { useState } from "react";
import styles from "./Tasker.module.css";
import TaskWindowHide from "./TaskWindowHide/TaskWindowHide";
import TaskWindow from "./TaskWindow/TaskWindow";

const Tasker = () => {
  const [window, setWindow] = useState(false);
  return (
    <div className={styles.tasker}>
      {window === true ? (
        <TaskWindow setWindow={setWindow} />
      ) : (
        <TaskWindowHide setWindow={setWindow} />
      )}
    </div>
  );
};

export default Tasker;
