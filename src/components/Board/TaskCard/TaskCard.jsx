import styles from "./TaskCard.module.css";

function TaskCard({ id, taskText, taskName, taskImportant }) {
  const firstLetterUpperOnName = taskName[0].toUpperCase();
  const deleteFirstLetterOnName = taskName.slice(1);
  const newTitleName = firstLetterUpperOnName + deleteFirstLetterOnName;

  const firstLetterUpperOnText = taskText[0].toUpperCase();
  const deleteFirstLetterOnText = taskText.slice(1);
  const newText = firstLetterUpperOnText + deleteFirstLetterOnText;

  return (
    <div className={styles.taskCard} key={id}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.taskName}>{newTitleName}</h4>
          <span className={styles.timer}>{taskImportant}</span>
        </div>

        <p className={styles.taskTitle}>{newText.slice(0, 100) + "..."}</p>
        <div className={styles.actionButtons}>
          <button className={styles.moreBtn}>More details</button>
          <button className={styles.rejectBtn}>Reject</button>
          <button className={styles.executeBtn}>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
