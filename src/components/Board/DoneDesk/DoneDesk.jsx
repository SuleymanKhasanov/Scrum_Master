import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./DoneDesk.module.css";

const DoneDesk = () => {
  const doneData = useSelector((data) => data.doneTask);

  return (
    <section className={styles.doneDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>
          Completed tasks <span className={styles.counter}>{doneData.length}</span>
        </h3>
        <div className={styles.taskBox}>
          {doneData.length !== 0 ? (
            doneData.map((data) => {
              return (
                <TaskCard
                  id={data.id}
                  taskName={data.taskName}
                  taskText={data.taskText}
                  taskImportant={data.taskImportant}
                  key={data.id}
                  processedCard1={data.processedCard}
                  doneCard={data.doneCard}
                />
              );
            })
          ) : (
            <p className={styles.noTask}>You have no completed tasks</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoneDesk;
