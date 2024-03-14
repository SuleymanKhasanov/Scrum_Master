import { useSelector } from "react-redux";
import styles from "./DeleteDesk.module.css";
import TaskCard from "../TaskCard/TaskCard";

const DeleteDesk = () => {
  const data = useSelector((data) => {
    return data.rejectTask;
  });

  return (
    <section className={styles.deleteDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>
          Rejected tasks
          <span className={styles.counter}>{data.length}</span>
        </h3>

        <div className={styles.taskBox}>
          {data.length !== 0 ? (
            data.map((data) => {
              return (
                <TaskCard
                  id={data.id}
                  taskName={data.taskName}
                  taskText={data.taskText}
                  taskImportant={data.taskImportant}
                  key={data.id}
                />
              );
            })
          ) : (
            <p className={styles.noTask}>You have no rejected tasks</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeleteDesk;
