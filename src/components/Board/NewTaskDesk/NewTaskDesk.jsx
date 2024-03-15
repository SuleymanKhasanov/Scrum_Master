import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./NewTaskDesk.module.css";
import { useEffect, useState } from "react";

const NewTaskDesk = () => {
  const cardData = useSelector((data) => data.newTask);
  const rejectTask = useSelector((data) => data.rejectTask);
  const processedTask = useSelector((data) => data.processedTask);

  const [filteredCards, setFilteredCards] = useState(cardData);

  useEffect(() => {
    const filteredData = cardData.filter(
      (card) => !rejectTask.some((rejectedItem) => rejectedItem.id === card.id)
    );
    const filteredData2 = cardData.filter(
      (card) => !processedTask.some((processedItem) => processedItem.id === card.id)
    );

    const filteredData3 = filteredData.filter((card) =>
      filteredData2.some((processedItem) => processedItem.id === card.id)
    );

    setFilteredCards(filteredData3);
  }, [cardData, rejectTask, processedTask]);

  return (
    <section className={styles.newTaskDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>
          New tasks <span className={styles.counter}>{filteredCards.length}</span>
        </h3>
        <div className={styles.taskBox}>
          {filteredCards.length !== 0 ? (
            filteredCards.map((data) => {
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
