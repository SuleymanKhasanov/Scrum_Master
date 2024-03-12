import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./NewTaskDesk.module.css";

const NewTaskDesk = () => {
  const cardData = useSelector((data) => {
    return data.newTask;
  });

  return (
    <section className={styles.newTaskDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>
          New tasks <span className={styles.counter}>{cardData.length}</span>
        </h3>
        <div className={styles.taskBox}>
          {cardData.length !== 0 ? (
            cardData.map((data) => {
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
            <p className={styles.noTask}>You have no tasks</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewTaskDesk;
