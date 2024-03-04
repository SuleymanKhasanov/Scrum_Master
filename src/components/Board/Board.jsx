import NewTaskDesk from "./NewTaskDesk/NewTaskDesk";
import ProcessedDesk from "./ProcessedDesk/ProcessedDesk";
import styles from "./Board.module.css";
import DoneDesk from "./DoneDesk/DoneDesk";
import DeleteDesk from "./DeleteDesk/DeleteDesk";

function Board() {
  return (
    <div className={styles.boardContainer}>
      <NewTaskDesk />
      <ProcessedDesk />
      <DoneDesk />
      <DeleteDesk />
    </div>
  );
}

export default Board;
