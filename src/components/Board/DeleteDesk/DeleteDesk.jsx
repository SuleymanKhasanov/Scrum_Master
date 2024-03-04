import styles from "./DeleteDesk.module.css";

const DeleteDesk = () => {
  return (
    <section className={styles.deleteDesk}>
      <div className={styles.container}>
        <h3 className={styles.taskTitle}>Delete tasks</h3>
        <div className={styles.taskBox}></div>
      </div>
    </section>
  );
};

export default DeleteDesk;
