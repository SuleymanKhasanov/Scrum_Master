import NewTaskDesk from "./NewTaskDesk/NewTaskDesk";
import ProcessedDesk from "./ProcessedDesk/ProcessedDesk";
import styles from "./Board.module.css";
import DoneDesk from "./DoneDesk/DoneDesk";
import DeleteDesk from "./DeleteDesk/DeleteDesk";
import MoreDetails from "../MoreDetails/MoreDetails";

function Board() {
  return (
    <div className={styles.boardContainer}>
      <NewTaskDesk />
      <ProcessedDesk />
      <DoneDesk />
      <DeleteDesk />
      <MoreDetails />
    </div>
  );
}

export default Board;
