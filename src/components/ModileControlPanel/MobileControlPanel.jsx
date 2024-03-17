import { useDispatch } from "react-redux";
import styles from "./ModileControlPanel.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { MobileAction } from "../../redux/sliceMobileActions";

const MobileControlPanel = () => {
  const dispatch = useDispatch();

  // Action for newTaskBtn
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    if (newTask) {
      dispatch(MobileAction({ TaskMobileBtn: 0 }));
      setProcessed(false);
      setIsDone(false);
      setReject(false);
    }
  }, [newTask]);

  // Action for processedTaskBtn

  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    if (processed) {
      dispatch(MobileAction({ TaskMobileBtn: 1 }));
      setNewTask(false);
      setIsDone(false);
      setReject(false);
    }
  }, [processed]);

  // Action for doneTaskBtn

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) {
      dispatch(MobileAction({ TaskMobileBtn: 2 }));
      setNewTask(false);
      setProcessed(false);
      setReject(false);
    }
  }, [isDone]);

  // Action for rejectTaskBtn

  const [reject, setReject] = useState(false);

  useEffect(() => {
    if (reject) {
      dispatch(MobileAction({ TaskMobileBtn: 3 }));
      setNewTask(false);
      setProcessed(false);
      setIsDone(false);
    }
  }, [reject]);

  return (
    <div className={styles.controlPanel}>
      <div className={styles.container}>
        <button
          className={newTask === true ? styles.buttonAction : styles.button}
          onClick={() => setNewTask(true)}
        >
          New
        </button>
        <button
          className={processed === true ? styles.buttonAction : styles.button}
          onClick={() => setProcessed(true)}
        >
          Processed
        </button>
        <button
          className={isDone === true ? styles.buttonAction : styles.button}
          onClick={() => setIsDone(true)}
        >
          Done
        </button>
        <button
          className={reject === true ? styles.buttonAction : styles.button}
          onClick={() => setReject(true)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default MobileControlPanel;
