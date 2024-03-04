import styles from "./TaskWindowHede.module.css";
const TaskWindowHide = ({ setWindow }) => {
  return (
    <>
      <button className={styles.taskWindowHide__text} onClick={() => setWindow(true)}>
        Create new task
      </button>
    </>
  );
};

export default TaskWindowHide;
