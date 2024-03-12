import styles from "./ProcessedDesk.module.css";

const ProcessedDesk = () => {
  return (
    <section className={styles.processedDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>Tasks at work</h3>
        <div className={styles.taskBox}></div>
      </div>
    </section>
  );
};

export default ProcessedDesk;
