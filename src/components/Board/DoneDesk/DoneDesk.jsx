import styles from "./DoneDesk.module.css";

const DoneDesk = () => {
  return (
    <section className={styles.doneDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>Done tasks</h3>
        <div className={styles.taskBox}></div>
      </div>
    </section>
  );
};

export default DoneDesk;
