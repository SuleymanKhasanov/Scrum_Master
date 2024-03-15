import { useSelector } from "react-redux";
import styles from "./ProcessedDesk.module.css";
import TaskCard from "../TaskCard/TaskCard";
import { useEffect, useState } from "react";

const ProcessedDesk = () => {
  const processedData = useSelector((data) => data.processedTask);
  const rejectTask = useSelector((data) => data.rejectTask);
  const doneData = useSelector((data) => data.doneTask);

  const [filteredCards, setFilteredCards] = useState(processedData);

  useEffect(() => {
    const filteredData = processedData.filter(
      (card) => !rejectTask.some((rejectedItem) => rejectedItem.id === card.id)
    );

    const filteredData2 = processedData.filter(
      (card) => !doneData.some((item) => item.id === card.id)
    );

    const filteredData3 = filteredData.filter((card) =>
      filteredData2.some((item) => item.id === card.id)
    );

    console.log(filteredData3);
    setFilteredCards(filteredData3);
  }, [processedData, rejectTask, doneData]);

  return (
    <section className={styles.processedDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>
          Tasks at work <span className={styles.counter}>{filteredCards.length}</span>
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
                  processedCard1={data.processedCard}
                />
              );
            })
          ) : (
            <p className={styles.noTask}>You have no tasks at work</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessedDesk;
